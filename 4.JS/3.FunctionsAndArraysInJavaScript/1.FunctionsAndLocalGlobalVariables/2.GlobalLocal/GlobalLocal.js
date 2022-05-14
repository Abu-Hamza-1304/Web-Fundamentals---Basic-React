/*
	In the case of this JavaScript source, we will not enable strictmode.
	This is because we will be using an undeclared variable in code code.
	And we will see the effect of that in terms of the scope of that variable.
*/

let globalLet = "This is a global variable declared with let keyword";
var globalVar = "This is a global variable declared with var keyword";

let numLet = 10;
var numVar = 20;
const Num_Const = 30;

/*
function firstFunction() {

	let localLet = "This is a local variable declared with let keyword";
	var localVar = "This is a local variable declared with var keyword";
	undeclaredLocalVar = "This is an undeclared variable";

	console.log("globalLet from inside firstFunction: ", globalLet);
	console.log("globalVar from inside firstFunction: ", globalVar);

	console.log("numLet from inside firstFunction: ", numLet);
	console.log("numVar from inside firstFunction: ", numVar);
	console.log("Num_Const from inside firstFunction: ", Num_Const);

	// NOTE: All of the Global Variables can be accessed from inside of the firstFunction.

	console.log("localLet from inside firstFunction: ", localLet);
	console.log("localVar from inside firstFunction: ", localVar);
	console.log("undeclaredLocalVar from inside firstFunction: ", undeclaredLocalVar);

	// NOTE: All of the Local Variables can be accessed from inside of the firstFunction.
}
*/

// firstFunction();

// console.log("globalLet from outside the Function: ", globalLet);
// console.log("globalVar from outside the Function: ", globalVar);

// console.log("numLet from outside the Function: ", numLet);
// console.log("numVar from outside the Function: ", numVar);
// console.log("Num_Const from outside the Function: ", Num_Const);

// console.log("localLet from outside the function: ", localLet);
// // let keyword does not make a function globally accessible.

// console.log("localVar from outside the function: ", localVar);
// // var keyword does not make a function globally accessible.

// console.log("undeclaredLocalVar from outside the function: ", undeclaredLocalVar);
//  When we don't declare a variable, its scope becomes global.
// This is one of the reasons why it is recommended to enable strict mode in order to
// prevent undeclared variables with global scope.

/*
function secondFunction() {

	let numLet = 100;
	var numVar = 200;
	let Num_Const = 300;

	console.log("Redeclared numLet from inside secondFunction: ", numLet); //we will get local values
	console.log("Redeclared numVar from inside secondFunction: ", numVar); //we will get local values
}

secondFunction();

console.log("numLet from outside after invoking secondFunction: ", numLet); //we will get global values
console.log("numVar from outside after invoking secondFunction: ", numVar); //we will get global values
console.log("Num_Const from outside after invoking secondFunction: ", Num_Const); //we will get global values
*/

/*
function thirdFunction() {

	numLet = 1000;
	numVar = 2000;
	// Num_Const = 3000;

	console.log("Updated numLet from inside thirdFunction: ", numLet);
	console.log("Updated numVar from inside thirdFunction: ", numVar);


}

thirdFunction();

console.log("numLet from outside after invoking thirdFunction: ", numLet);
console.log("numVar from outside after invoking thirdFunction: ", numVar);
// thirdFunction has modified the global values of numLet and numVar.
*/


function fourthFunction() {

	console.log("Starting first for loop...");

	for (let i = 0; i < 5; i ++){
		console.log(i);
	}

	// console.log("Value of i from fourthFunction: ", i);
	/* We will get error because the scope of the variable 'i' is strictly
	inside the for loop block. So the scope of any variable declared using
	the let keyword is within the block where it is defined. */

	console.log("Starting second for loop...");

	for (var j = 0; j < 5; j ++){
		console.log(j);
	}

	console.log("Value of j from fourthFunction: ", j);
	//  We will get value of 'j' in this case. This is because when a variable
	// is declared using the var keyword its scope extends to the function within
	// which it is defined and not just to the block. 
}

fourthFunction();

/*
	NOTE: This is one more point of distinction between the let and var keyword.
	Variables declared with let bind to the immediate block, whereas those
	declared with var bind to the function.
*/

// console.log("Value of j from outside fourthFunction: ", j);