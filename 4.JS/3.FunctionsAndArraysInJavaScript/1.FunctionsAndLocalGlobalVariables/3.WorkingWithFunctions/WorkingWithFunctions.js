"use strict";

function mphToKmph(mph) {

	console.log("MPH value entered: ", mph);

	return 1.61 * mph;

}

let speedLimit = mphToKmph(65);
console.log("Speed limit in Km/h is: ", speedLimit);

let mphToKmphArrow = mph => {
	/*
		This is a more concise syntax for defining a function in JavaScript.
		Since it makes use of arrow (=>), this is referred to as an "Arrow Function"
		and it very useful for other short function definitions.

		In this case, we don't make use of 'function' keyword, instead we can define
		a function using either 'var' or 'let' followed by the name of the function itself
		which is further followed by an = sign and then the arguments to the function.

		If there is just a single argument, we can just state it as is and we will later
		see that for multiple arguments, we can make use of paranthesis.

		After the argument/s, we create arrow by combining = symbol with > sign.

		It is after the arrow where the body of the function begins and just as before
		we make use of curly braces for this purpose.
	*/

	console.log("MPH value entered: ", mph);

	return 1.61 * mph;
	
	/*
		Functionally, this function is exactly the same as the previous one which we
		defined except that it makes use of syntax, which has been defined in the EF6
		specifications for JavaScript.
	*/
}

speedLimit = mphToKmphArrow(65);
console.log("Speed limit in km/h (arrow): ", speedLimit);

let mphToKmphImplicit = mph => 1.61 * mph;
/*
	When we make use of this syntax by eliminating the curly braces, then the return
	is implied or implicit. So we don't really need to use the return keyword at all.
	All we need to have is an expression which will returned by the function.
	So this function takes in one argument as input, which is 'mph' here, and returns
	1.61 times mph.
*/
console.log("Speed limit in Km/h (implicit return): ", speedLimit);

let triangleArea = (base, height) => 0.5 * base * height;
/*
	NOTE: When we have two arguments, we make use of parenthesis and
	the arguments are seperated by commas. Since we are using an implicit
	return, we once again do away with the return keyword adn the curly braces.
*/
console.log("Area of a triangle with base of 5 and height of 4 is: ", triangleArea(5, 4));

let functionCopy = triangleArea;
/*
	Here we initialize a variable called functionCopy, and its value is going to be set to
	the triangleArea function.

	So functions can be assigned to variables, just as any other members of the JS language.
	
	So once we have this functionCopy variable, we can use it like any other function by
	invoking it using parenthesis.

	Here we use functionCopy in order to calculate the area of a triangle with a base of 2
	and a height of 5. 
*/
console.log("Area of a triangle with base of 2 and height of 5 is: ", functionCopy(2, 5));

var x = function(f) { return 5 * (f - 32) / 9};
/*
	Now that we know functions can be assigned to variables, we will do same things once again.
	
	In this one, we will assign the variable 'x' to a function, which has no name. 
	In JavaScript, this is known as an "Anonymous Function".

	To the right of the = sign, we have the function keyword, followed by a function
	definition which accepts a value in Fahrenheit, and then returns its corresponding value
	in Celsius.

	This function without a name accepts a single argument, which is referenced as 'f'.

	And then within the function body, it calculates and then returns the Celsius value
	based on this formula.

	Now, the variable 'x' can be used in order to invoke the function.
*/
console.log("50F in Celsius is: ", x(50));