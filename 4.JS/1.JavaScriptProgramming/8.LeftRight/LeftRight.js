"use strict";

var x = "5" + 2 + 3;
console.log("Value of x = ", x);

/*
	We need to evlauate the expression to the right of the = sign from left to right.
	Since the first of the value is string of 5, the operation which will be performed by the plus operator will,
	in fact be a string concatenation as follows below:
	"5" + 2 => "5" + "2" => "52"
	"52" + 3 => "52" + "3" => "523" 
*/

var x = 2 + 3 + "7";
console.log("Value of x = ", x);

/*
	We need to evlauate the expression to the right of the = sign from left to right.
	Since the first of the value is here is the number 2, the operation which will be performed by the
	plus operator will, in fact be a integer concatenation followed by string concatenation as shown below:
	2 + 3 => 5
	5 + "7" => "5" + "7" => "57"
*/

let y = "5" + 2 + 3;
console.log("Value of y = ", y);

/*
	We need to evlauate the expression to the right of the = sign from left to right.
	Since the first of the value is string of 5, the operation which will be performed by the plus operator will,
	in fact be a string concatenation as follows below:
	"5" + 2 => "5" + "2" => "52"
	"52" + 3 => "52" + "3" => "523" 
*/

const z = 2 + 3 + "7";
console.log("Value of z = ", z);

/*
	We need to evlauate the expression to the right of the = sign from left to right.
	Since the first of the value is here is the number 2, the operation which will be performed by the
	plus operator will, in fact be a integer concatenation followed by string concatenation as shown below:
	2 + 3 => 5
	5 + "7" => "5" + "7" => "57"
*/