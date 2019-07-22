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