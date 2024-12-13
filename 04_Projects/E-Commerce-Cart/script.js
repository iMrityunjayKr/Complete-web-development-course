document.addEventListener("DOMContentLoaded", () => {
  let products = [
    { id: 1, name: "Product 1", price: 74.99 },
    { id: 2, name: "Product 2", price: 45.99 },
    { id: 3, name: "Product 3", price: 99.99 },
    { id: 4, name: "Product 4", price: 19.99 },
    { id: 5, name: "Product 5", price: 119.999 },
  ];
  let cart = [];

  const productList = document.getElementById("product-list");
  const cartItems = document.getElementById("cart-items");
  const emptyCartMessage = document.getElementById("empty-cart");
  const cartTotal = document.getElementById("cart-total");
  const totalPriceDisplay = document.getElementById("total-price");
  const checkoutBtn = document.getElementById("checkout-btn");

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
    <span>${product.name} - $${product.price.toFixed(2)} </span>
    <button data-id = "${product.id}">Add to Cart </button>
    `;
    productList.appendChild(productDiv);
  });
  productList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const productId = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === productId);
      addToCart(product);
    }
  });

  function addToCart(product) {
    cart.push(product);
    // console.log(cart);
    renderCart();
  }
  function renderCart() {
    let totalPrice = 0;
    cartItems.innerHTML = "";

    if (cart.length > 0) {
      cartTotal.classList.remove("hidden");
      cart.forEach((item, index) => {
        totalPrice += item.price;
        const cartItem = document.createElement("div");
        cartItem.classList.add("cartItem");
        cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`;
        cartItems.appendChild(cartItem);
        totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`;
      });
    } else {
      cartTotal.innerHTML = "";
    }
  }
  checkoutBtn.addEventListener("click", () => {
    cart.length = 0;
    alert("Checkout Successfully");
    renderCart();
  });
});
