"use strict";

let str_double_quotes = "JavaScript";
let str_single_quotes = 'Programming Language';

console.log("Welcome to " + str_double_quotes);
console.log("It is a "+ str_single_quotes);

let str_back_sticks = `Is ${str_double_quotes} a ${str_single_quotes} ?`
/* NOTE: The use of $ sign and as well as {} braces; this pattern indicates that
whatever lies between the curly braces is an expression which needs to be evaluated.
This could also be a variable reference. */
console.log("String with back ticks: ", str_back_sticks);

let sum = `${1+2+3}`
console.log(`The expression evaluated to a value of ${sum}.`);

/*
console.log("The expression evaluated to a value of ${sum}.");
// Evaluation of expressions are not possible using double quoted strings.
*/

// Escaping Special Characters
let sentence = "I \"love\" spinach"
// Double quoted string within double quoted string => Uncaught SyntaxError: Unexpected identifier
/* NOTE: If ever come across JavaScript code where semicolons are missing,
we should recognize that it's not a unusual practice. */
console.log("String defined with escape characters: ", sentence);

let multi_line_str = 
`This is a
	string which
		spans multiple lines.`;
console.log("A multi-line string: \n", multi_line_str);

var name_str1 = "David";
var name_str2 = "David";

var name_obj1 = new String("David");
var name_obj2 = new String("David");

console.log("Type of name_str1: ", typeof name_str1);
console.log("Type of name_obj1: ", typeof name_obj1);

console.log("Is name_str1 == name_str2? ", name_str1 == name_str2);
console.log("Is name_str1 == name_obj1? ", name_str1 == name_obj1);
console.log("Is name_obj1 == name_obj2? ", name_obj1 == name_obj2);
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2? : ",
	name_obj1.valueOf() == name_obj2.valueOf());

console.log("Is name_str1 === name_str2? ", name_str1 === name_str2);
console.log("Is name_str1 === name_obj1? ", name_str1 === name_obj1);
console.log("Is name_obj1 === name_obj2? ", name_obj1 === name_obj2);
console.log("Is the valueOf name_obj1 double equal to valueOf name_obj2? : ",
	name_obj1.valueOf() === name_obj2.valueOf());

let empName = "Jane Chang";
console.log("Number of characters in empName is : " + empName.length);
// length function returns size of string
console.log("Index of h is : " + empName.indexOf("h"));
// indexOf("value") returns index value of that particular character
console.log("'Ch' occurs at position : " + empName.search("Ch"));
// search("value") returns the occurence of character present at particular index.

var line = "Fundamentals of JavaScript";
console.log("Original line: ", line);
console.log("Slice (1, 12): ", line.slice(1, 12));
// If we invoke slice with the arguments of 1 and 12, we will get all of th echaracters from index 1 to 11.
console.log("Slice (-23, -15): ", line.slice(-23, -15));
// slice() is also capable of working with negative indexes where we go backwards from the start of the string.
console.log("Slice (13): ", line.slice(13));
// We will get characters from index 13 to the last.

// Different Ways of Replacing Substrings Within Strings
console.log("Replacing 'JavaScript' with 'Web Programming'", line.replace("JavaScript", "Web Programming"));
console.log("Replacing 'javascript' with 'Python'", line.replace("javascript", "Python"));
console.log("Replacing 'javascript/i' with 'Python'", line.replace(/javascript/i, "Python"));
console.log("Default replace of 'a' with 'A': ", line.replace("a", "A"));
console.log("Global replace of 'a' with 'A': ", line.replace(/a/g, "A"));

console.log("Splitting the line on space: ", line.split(" "));

var myString = "			Hey, this is JavaScript		";
console.log("Before the trim operation: " + myString);
console.log("After the trim operation: " + myString.trim());