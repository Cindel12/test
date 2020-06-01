console.log('hello');

//alert('hello this is Lucy');

// How to write  a comment inline, this tells the computer not to run it but can be read by the operator

// Variables
var b = 'smoothie';
console.log(b);

var someNumber = 67;
// console.log(someNumber);

// Manipulate DOM with JavaScript
/* ... It's just a fancy way of saying 
change HTML with JavaScript*/

// var age = prompt('What is your age?');

// document.getElementById('someText').innerHTML = age;

// Numbers in JavaScript
var num1 = 20;

// Increment num1 by 1
num1++;

// decrement num1 by 1
num1--;
console.log(num1);

// Divide, multiply *, remainders %
console.log(num1 % 7);

// Increment/Decrement by any  number you want
num1+=90;
console.log(num1);

/*functions
1. create a function
2. call the function
*/

// create
function fun() {
    console.log('this is a function');
}

// call
fun(); 

/* let's create a function that takes in a name and says hello followed by your name

For example

Name: "Lucy"
Return:"Hello Lucy"
*/


/*
function greeting(yourName) {
   var name = prompt('What is your name?');
   var result = 'Hello' + ' ' + yourName; //string concatenation
   console.log(result);
}

var name = prompt('What is your name?');
greeting(name);
*/

// How do arguments work in function?
// How do we add two numbers together in a function

function sumNumbers(num1, num2){
    var result = num1 + num2;
    console.log(result);
}

sumNumbers(10, 10);

/* While loops

var num = 0;

while (num < 100) {
    num += 1;
    console.log(num);
}

*/

// For loop
for (let num = 0; num <= 100; num++) { 
    console.log(num);
}

// Data types
let yourAge = 18;                                         //number
let yourName = 'Bob'                                      // string
let name = {first: 'Jane', last: 'Doe'};                // Object
let truth = false;                                        // boolean
let groceries = ['apple', 'banana', 'oranges'];           //array
let random;                                             // undefined
let nothing = null; // value null

// Strings in Javascript (common methods)
let fruit = 'banana, apple, orange, blackberry';
let moreFruits = 'banana\napple';     //new line

console.log(fruit.length);
console.log(fruit.indexOf('nan'))
console.log(fruit.slice(2, 6));
console.log(fruit.replace('ban', '123'));
console.log(fruit.toUpperCase(fruit));
console.log(fruit.toLowerCase(fruit));
console.log(fruit.charAt(2));
console.log(fruit[2]);
console.log(fruit.split(','));         // split by a comma
console.log(fruit.split(''));          // split by characters

