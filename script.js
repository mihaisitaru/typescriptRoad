function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};
var greeter = new Greeter("world");
var button = document.createElement("button");
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
var hasHobbies = false;
var myRealAge;
myRealAge = 32;
var hobbies = ["Running", "Reading"];
hobbies = [100];
console.log(hobbies);
var address = [52, "FakeStreet"];
var Color;
(function (Color) {
    Color[Color["Blue"] = 0] = "Blue";
    Color[Color["Yellow"] = 15] = "Yellow";
    Color[Color["Red"] = 2] = "Red";
})(Color || (Color = {}));
var myColor = Color.Blue;
var newColor = Color.Red + 1;
console.log(myColor); //0
console.log(newColor);
var house = 'loft';
console.log(house);
house = { type: 'appartment', rooms: 3 };
console.log(house);
function returnMyAge() {
    return myRealAge;
}
console.log(returnMyAge());
function sayHi() {
    console.log('Hi there!');
    //return myRealAge;
}
function multiply(x, y) {
    return x * y;
}
console.log(multiply(2, 3));
var newMultiply;
//newMultiply = sayHi;
//newMultiply();
newMultiply = multiply;
console.log(newMultiply(5, 6));
var userData = {
    name: 'Mihai',
    age: 32
};
console.log(userData);
var complexObj = {
    data: [5, 7, 9],
    output: function (all) {
        return this.data;
    }
};
console.log(complexObj);
// union types
var myRealRealAge = 32;
myRealRealAge = '33';
// myRealRealAge = true;
var anotherVar = 'anything';
if (typeof anotherVar == 'number') {
    console.log('anotherVar is of type number');
}
else {
    console.log('anotherVar is not of type number, but of type: ', typeof anotherVar);
}
function neverSayNever() {
    throw new Error('Error!');
}
var canBeNull = 12;
canBeNull = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: 'Mihai',
    bankAccount: bankAccount,
    hobbies: ['Running', 'Reading']
};
myself.bankAccount.deposit(3000);
console.log(myself);
var myName = 'Mihai';
var myAge = 32;
//myName = 32;
var anyVar;
anyVar = 24;
function controlMe(isTrue) {
    var result;
    if (isTrue) {
        result = 12;
    }
    result = 32;
    return result;
}
console.log(controlMe(true));
console.log('Arrow functions:');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(5, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(8, 7));
var great = function () {
    console.log('Hello!');
};
great();
var greatFriend = function (friend) { return console.log(friend); };
greatFriend('Bogdan');
