"use strict";

/*
	In JavaScript, if we like a function to be executed as soon as the HTML page
	gets loaded in the browser window, we can make use of a special property of
	the global window object which is "window.onload"
*/

window.onload = firstFunction;

function firstFunction() {
	
	var x = 15;

	console.log("firstFunction: x = ", x);

	secondFunction(); // we can call one function into another
	
}

function secondFunction() {

	console.log("secondFunction (before declaration): x = ", x);

	var x = 20;

	console.log("secondFunction (after declaration): x = ", x);

}

secondFunction(); // calling or invoking the secondFunction

