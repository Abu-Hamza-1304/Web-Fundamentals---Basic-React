"use strict";

/*
try {
	document.write("Welcome Abu!");
	console.log("No Error.");
}
catch(err) {
	console.log(err.message);
}
*/

/*
	When the code execution begins, JavaScript will run all of the code defined
	within the try block. However, if there is an error which is thrown, that will
	be caught by the catch block, where we will have defined how to handle the error.
	If there is no error in the try block, then all of the lines within it will be
	executed and the statements within the catch block will never be run.
*/

/*
try {
	document.write("Welcome Abu!");
	document.write(Null);
	console.log("No Error.");
}
catch(err) {
	console.log(err.message);
}
*/

/*
	Lets create an exception in try block, which when executed, the flow moves
	to catch block and handle the exception which has been occured.
*/

function isEven() {
	var a;
	a = document.getElementById("num").value;

	try {
		if ((a % 2) == 0) {
			console.log("The entered number is an even number.");
		}
		else {
			throw "not an even number.";
		}
	}
	catch(msg) {
		console.log("The entered value is "+msg);
	}

	finally {
		console.log("I get executed irrespective of error occured or not.")
	}
}