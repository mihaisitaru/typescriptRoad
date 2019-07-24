function Greeter(greeting: string) {
    this.greeting = greeting;
  }
  
  Greeter.prototype.greet = function() {
    return "Hello, " + this.greeting;
  };
  
  let greeter = new Greeter("world");
  
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

  let house: any = 'loft';
  console.log(house);
  house = {type: 'appartment', rooms: 3};
  console.log(house);
  
function returnMyAge(): number {
  return myRealAge;
}

console.log(returnMyAge());

function sayHi(): void {
  console.log('Hi there!');
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

let userData: {name: string, age: number} = {
  name: 'Mihai',
  age: 32
};

console.log(userData);

// userData = {
//   a: 'Hi',
//   b: 45
// };

type ComplexObj = {data: number[], output: (all: boolean) => number[]};

let complexObj: ComplexObj = {
  data: [5, 7, 9],
  output: function (all: boolean): number[] {
    return this.data;
  }
};
console.log(complexObj);

// union types

let myRealRealAge: number | string = 32;
myRealRealAge = '33';
// myRealRealAge = true;

let anotherVar = 'anything';
if (typeof anotherVar == 'number') {
  console.log('anotherVar is of type number');
} else {
  console.log('anotherVar is not of type number, but of type: ', typeof anotherVar);
}

function neverSayNever(): never {
  throw new Error('Error!');
}

let canBeNull: number | null = 12;
canBeNull = null;
let canAlsoBeNull;
canAlsoBeNull = null;

type BankAccount = {money: number, deposit: (a: number) => void};

let bankAccount: BankAccount = {
  money: 2000,
  deposit(value: number): void {
    this.money += value;
  }
};

let myself: {name: string, bankAccount: BankAccount, hobbies: string[]} = {
  name: 'Mihai',
  bankAccount: bankAccount,
  hobbies: ['Running', 'Reading']
};

myself.bankAccount.deposit(3000);
console.log(myself);

let myName: string = 'Mihai';
let myAge: number = 32
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

console.log('Arrow functions:');

const addNumbers = function(number1: number, number2: number): number {
  return number1 + number2;
}

console.log(addNumbers(5, 3));

const multiplyNumbers = (number1: number, number2: number): number => number1 * number2;

console.log(multiplyNumbers(8, 7));

const great = (): void => {
  console.log('Hello!');
};

great();

const greatFriend = friend => console.log(friend);

greatFriend('Bogdan');

console.log('Default params');

const countDown = (start: number = 10, end = start - 5): void => {
  console.log(start, end);
  while (start > 0) {
    start--;
  }
  console.log('Done!', start, end);
};

countDown();

console.log('Rest and Spread');

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
console.log(createAnotherList('Hi!', 1, 3, 5));

function displayData(name: string, age: number) {
  console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}

displayData('Mihai', 32);

function displayDataAgain(...data: [string, number]) {
  console.log('My name is %c' + data[0] + '%c and I am ' + data[1] + ' years old!', 'font-weight: 900', 'font-weight: 300');
}

displayDataAgain('Mihai', 32);

console.log('%cDestructuring', 'color: #ff0000; font-weight: bolder');

const myList = ['Run', 'Eat', 'Sleep'];
console.log(myList[0], myList[1], myList[2]);
const [item1, item2, item3] = myList;
console.log(item1, item2, item3);

const personDet = {
  persName: 'Mihai',
  age: 32
};

const personDetAgain = {
  persNameReal: 'Mihai S.',
  ageReal: 33
};

const {persName, age} = personDet;
console.log(persName, 'is', age, 'years old!');

const {persNameReal: myRealName, ageReal: myRealA} = personDetAgain;
console.log(myRealName, 'is', myRealA, 'years old!');

console.log('Template literals');

const userFirstName = 'Mihai';
const userLastName = 'Sitaru';
const greeting = 'Hello, I\'m ' + userFirstName;
const greeting2 = `Hello 
I\'m ${userFirstName}
${userLastName}.`;
console.log(greeting);
console.log(greeting2);