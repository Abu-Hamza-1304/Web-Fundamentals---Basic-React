"use strict";

// Assign value using var keyword 
var price1 = 5;
var price2 = 10;
var total = price1 + price2;

console.log("Sum of price1 and price2 = ", total);

// Updating variables declared with var => Possible
price1 = 21;
price2 = 14;
total = price1 + price2;

console.log("Updated sum of price1 and price2 = ", total);

// Re-declaring the variable with var => Possible
var price1 = 500;
var price2 = 310;
var total = price1 + price2;

console.log("Sum of the re-declared price1 and price2 =", total);

// Assign value using let keyword
let dividend = 420;
let divisor = 20;

console.log("The division result : ", dividend/divisor);

// Update value using let keyword => Possible

dividend = 720;
divisor = 30;

console.log("The updated division result : ", dividend/divisor);

/* Let does not permit re-declaration. Once a variable has been declared with let,
it can be updated but not re-declared. */

// Re-declaring the variable with let => Not Possible

/*let dividend = 880;
let divisor = 40;

console.log("The division result after re-declaration : ", dividend/divisor);
*/

const MY_BIRTHDAY = '13.04.00';
console.log("My Birthday is on", MY_BIRTHDAY);
// NOTE 1: const variables can neither be re-declared not updated.
/* NOTE 2: if any variabled are const in JS, those variables are used in UPPERCASE and UNDERSCORE,
if having multiple words. */

/*MY_BIRTHDAY = '06.04.03';
console.log("My Birthday is on", MY_BIRTHDAY);
*/

/*const MY_BIRTHDAY = '06.04.03';
console.log("My Birthday is on", MY_BIRTHDAY);
*/

// VARIABLE HOISTING: The use of variable before it is declared is known as Variable Hoisting.
// NOTE: Variable hoisting is possible with the help of var keyword to declare that variable.
a = 5;
console.log("The value of a = ", a);
var a;

// With let and const, variable hoisting is not possible.
/*
b = 5;
console.log("The value of b = ", b);
let b;
*/

/*
c = 5;
console.log("The value of c = ", c);
const c;
*/