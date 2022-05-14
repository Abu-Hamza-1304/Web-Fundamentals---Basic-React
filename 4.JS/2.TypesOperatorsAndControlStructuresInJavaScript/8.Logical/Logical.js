"use strict";

console.log("Logical Operators:");

let A = 13, B = 25;
// Logical AND Operation
if (A >=12 && B <= 25){
	console.log("Logical AND (&&) on A + B = ", A + B);
}

let X = 15, Y = 20;
// Logical OR Operation
if (X > 20 || Y < 25)
	console.log("Logical OR (||) on X + Y = ", X + Y);

var result = !(X == Y);
console.log("Result of !(X == Y) is: ", result);

// JavaScript's Conditional Statement which is effectively a ternary operator (? :) 
let condition;

console.log("condition = ", condition = (100 > 10) ? true : false);
console.log("condition = ", condition = (100 < 10) ? true : false);

let maxValue;
console.log("maxValue = ", maxValue = (100 > 10) ? 100 : 10);