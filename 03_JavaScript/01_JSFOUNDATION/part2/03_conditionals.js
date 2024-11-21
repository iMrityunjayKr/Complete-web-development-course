//checking if a number is greater than another number:
let num1 = 5;
let num2 = 8;

if (num1 > num2) {
  console.log(`${num1} is greater than ${num2}`);
} else {
  console.log(`${num2} is greater than ${num1}`);
}

// checking if a string is equal to another string;

let username = "chai";
let anotheUsername = "chai";
if (username == anotheUsername) console.log("Pick another username");
else console.log("You can pick this username");

// checking if a variable is a number or not;

let score = 44;

if (typeof score === "number") {
  console.log("Yep, this is a number");
} else {
  console.log("No that is not a number");
}

//checking if a boolern value is true or false:

let isTeaReady = false;

if (isTeaReady) {
  console.log("Tea is Ready");
} else {
  console.log("Tea is not ready");
}

//checking if an array is empty or not:

let items = [];
console.log(items.length);

if(!(items.length)){
  console.log("Array is empty");
  
}else{
  console.log("Array is not empty");

}