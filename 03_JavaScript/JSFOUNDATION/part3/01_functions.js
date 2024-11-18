/* 1. Write a function name 'makeTea' that takes one parameter, 'typeOfTea' and returns a string like 
"Making green tea" when called with "green tea".
Store the result in a variable named 'teaOrder'
 */

function makeTea(typeOfTea) {
  return `Making ${typeOfTea}`;
}
let teaOrder = makeTea("masala chai");
// console.log(teaOrder);

/*2. Create a function name 'orderTea' that take one parameter, 'teaType'. Inside this function, create anothere function name 'confirmorder' that returns a message like "order confirmed for chai"
call 'confirmOrder' from within 'orderTea' and return the result.
 */

function orderTea(teaType) {
  function confirmOrder() {
    return `Order confirmed for chai`;
  }
  return confirmOrder();
}

let orderConfirmation = orderTea("chai");
// console.log(orderConfirmation);

/* 3. Write an arrow function named 'calculateTotal' that take two parameters: 'price' and 'qunatity'. The function should return the total cost by multiplying the 'price' and 'quantity'.
Store the result in a variable name 'totalCost'.
 */
const calculateTotal = (price, quantity) => {
  return price * quantity;
};
let totalCost = calculateTotal(399, 100);
// console.log(totalCost);

// another way for same.

const calculateTotalCost = (price, quantity) => price * quantity;
let newTotalCost = calculateTotalCost(399, 100);
// console.log(newTotalCost);

/* 4. Write a function named 'processTeaOrder' that takes another function, 'makeTea' as a parameter and calls it with the argument "ear grey"
return the result of calling 'makeTea'.
 */

function make_Tea(typeofTea) {
  return `makeTea : ${typeofTea}`;
}

function processTeaOrder(teaFunction) {
  return teaFunction("earl grey");
}
let order = processTeaOrder(make_Tea);
// console.log(order);

/* 5. Write a function named 'createTeaMaker' that returns another function. The returned function should take one parameter, 'teaType' and return a message like "Making green tea"
Store the returned function in a variable named 'teaMaker' and call it with "green tea"
 */

function createTeaMaker() {
  return function (teaType) {
    return `Making ${teaType}`;
  };
}
let teaMaker = createTeaMaker();
let result = teaMaker("green tea");
console.log(result);
