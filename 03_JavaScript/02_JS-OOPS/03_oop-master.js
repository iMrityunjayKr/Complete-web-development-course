let OldCar = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  start: function () {
    return `${this.make} car got started in ${this.year}`;
  },
};
// console.log(OldCar.start());

//above way has a lot's of problem for creating copies

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let john = new Person("John Doe", 20);

// console.log(john);

//prototype chai

function Animal(type) {
  this.type = type;
}
Animal.prototype.speak = function () {
  return `${this.type} makes a sound`;
};

// Even we can make our custom prototype for defined objects

Array.prototype.mrityunjay = function () {
  return `Custom method ${this}`;
};
let arr = [1, 2, 3, 4, 5];
let newArr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr.mrityunjay());
// console.log(newArr.mrityunjay());

//class

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
class Car extends Vehicle {
  drive() {
    return ` ${this.make}: This is an ineritance example`;
  }
}

let myCar = new Car("Toyoto", "Corolla");
// console.log(myCar);
// console.log(myCar.drive());

//Encapsulation - I want to restrict the direct access to the object data.

class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance += amount;
    return this.#balance;
  }
  getBalance() {
    return `$ ${this.#balance}`;
  }
}

let account = new BankAccount();
// console.log(account.getBalance());

//Abstraction -- hide complex implementation adn expose only necessary stuff.

class coffeeMachine {
  start() {
    //DB calls
    //making computation
    return "Starting the machine...";
  }
  brewCoffee() {
    //adding coffee
    //mixing
    //grating
    return "brewing coffee";
  }
  pressStartButton() {
    let msgone = this.start();
    let msgtwo = this.brewCoffee();
    return `${msgone} + ${msgtwo}`;
  }
}
let myMachine = new coffeeMachine();
// console.log(myMachine.pressStartButton());

//polymorphism -- the ability to take multiple forms.

class Bird {
  fly() {
    return `Flying...`;
  }
}
class Penguine extends Bird {
  fly() {
    return `Can't Fly`;
  }
}
let bird = new Bird();
let penguine = new Penguine();
// console.log(bird.fly());
// console.log(penguine.fly());

//static method

class Calculator {
  static add(a, b) {
    return a + b;
  }
}
let miniCalc = new Calculator();
// console.log(miniCalc.add(5,9)); // static methods can only be called by class itself.
// console.log(Calculator.add(5, 8));

// getter and setter

class Employee {
  #salary;
  constructor(name, salary) {
    if(salary<0){
      throw new Error("Salary can not be in negative");
      
    }
    this.name = name;
    this.#salary = salary;
  }
  get salary() {
    return ` You are not allowed to see salary`;
  }
  set salary(value) {
    if (value < 0) {
      console.error("Invalid Salary");
    } else {
      this._salary = value;
    }
  }
}

let emp = new Employee ("Alice", -50000);
console.log(emp._salary);
emp.salary = 60000;
