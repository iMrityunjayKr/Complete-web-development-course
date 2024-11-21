//example1

document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragragh = document.getElementById("myParagraph");
    console.log(paragragh);

    paragragh.textContent = "the paragraph is changed";
    paragragh.style.backgroundColor = "blue";
  });

//example2

document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    let hold = citiesList.firstElementChild.classList.add("highlight");
  });

//example 3

document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeeType = document.getElementById("coffeeType");
  coffeeType.textContent = "Espresso";
  coffeeType.style.backgroundColor = "brown";
  coffeeType.style.padding = "5px";
  coffeeType.style.marginBottom = "10px";
});

//example 4

document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

//example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    document.getElementById("taskList").lastElementChild.remove("li");
  });

// example 6
document.getElementById("clickMeButton").addEventListener("click", function () {
  alert("I'm ghost");
});

//example 7

document.getElementById("teaList").addEventListener("click", function (event) {
  if (event.target && event.target.matches("#teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example 8 :
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    alert("Submitted!");
    event.preventDefault();
    // let feedback = document.querySelector("label[for = 'feedbackInput']"); --- grabbing the label of feedback.
    // console.log(feedback.textContent);

    let feedback = document.getElementById("feedbackInput").value;
    let content = document.getElementById("feedbackDisplay");
    content.textContent = ` Feedback is : ${feedback}`;
    content.style.backgroundColor = "white";
    content.style.color = "black";
    content.style.margin = "15px";
    content.style.padding = "15px";
  });

//example 9

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    let domLoaded = document.getElementById("domStatus");
    domLoaded.textContent = "DOM fully loaded";
    domLoaded.style.backgroundColor = "red";
    domLoaded.style.color = "black";
    domLoaded.style.margin = "15px";
    domLoaded.style.padding = "15px";
  }, 1000);
});

//example 10

document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
  });
