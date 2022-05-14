"use strict";

alert("This is an alert message");

let name = prompt("The prompt message is: \nPlease enter your name:");
console.log("You have entered: " + name);
// A prompt window will include a field in which the user can enter his value.

let subject = prompt("Please enter your selected subject name", "JavaScript");
console.log("Your selected subject is " + subject);

/*
Here, the arguments to the prompt function include not just one string, but two.
And the second string in fact represents the default value for the user input.
So, in this way, the user can stick with the default value or
override it by setting one of their own.
*/

// NOTE: In JS, it is possible for us to interact with the user by using both prompts and alerts.

let a = prompt("Enter a number to get its square value: ");
let b = a * a;
alert("Square value of " + a + " is : " + b);

let output = confirm("Confirmation message: \nReadt to move to the next demo?");

if(output) {
	confirm.log("You pressed OK");
}
else {
	console.log("You pressed CANCEL");
}