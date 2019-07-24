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
console.log('Default params');
var countDown = function (start, end) {
    if (start === void 0) { start = 10; }
    if (end === void 0) { end = start - 5; }
    console.log(start, end);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start, end);
};
countDown();
console.log('Rest and Spread');
var numbers = [3, 17, 86, -7, 7, 2];
console.log(Math.max(3, 17, 86, -7, 7, 2));
console.log(Math.max.apply(Math, numbers));
function createList() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(createList(1, 3, 5));
function createAnotherList(message) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    console.log(message);
    return args;
}
console.log(createAnotherList('Hi!', 1, 3, 5));
function displayData(name, age) {
    console.log('My name is ' + name + ' and I am ' + age + ' years old!');
}
displayData('Mihai', 32);
function displayDataAgain() {
    var data = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        data[_i] = arguments[_i];
    }
    console.log('My name is %c' + data[0] + '%c and I am ' + data[1] + ' years old!', 'font-weight: 900', 'font-weight: 300');
}
displayDataAgain('Mihai', 32);
console.log('%cDestructuring', 'color: #ff0000; font-weight: bolder');
var myList = ['Run', 'Eat', 'Sleep'];
console.log(myList[0], myList[1], myList[2]);
var item1 = myList[0], item2 = myList[1], item3 = myList[2];
console.log(item1, item2, item3);
var personDet = {
    persName: 'Mihai',
    age: 32
};
var personDetAgain = {
    persNameReal: 'Mihai S.',
    ageReal: 33
};
var persName = personDet.persName, age = personDet.age;
console.log(persName, 'is', age, 'years old!');
var myRealName = personDetAgain.persNameReal, myRealA = personDetAgain.ageReal;
console.log(myRealName, 'is', myRealA, 'years old!');
console.log('Template literals');
var userFirstName = 'Mihai';
var userLastName = 'Sitaru';
var greeting = 'Hello, I\'m ' + userFirstName;
var greeting2 = "Hello \nI'm " + userFirstName + "\n" + userLastName + ".";
console.log(greeting);
console.log(greeting2);
