"use strict";

let add;
function sum(...nums) {
	/* (...nums) With this modification to the function it doesn't matter how many arguments
	we pass when we make the function call. All of them will be accessible as an array which
	we can reference as nums. */
	add = 0;
	for(var num of nums){
		add += num;
	}
	return add;
}

let addition = sum(1,2,3,4);
console.log(addition);

/*
	When the number of arguments for a function call is not fixed.
	We can make use of the rest parameter syntax in order to iterate over
	all of the arguments, no matter how many are present.
*/

function studentDetails(name, ...courses) {
	console.log("Name of the student is: "+name);
	let subject;
	for(subject = 0; subject < courses.length; subject ++){
		console.log(courses[subject]);
	}
}

studentDetails("Chris", "HTML", "CSS", "JavaScript");

/*
	function studentDetails(...courses, name) {}
	This is not possible, we will get Uncaught SyntaxError:
	Rest parameter must be last formal parameter in the function definition.
*/