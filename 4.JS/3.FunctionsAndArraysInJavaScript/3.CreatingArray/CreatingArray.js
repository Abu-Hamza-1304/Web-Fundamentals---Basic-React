"use strict";

let studentGrades = ["A", "B", 3, "D", 5];
// NOTE: Arrays in JavScript is heterogenous.
/*
console.log("Length of the array is: ", studentGrades.length);
console.log("Element at index 3 is:", studentGrades[3]);
console.log("Element at index -3 is:", studentGrades[-3]);
*/

console.log("Iterating over the elements of the given array (with the old syntax): ");
for(var i = 0; i < studentGrades.length; i ++) {
	console.log(studentGrades[i]);
}

console.log("Iterating over the elements of the given array (with the ES6 syntax): ");
for(i of studentGrades){
	console.log(i);
}

console.log("Elements in vowels are: ");
let vowels = new Array("A", "E", "I", "O", "U");
for(i of vowels) {
	console.log(i);
}

let grades = [];
grades[0] = "A";
grades[1] = "E";
grades[2] = "I";
grades[3] = "O";
grades[4] = "U";
grades[7] = "H";

console.log("Length of the array is: ", grades.length);

console.log("Elements in the grades array are: ");

for(i of grades){
	console.log(i);
}

console.log(`\n The Elements at index 5 and 6: ${grades[5]} and ${grades[6]}`);

/*
	NOTE: JavaScript provides us with a lot of flexibility when it comes to arrays.
	The value which we place into an array need not be contiguos, and it's possible
	for us to create gaps of undefined values.
	The length of the arrays are also not fixed.
*/

let testScores = [43, 64, 81, 91, 39, 73];
/*
	In this case, we will be working with an array called "testScores" which contains
	6 different numbers and we also have a function called "flagGoodScore" which accepts
	a number called "score" as an argument.
	And then if it is greater than 70, it prints out to the console that is a good score.

	Now, we would like this flagGoodScore function to be executed for each element in our
	testScore array where we pass along each individual array score as an argument to the
	function. Well, for this, we can make usee of the "forEach" function af an array in
	JavaScript.
	The argument to this is the function which needs to be executed for each element where
	the element itself is passed as an argument.
*/
function flagGoodScore(score) {
	if (score > 70) {
		console.log(`The score of ${score} is good!`);
	}
}

console.log("Iterating over the test scores with forEach: ");

testScores.forEach(flagGoodScore);