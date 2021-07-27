function newFunction(name, age, country) {
  var name = name || "oscar";
  var age = age || 23;
  var country = country || "MX";
  console.log(name, age, country);
}

function newFunction2(name = "Javier", age = 32, country = "MX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("Jose", 24, "US");

// ES6 Functions with default params

let hello = "Hello";
let world = "World";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

// ES6 String concatenation, ${} allow us to use variables easily

let lorem =
  "Paranguaricutirimicuaro espeaskldjasd no se que poner xD\n" +
  "Another epic prhase... we needed.";

let lorem2 = `Esta es la forma en la que ES6 lo hace uwu
aqui es otra linea sin tener que contatenar y usar slash n
lorem uwu`;

console.log(lorem);
console.log(lorem2);

// ES6 String multiline

let person = {
  nameJ: "Javier",
  age: 23,
  country: "MX",
};
console.log(person.nameJ, person.age, person.country);

let { nameJ, age, country } = person;
console.log(nameJ, age, country);

// ES6 Desconstruction

let team1 = ["Oscar", "Javier", "Ricardo"];
let team2 = ["Dua", "Danai", "Mikasa"];

let education = ["David", ...team1, ...team2];

console.log(education);

// ES6 ... allow us to link diferent variables

// Let is a new convention to name our variables, a diference from var is that 'let' is just available in local scope

{
  var globalVar = "Global var";
}

{
  let globallet = "Global let";
  console.log(globallet); //Variable local, disponible unicamente en este scope
}

console.log(globalVar);
console.log(globallet); // Is unnaccesible because let just has a local scope, which is defined in the block above.

const a = "b"; // Is a constant variable, is now allowed to change its value.
a = "c";
console.log(a);

// ES6 VAR, LET & CONST

let nameJ = "Javier";
let age = 23;

// ES5 structure
obj = { nameJ: nameJ, age: age };
// ES6 structure
obj2 = { nameJ, age };
console.log(obj);
console.log(obj2);

// Arrow functions

const names = [
  { namel: "Javier", age: 23 },
  { namel: "Yess", age: 24 },
];

let listOfNames = names.map(function (item) {
  console.log(item.namel);
});

let listOfNames2 = names.map((item) => console(item.name));
const listOfNames3 = (namel, age) => {
  //...
};

const listOfNames4 = (namel) => {
  //...
};

const square = (num) => num * num;

//Promises
const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey");
    } else {
      reject("Chin....");
    }
  });
};

helloPromise()
  .then((Response) => console.log(Response))
  .catch((error) => console.log("error"));

class calculator {
  constructor() {
    this.valueA = 0;
    this.valueB = 0;
  }

  sum(valueA, valueB) {
    this.valueA = valueA;
    this.valueB = valueB;

    return this.valueA + this.valueB;
  }
}

const calc = new calculator();
console.log(calc.sum(2, 2));

//new sintaxis, not supported
import { hello } from "./module";

//Old sintaxis
const helloF = require("./module");
console.log(helloF());

function* helloWorld() {
  //Generator
  if (true) {
    yield "hello, ";
  }
  if (true) {
    yield "World";
  }
}

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
