document.addEventListener("DOMContentLoaded", () => {
  const expenseForm = document.getElementById("expense-form");
  const expenseAmountInput = document.getElementById("expense-amount");
  const expenseNameInput = document.getElementById("expense-name");
  const expenseList = document.getElementById("expense-list");
  const totalAmountDisplay = document.getElementById("total-amount");

  // Initialize expenses from localStorage
  let expenses = loadExpensesFromLocal();

  // Render existing expenses and update total
  renderExpenses();
  updateTotal();

  // Handle form submission
  expenseForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);

    // Validate input
    if (name !== "" && !isNaN(amount) && amount > 0) {
      const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
      };

      // Add new expense to array and localStorage
      expenses.push(newExpense);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();

      // Clear input fields
      expenseNameInput.value = "";
      expenseAmountInput.value = "";
    }
  });

  // Load expenses from localStorage
  function loadExpensesFromLocal() {
    try {
      const data = localStorage.getItem("expenses");
      return JSON.parse(data) || [];
    } catch (error) {
      console.error("Error loading expenses:", error);
      return [];
    }
  }

  // Save expenses to localStorage
  function saveExpensesToLocal() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }

  // Calculate total amount
  function calculateTotal() {
    return expenses.reduce((sum, expense) => sum + expense.amount, 0);
  }

  // Update the total amount display
  function updateTotal() {
    totalAmountDisplay.textContent = calculateTotal().toFixed(2);
  }

  // Render all expenses
  function renderExpenses() {
    expenseList.innerHTML = "";
    if (expenses.length === 0) {
      expenseList.textContent = "No expenses yet.";
      return;
    }
    expenses.forEach((expense) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${expense.name} - $ ${expense.amount.toFixed(2)}
        <button data-id="${expense.id}">Delete</button>
      `;
      expenseList.appendChild(li);
    });
  }

  // Handle expense deletion
  expenseList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const expenseId = parseInt(e.target.getAttribute("data-id"));
      expenses = expenses.filter((expense) => expense.id !== expenseId);
      saveExpensesToLocal();
      renderExpenses();
      updateTotal();
    }
  });
});
