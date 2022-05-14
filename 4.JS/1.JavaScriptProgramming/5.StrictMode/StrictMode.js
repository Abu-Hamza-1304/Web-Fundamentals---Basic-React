"use strict";

var a = 10;
var b = 50;

console.log("The value of a is %i and b is %i", a, b);
//We make use of %i in order to substitute integers in their place in the string.

var privateVar = "Just a String";
var undefinedStr = "An undefined value";
/*The keyword 'undefined' has a special meaning in JS. However, by default,
the compiler does allow us to use this as the name for a variable.
On the other hand, the keyword, 'private' is reserved for use in the future. */ 
console.log("The private string is: ",privateVar);
console.log("The undefined string is: ", undefinedStr);

/*By default, JavaScript does not use StrictMode.
So even though we have an undeclared variable, 'b' in this case,
once we save down this file and bring up in the HTML page in the browser,
we should expect that there are no errors and that the variables 'a' and 'b'
are printed out to the console. */

/*NOTE: Undeclared variables are not a problem for JavaScript by default.
In many cases, we may consider that it is not good programming practice.
And in the case of JS, any undeclared variables effectively has global scope,
which means that it won't be possible for us to use the same variable name
anywhere else within our code. And this particularly problamatic for large source files. */

/*In order to prevent undeclared variables, JS has something known as 'StrictMode',
which is disabled by default, but we can enable it.
To do that, include the string, use strict.
And if we include this at the top of JS source file, then StrictMode will apply to the entire file.*/