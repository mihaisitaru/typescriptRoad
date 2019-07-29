function Greeter(greeting: string) {
  this.greeting = greeting;
}

Greeter.prototype.greet = function() {
  return "Hello, " + this.greeting;
};

let greeter = new Greeter("world! Check the console for more details.");

let button = document.createElement("button");
button.textContent = "Say Hello";
button.onclick = function() {
  alert(greeter.greet());
};

document.body.appendChild(button);

let hasHobbies: boolean = false;

let myRealAge: number;
myRealAge = 32;

let hobbies: any[] = ["Running", "Reading"];
hobbies = [100];
console.log(hobbies);

let address: [number, string] = [52, "FakeStreet"];
enum Color {
  Blue,
  Yellow = 15,
  Red = 2
}

let myColor: Color = Color.Blue;
let newColor: Color = Color.Red + 1;
console.log(myColor); //0
console.log(newColor);

let house: any = "loft";
console.log(house);
house = { type: "appartment", rooms: 3 };
console.log(house);

function returnMyAge(): number {
  return myRealAge;
}

console.log(returnMyAge());

function sayHi(): void {
  console.log("Hi there!");
  //return myRealAge;
}

function multiply(x: number, y: number): number {
  return x * y;
}

console.log(multiply(2, 3));

let newMultiply: (val1: number, val2: number) => number;
//newMultiply = sayHi;
//newMultiply();
newMultiply = multiply;
console.log(newMultiply(5, 6));

let userData: { name: string; age: number } = {
  name: "Mihai",
  age: 32
};

console.log(userData);

// userData = {
//   a: 'Hi',
//   b: 45
// };

type ComplexObj = { data: number[]; output: (all: boolean) => number[] };

let complexObj: ComplexObj = {
  data: [5, 7, 9],
  output: function(all: boolean): number[] {
    return this.data;
  }
};
console.log(complexObj);

// union types

let myRealRealAge: number | string = 32;
myRealRealAge = "33";
// myRealRealAge = true;

let anotherVar = "anything";
if (typeof anotherVar == "number") {
  console.log("anotherVar is of type number");
} else {
  console.log(
    "anotherVar is not of type number, but of type: ",
    typeof anotherVar
  );
}

function neverSayNever(): never {
  throw new Error("Error!");
}

let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

type BankAccount = { money: number; deposit: (a: number) => void };

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: { name: string; bankAccount: BankAccount; hobbies: string[] } = {
  name: "Mihai",
  bankAccount: bankAccount,
  hobbies: ["Running", "Reading"]
};

myself.bankAccount.deposit(3000);
console.log(myself);

let myName: string = "Mihai";
let myAge: number = 32;
//myName = 32;

let anyVar;
anyVar = 24;

function controlMe(isTrue: Boolean) {
  let result: number;
  if (isTrue) {
    result = 12;
  }
  result = 32;
  return result;
}

console.log(controlMe(true));

console.log("Arrow functions:");

const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
};

console.log(addNumbers(5, 3));

const multiplyNumbers = (number1: number, number2: number): number =>
  number1 * number2;

console.log(multiplyNumbers(8, 7));

const great = (): void => {
  console.log("Hello!");
};

great();

const greatFriend = friend => console.log(friend);

greatFriend("Bogdan");

console.log("Default params");

const countDown = (start: number = 10, end = start - 5): void => {
  console.log(start, end);
  while (start > 0) {
    start--;
  }
  console.log("Done!", start, end);
};

countDown();

console.log("Rest and Spread");

const numbers = [3, 17, 86, -7, 7, 2];
console.log(Math.max(3, 17, 86, -7, 7, 2));
console.log(Math.max(...numbers));

function createList(...args: number[]) {
  return args;
}
console.log(createList(1, 3, 5));

function createAnotherList(message: string, ...args: number[]) {
  console.log(message);
  return args;
}
console.log(createAnotherList("Hi!", 1, 3, 5));

function displayData(name: string, age: number) {
  console.log("My name is " + name + " and I am " + age + " years old!");
}

displayData("Mihai", 32);

function displayDataAgain(...data: [string, number]) {
  console.log(
    "My name is %c" + data[0] + "%c and I am " + data[1] + " years old!",
    "font-weight: 900",
    "font-weight: 300"
  );
}

displayDataAgain("Mihai", 32);

console.log("%cDestructuring", "color: #ff0000; font-weight: bolder");

const myList = ["Run", "Eat", "Sleep"];
console.log(myList[0], myList[1], myList[2]);
const [item1, item2, item3] = myList;
console.log(item1, item2, item3);

const personDet = {
  persName: "Mihai",
  age: 32
};

const personDetAgain = {
  persNameReal: "Mihai S.",
  ageReal: 33
};

const { persName, age } = personDet;
console.log(persName, "is", age, "years old!");

const { persNameReal: myRealName, ageReal: myRealA } = personDetAgain;
console.log(myRealName, "is", myRealA, "years old!");

console.log("Template literals");

const userFirstName = "Mihai";
const userLastName = "Sitaru";
const greeting = "Hello, I'm " + userFirstName;
const greeting2 = `Hello 
I\'m ${userFirstName}
${userLastName}.`;
console.log(greeting);
console.log(greeting2);

console.log("%cSection 4 - exercises", "color: rgb(152, 88, 22)");

//1 - Arrow function
const double = (value: number): number => value * 2;
console.log(double(10));

//2 - Default param
const greet2 = function(name: string = "Max"): void {
  console.log("Hello " + name);
};

greet2();
greet2("Anna");

//3 - spread operator
const nr = [-3, 33, 38, 5];
console.log(Math.min(...nr));

//4 - spread operator 2
const newArray = [55, 20];
newArray.push(...nr);
console.log(newArray);

//5 - destructuring array
const testResults = [3.89, 2.99, 1.38];
const [result1, result2, result3] = testResults;
console.log(result1, result2, result3);

//6 - destructuring object
const scientist = {
  firstName: "Will",
  experience: 12
};

const { firstName: scientistName, experience: exp } = scientist;
console.log(scientistName, exp);

console.log(
  "%cSection 5 - Using classes to create objects",
  "color: rgb(152, 88, 22)"
);

class Person {
  name: string;
  private type: string;
  protected age: number = 32;
  constructor(name: string, public username: string) {
    this.name = name;
  }

  printAge() {
    console.log(this.age);
    this.setType("old person");
  }

  private setType(type: string) {
    this.type = type;
    console.log(this.type);
  }
}

const person = new Person("Mihai", "mihai.sitaru");
console.log(person);
console.log(person.name, person.username);
const { name: personName, username: user } = person;
console.log(personName, user);
person.printAge();

class Mihai extends Person {
  //name = 'Mihai';

  constructor(username: string) {
    super("MihaiS", username);
    this.age = 33;
  }
}

const mihai = new Mihai("mihaiSS");
console.log(mihai);

class Plant {
  private _species: string = "Default";

  get species() {
    return this._species;
  }

  set species(value: string) {
    this._species = value.length > 3 ? value : "Default";
  }
}

const plant = new Plant();
console.log(plant.species);
plant.species = "ABC";
console.log(plant.species);
plant.species = "Wonderful Plant";
console.log(plant.species);

class Helpers {
  static PI: number = 3.14;
  static calcCircumference(diameter: number): number {
    return this.PI * diameter;
  }
}

console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(21));

abstract class Project {
  projectName: string = "Default";
  budget: number = 1000;

  abstract changeName(name: string): void;

  calcBudget(): number {
    return this.budget * 2;
  }
}

class ITProject extends Project {
  changeName(name: string): void {
    this.projectName = name;
  }
}

const newProject = new ITProject();
console.log(newProject);
newProject.changeName("Test project");
console.log(newProject);

class OnlyOne {
  private static instance: OnlyOne;

  private constructor(public readonly name: string) {}

  static getInstance() {
    if (!OnlyOne.instance) {
      OnlyOne.instance = new OnlyOne("The Only One");
    }
    return OnlyOne.instance;
  }
}

//const wrong = new OnlyOne('The Only One');
const right = OnlyOne.getInstance();
console.log(right);
console.log(right.name);
//right.name = 'Changed';
//console.log(right.name);

//Section 5 - Exercises

//1 - Class

class Car {
  name: string;
  acceleration: number = 0;

  constructor(name: string) {
    this.name = name;
  }

  honk(): void {
    console.log("Toooooot");
  }

  accelerate(speed: number): void {
    this.acceleration = this.acceleration + speed;
  }
}

const car = new Car("BMW");
console.log(car.name);
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

//2 - Inheritance

class BaseObject {
  width: number = 0;
  length: number = 0;
}

class Rectangle extends BaseObject {
  calcSize(): number {
    return this.width * this.length;
  }
}

const rectangle = new Rectangle();
rectangle.width = 50;
rectangle.length = 2;
console.log(rectangle.calcSize());

// 3 - Getters and Setters

class Pers {
  private _firstName: string = "";

  get firstName(): string {
    return this._firstName;
  }

  set firstName(value: string) {
    this._firstName = value.length > 4 ? value : "";
  }
}

const newPers = new Pers();
console.log(newPers);
newPers.firstName = "Maxi";
console.log(newPers.firstName);
newPers.firstName = "Maximilian";
console.log(newPers.firstName);

console.log("%cSection 6", "color: rgb(152, 88, 22)");

console.log("Namespaces");
// Using command tsc -outFile script.js rectangleMath.ts circleMath.ts script.ts

//console.log(MyMath.calculateRectangle(10, 20));
//console.log(MyMath.calculateCircumference(15));

const PI = 3.1415;
console.log(PI);

// Using imports
/*
/// <reference path='rectangleMath.ts'/>
/// <reference path='circleMath.ts'/>
*/

// import CircleMath = MyMath.Circle;

// console.log(MyMath.calculateRectangle(10, 20));
// console.log(CircleMath.calculateCircumference(15));

// Namespaces disadvantages are related to keeping track of which file needs to be imported and in what order
// Namespaces are more for small applications

console.log("Modules");

import * as Circle from "./math/circle";
import calc from "./math/rectangle";

console.log(Circle._PI);
console.log(Circle.calculateCircumference(18));
console.log(calc(5, 3));

console.log("%cSection 7", "color: rgb(152, 88, 22)");

// Interfaces

interface PersonDetails {
  fName?: string; // the '?' says it's not a required property name
  currentAge: number;
  [propName: string]: any; //flexible property name
}

const persM = {
  fName: "Mihai",
  currentAge: 32,
  hobby: 'Running'
};

function greet(person: PersonDetails): void {
  console.log("Hello, " + person.fName);
}

function changeAge(person: PersonDetails): number {
  console.log("Called with: " + person.currentAge);
  return 33;
}

function logAge(person: PersonDetails): void {
  console.log("The age is now: " + person.currentAge);
}

function logHobby(person: PersonDetails): void {
  console.log('Person\'s hobby is: ' + person.hobby);
}

greet({fName: "Mihai", currentAge: 32});
logAge(persM);
persM.currentAge = changeAge(persM);
logAge(persM);
logHobby(persM);