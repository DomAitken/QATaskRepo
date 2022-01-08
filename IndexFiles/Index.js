"use strict";

//Adding two numbers together
const x = 12;
const y = 27;
console.log("SUM: ", x + y);

console.log("Dom");
console.info("Aitken");
console.warn("Stockport");
console.error("Pisces");

let myCar = "Bugatti";
let myModel = "Divo";
console.log("My fav car is the: " + myCar + " and the model is: " + myModel);

console.log("This is now %c the end of the exercises.", "color: orange;font-family:fantasy; font-style: Bold; background-color: black;padding: 10px");

const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
console.log("Standard For loop");
for (let i = o; i < arr.length; i++) {
    console.log(arr[i]);
}

console.log("Enhanced For loop with 'of'");
for (let num of arr) {
    console.log(num);
}

console.log("Enhanced for loop with 'in'");
for (let num in arr) {
    console.log(index);
}

for (let key in me) {
    console.log(key + ":", me[key]);
}
console.log("SUM:", sum(8, 4));

console.log("ADD:", add(8, 8))

function sum(a, b) {
    return a + b;
}
const arr = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];

console.log("DIVIDE:", divide(20, 5))
const divide = function(a, b) {
    return a / b;
}

console.log("SUBTRACT:", subtract(12, 4))

function subtract(a, b) {
    return a - b;
}

console.log("MULTIPLY:", multiply(6, 6))

function product(a, b) {
    return a * b;
}

function print(arg) {
    return console.log(arg);
}

//Iteration Tasks
//Task 1 Recreate Flowchart
for (let a = 100; a <= 200; a++) {
    console.log(`a = ${a}`);
}

//Task 2 Recreate Flowchart
for (let a = 100; a <= 200; a++) {
    if (a % 2 == 0) {
        console.log("-");
    } else {
        console.log("*");
    }
}

//Task 3 Ouput 1-10 10 times each
for (let i = 0; i < 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(j);
    }
}

//Task 4
let now = new Date();
let day = now.getDay();
switch (day) {
    case 0:
        console.log(`It's Sunday`);
        break;
    case 6:
        console.log(`It's Saturday`);
        break;
    case 1:
        console.log(`It's Monday`);
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`It's a weekday`);
        break;
    default:
        console.log(`Excuse me?`);
        break;
}

//Functions & Arrow Functions tasks
//Task 1 function that takes in 2 parameters num1 and num2 and subtracts the two numbers.
function subCalc(num1, num2) {
    return num1 - num2;
}

console.log(subCalc(10, 1000));

//Task 2 function expression called welcome that take in name, age,gender as a parameters
const welcome = function(name, age, gender) {
    return console.log(`My name is ${name}, i am ${age} years old and of gender ${gender}`);
}

welcome("Felix Cited", 20, "Male");

//Task 3 Returning n1 to the power of n2
powerUp = (n1, n2) => Math.pow(n1, n2);

console.log(powerUp(3, 3));

//Objects, Arrays and JSON tasks
//Task 1 Create an object called darthVader with the keys allegiance, weapon and sith and the values of empire, lightsabre and true. Finally log darthVader
let darthVader = {
    allegiance: "Empire",
    weapon: "lightsaber",
    sith: true
};

console.log(darthVader);

//Task 2 Create the following log statements using the darthVader Object
console.log(`Darth Vader's allegiance is to the ${darthVader.allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log(`Darth Vader is a sith? ${darthVader.sith}`);
console.log(`Darth Vader is a Jedi? ${darthVader.sith ? "false" : "true"}`);

//Task 3 1.Create an array with the name myArray with 2 elements hello,everyone. 2. Next print the length of the array. 3. Next use the push() method to add 3 elements to the array. 4. Next print the length of the array. 5. Next use shift() to remove an element. 6. Finally print the contents of the array using a for of loop.
//1.
let myArray = ["hello", 'everyone'];
//2.
console.log(myArray.length);
//3.
myArray.push("goodbye");
//4.
console.log(myArray.length);
//5.
myArray.shift();
//6.
for (let eachElement of myArray) {
    console.log(eachElement);
}

//Arrays
const me = {
    name: "Dom",
    age: "18",
    job: "Software Developer"
}

const { name, age, job } = me;

const print = ({ name = "Dom", age = "18", job = "Software Developer", ...rest }) => {
    console.log("REST: ", rest);
    console.log('Name: ${name} Age: ${age} Job: ${job}');
}

const arr = [me, 123, "abc", ...rest];

const [a, b, c] = arr;

const nums = [1, 2, 3, 4, 5, 6];

const newArr = [...nums, ...arr];

//Destructuring Exercise: With the object below write the destructuring assignment that reads: name property into the variable name. years property into the variable name age. isAdmin property into the variable isAdmin (false, if no such property)
let user = {
    name: "Dom",
    years: 18
};

let { name, years: age, isAdmin = false } = user;

alert(name);
alert(age);
alert(isAdmin);

//Callback Functions

const callback = () => console.log("Hello!");

const func = (myCallback) => {
    console.log("About to call: ", myCallback);
    myCallback();
}

//Promise Functions
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
arr.forEach(num => console.log(num));

const promisesPromises = new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => { //Timeout function, set for 5 seconds. Asynchronous code
        if (rand > 0.5) {
            resolve("Yessir!");
        } else {
            reject("Clown.");
        } //Asynchronous code doesn't wait for a response before performing an action.
    }, 5000);

    console.log("End of promise");
});

const onSuccess = res => console.log("Success:", res);
const onFailure = err => console.error("Failure:", err);


promisesPromises.then((res) => console.log("Success:", res)).catch(err => "Failure:", err);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const print = num => console.log(num);
nums.forEach(print);
const isEven = num => num % 2 === 0; // === is it the same type AND value
nums.filter(isEven).forEach(print);
const sum = (accumulator, next) => {
    console.log("ACC:", accumulator);
    console.log("NEXT:", next);
    return (accumulator + next);
}
console.log("SUM:", nums.reduce(sum));

const square = num => num ** 2;
nums.map(square).forEach(print);

//Callback Functions Exercise: Create a callback function that asks for a user to enter a value, then increase that value by 10 through another function.Create a callback function that asks for a user to enter a value, then increase that value by 10 through another function.
const parent = (child) => {
    let value = parseInt(prompt("Please enter a value"));
    child(value);
}

function increase(value) {
    alert(`The new value is ${value + 10}`);
}

parent(increase);

//Highest Order Functions Exercise: Following on from the previous example, write the code to calculate - ensuring that higher-order functions are used: 1. Highest Grade. 2. Lowest Grade 3. Highest Grade of Boys. 4. Highest Grade of Girls 5. Lowest Grade of Boys 6. Lowest Grade of Girls.
let grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Cyrus', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Jeff', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let classRoomAverage = average(grades);
let boysAverage = average(getBoys(grades));
let girlsAverage = average(getGirls(grades));

let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestBoysGrade = maxGrade(getBoys(grades));
let lowestBoysGrade = minGrade(getBoys(grades));
let highestGirlsGrade = maxGrade(getGirls(grades));
let lowestGirlsGrade = minGrade(getGirls(grades));

//Day 2 
//Destructuring
function print({
    name,
    job,
    age,
    ...rest
}) {
    console.log("Hello, my name is ${name}. I am a ${job} and I am ${age} years old.")
    console.log("IGNORED:", ...rest);
}

//DOM Manipulation and Event Handling
const handleClick = () => alert("Hello again!");

const kmInput = document.querySelector("input#kms");
const milesInput = document.querySelector("input#miles");

const heading = document.createElement("h1");
heading.innerText = "DOM Manipulation";
document.querySelector("body").prepend(heading);

milesInput.addEventListener("input", function(event) {
    console.log("EVENT:", event);
    const miles = event.target.value;
    const km = miles * 1.6095;
    console.log(km);
    kmInput.value = km;
});

const convertKmToMiles = () => {
    const km = kmInput.value
    const miles = km / 1.609
    milesInput.value = miles;
};

//DOM Manipulation Task 1: Write a function that creates a new h1 element, adds text to that element and then adds the h1 to the tree of the document on load of the HTML page.
window.onload = function() {
    const heading = document.createElement("h1");
    const heading_text = document.createTextNode("Big head!");
    heading.appendChild(heading_text);
    document.body.appendChild(heading);
};

//Event Handling task is stored in a separate file, as is part 2 of the DOM Manipulation task

//Asynchronous code
promisesPromises.then(onSuccess).catch(onFailure);

console.log("Hello there!");

const output = document.querySelector("section#pokemon");

axios
    .get("https://pokeapi.co/api/v2/pokemon/snorlax")
    .then(response => {
        const pokemon = response.data;
        console.log("RES:", response);

        const name = document.createElement("h2");
        name.innerText = pokemon.name;
        output.appendChild(name);

        const info = document.createElement("p");
        info.innerText += `ID: ${pokemon.id}\n`;
        info.innerText += `Height: ${pokemon.height}\n`;
        info.innerText += `Weight: ${pokemon.weight}`;
        output.appendChild(info);

        const typeHeading = document.createElement("h2");
        typeHeading.innerText = "Types:";
        output.appendChild(typeHeading);

        const types = document.createElement("ul");
        for (let type of pokemon.types) {
            const typeItem = document.createElement("li");
            typeItem.innerText = type.type.name;
            types.appendChild(typeItem);
        }
        output.appendChild(types);

        const image = document.createElement("img");
        image.src = pokemon.sprites.front_default;
        output.appendChild(image);
    })
    .catch(err => console.error(err));