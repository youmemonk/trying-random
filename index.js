//! Function Declaration #1
//initialise the function
// function square(num) {
//     return num*num;
// }

// console.log(square(5)); //Invoke the function

//! Function Declaration #2
// function cube(x) {
//     console.log(Math.pow(x,3));
// }

// cube(3);

//! Functions are Values #3
// function greeting(){
//     console.log('Hello, World!');
// }

// greeting();
// console.log(greeting);

//! Assigning to variable #4
// var greeting = function(){
//     console.log('Hello, World!');
// };

// greeting();
// console.log(greeting);

//! Functions are mutable #5
// function greeting() {
//     console.log('Hello, World!');
//     greeting.amount += 1;
// }

// greeting.amount = 0;

// greeting();
// greeting();

// console.log(greeting.amount);

//! Makeshift Methods #6
// function greeting() {
//   console.log("Hello, Javascript!");
// }

// greeting.hindi = function () {
//   console.log("Namaste, JavaScript!");
// };

// greeting();
// greeting.hindi();

//! Local Variable Scopes #7
// var language = "hello";

// function greeting() {
//   var hindi = "namaste";
//   console.log(hindi);
// }

// greeting();
// //-> namaste

// console.log(language);
// //-> hello

//! Scope: Variables Inside Out #8
// function printLargePizza(){
//     var largePizza = 'Large four cheese';
//     console.log(largePizza);
// }

// printLargePizza();
// //-> Large Four Cheese

// console.log(largePizza);
// //-> Reference Error: largePizza is not defined.

//! Closures #9
// function petname(){
//     var name = 'scotch';

//     //using name makes this a closure
//     function printname(){
//         console.log(name);
//     }
//     printname();
// }

// petname();

//! Practical Application : Closure
// function createCounter(){
//     var count = 0;

//     //Ananymous Closure
//     return function(){
//         count++;
//         return count;
//     };
// }

// var myCounter = createCounter();
// console.log(myCounter());


//! ---------------------- this ----------------------

