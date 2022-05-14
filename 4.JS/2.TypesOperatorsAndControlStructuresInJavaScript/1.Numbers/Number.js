"use strict";

let n = 123;
console.log("Value of integer n = ", n);

n = 12.345;
console.log("New value of floating point n = ", n);

// Expressing very large numbers in JavaScript
console.log("145e4 = ", 145e4);
// 145e4 => 145 * 10^4 

// Expressing very small numbers in JavaScript
console.log("145e-4 = ", 145e-4);
// 145e-4 => 145 * 10^-4

// Implicit type conversion performed here to convert the string to int
console.log("20 * '20' = ", 20 * "20");
// we will print out, 20 times the string 20
console.log("'20' * 20 = ", "20" * 20);
// we will print out, string 20 times the number 20

console.log("Infinity = ", Infinity);

console.log("POSITIVE_INFINITY will return : ", Number.POSITIVE_INFINITY);
console.log("1 / 0 = ", 1/0);

console.log("NEGATIVE_INFINITY will return : ", Number.NEGATIVE_INFINITY);
console.log("-1 / 0 = ", -1/0);
/* NOTE: JavaScript does not raise an error when we a divided a number by zero.
It will return either a positive infinity or negative infinity. */

console.log("String divided by integer: = ", "A string" / 2);
// string / integer => NaN (Not a Number)

console.log("Value of 0xEF: = ", 0xEF);
/* It is possible to define numbers using a hexadecimal literal by prepending 0x to the hexadecimal value.
So the hexadecimal number, EF, translates to an integer of 239.
And this console.log statement will print out the integer value. */

var num = 16;
// We can perform a conversion of integers to various number systems by means of toString method.
console.log("The binary value of 16 is : ", num.toString(2));
console.log("The octal value of 16 is : ", num.toString(8));
console.log("The decimal value of 16 is : ", num.toString(10));
console.log("The hexadecimal value of 16 is : ", num.toString(16));
console.log("The duo trigesimal or base-32 value of 16 is : ", num.toString(32));

var a = 10;
console.log("Type of number before toString() : ", typeof a);
// typeof is a operator available in JS to view the type of the variable (here, type of variable a is int).

var b = a.toString();
/* Here we will invoke toString() without any argument on the variable 'a', the returned value gets assigned
to 'b' and then we invoke the typeof operator on that variable which will return a string. */
console.log("Type of number after toString() : ", typeof b);

var x = 3.4567;
/* toFixed() function will first perform a rounding operation to the specified number of digits
after the decimal point and will then convert the variable to a string. */
console.log("3.4567 rounded to 0 decimals : ", x.toFixed(0));
// This invocation should return an integer since we specified zero numbers after the decimal point.
console.log("3.4567 rounded to 2 decimals: ", x.toFixed(2));
console.log("3.4567 rounded to 5 decimals : ", x.toFixed(5));

var y = 25.678;
// toPrecision() function argument is the number of digits we woule like in total.
console.log("Value of 25.678 without specifying precision : ", y.toPrecision());
// This invocation without specifying any argument value will return number without any formatting.
console.log("Value of 25.678 when precision is 2 : ", y.toPrecision(2));
// We set a precision of 2, which means that the first two digits, which are most significant will be included.
console.log("Value of 25.678 when precision is 5 : ", y.toPrecision(5));
// We set a precision of 5, which means that the entire number should returned as it is.

console.log("MAX_VALUE will return : ", Number.MAX_VALUE);
// This will return max value available in JS.
console.log("MIN_VALUE will return : ", Number.MIN_VALUE);
// This will return main value available in JS.