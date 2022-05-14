"use strict";

console.log("Value of PI: ", Math.PI);
console.log("The Euler's Constant: ", Math.E);

console.log("Rounded value of 3.2 : ", Math.round(3.2));
console.log("Rounded value of 3.8 : ", Math.round(3.8));
console.log("Rounded value of 3.5 : ", Math.round(3.5));

console.log("Absolute value of 4 : ", Math.abs(4));
console.log("Absolute value of -4 : ", Math.abs(-4));

console.log("4 raised to the 17th power : ", Math.pow(4,17));

console.log("Square root of 20.08 : ", Math.sqrt(20.08));
console.log("Square root of 42 : ", Math.sqrt(42));

/*
	We saw that the use of the round function may round up, or round down.
	Now there are similarly the floor and ceiling functions in JavaScript,
	where the floor will always round down to the nearest integer less than
	the given value and ceil will always round down the to the nearest integer
	more than the given value.
*/
console.log("Floor value of 2.6 : ", Math.floor(2.6));
console.log("Floor value of 2.4 : ", Math.floor(2.4));
console.log("Ceiling value of 2.6 : ", Math.ceil(2.6));
console.log("Ceiling value of 2.4 : ", Math.ceil(2.4));

console.log("Highest number from the list is : ", Math.max(10, 100, -200, 50));
console.log("Lowest number from the list is : ", Math.min(10, 100, -200, 50));

/*
	Math Library also includes trigonometric functions, so we can calculate
	sin and cos values where the arguments need to be specified in the form
	of radians. Here we can calculate sin(30) and cos(30) and note how we
	translated into radians by making use of the Math.PI constant.
*/
console.log("sin(30): ", Math.sin(30 * Math.PI / 180));
console.log("cos(30): ", Math.cos(30 * Math.PI / 180));

/* Math Library also includes log() in order to calculate the natural log
of a specified value.
NOTE: The natural log is of course to the base e, where e is Euler's constant. */
console.log("The natural log of 3 : ", Math.log(3));