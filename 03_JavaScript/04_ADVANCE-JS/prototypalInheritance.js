function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let mrityunjay = new Person("mrityunjay");
mrityunjay.greet();
console.log();

[[Prototype]];
