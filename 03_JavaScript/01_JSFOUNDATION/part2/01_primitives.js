//Number
let balance = 120;
let anotherBalance = new Number(120)

// console.log(typeof balance);
// console.log(anotherBalance);
// console.log(anotherBalance.valueOf());


// console.log(typeof balance);
// console.log(typeof anotherBalance);

let firstName = null; // it is of type null
let lastName; // it is of type undefined. as it exist but not defined.

let myString = "Hello"
let myStringOne = 'Hola'
let username = "Mrityunjay"

let oldGreet = myString + " " + "Mrityunjay"
// console.log(oldGreet);

let greetMessage  = `Hello ${username}`
let demoOne = `Value is ${2*5*2+5}`

// console.log(greetMessage);
// console.log(demoOne);


let sm1 = Symbol('Mrityunjay')
let sm2 = Symbol('Mrityunjay')

console.log(sm1);
console.log(sm2);
console.log(sm1 == sm2);
