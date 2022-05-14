document.getElementById("numericsection").innerHTML = 30;
/* The DOM is available to us in the form of the document object and we retreive the first of the
paragraph tags which has an id of numericsection by invoking the document objects, getElementbyId()
Specifically, we modify the innerHTML property by setting at a value of 30, and this will appear
within the paragraph tag.
*/
document.getElementById("textsection").innerHTML = "Name: John";
/* The DOM is available to us in the form of the document object and we retreive the second of the
paragraph tags which has an id of textsection by invoking the document objects, getElementbyId()
Specifically, we modify the innerHTML property by setting at a value of Name:John, and this will
appear within the paragraph tag.
*/

var a;
//Declare a variable 'a' by making use of the keyword 'var'.

/*NOTE: This keyword 'var' simply denotes the fact that 'a' happens to be a variable, and does not
bind it to a specific type. So, 'a' can be either an integer or a string or can be anything else
because JavaScript is a weakly typed language like Python.
*/

// VARIABLE DECLARATIONS IN JAVASCRIPT
a = 10;
//Assign a value to this variable 'a' and we set it an integer value of 10.
var b, c;

b = c = 20;

x = a + 30;
//Without using 'var' keyword also, we can declare variables like here is 'x'
console.log("Value of a : " + a);
console.log("Value of b : " + b);
console.log("Value of c : " + c);
console.log("Value of x : " + x);

y = b * c;
console.log("Value of y : " + y);

StudentName = "Hamza";
studentName = "Mehreen";
student_name = "Sara";

console.log("The variable (Upper Camel Case) : " + StudentName);
console.log("The variable (Lower/Regular Camel Case) : "+ studentName);
console.log("The variable (Underscore) : " + student_name);

singleQuotesString = 'Declared within single quotes';
backtickString = `Declared within back ticks`;

console.log('The singleQuotesString : %s', singleQuotesString);
/* In case of single-quote-string, we make use of %s which says that a string needs to be substituted
in its place and the specific string itself is specified after the comma which is single-quote-string.
NOTE: This string substitution is also available when using double quotes. */
console.log(`The backtickString : ${backtickString}`);
/* Note however, something which is unique to strings defined within backticks.
It is possible for us to evaluate an expression within such strings, by defining that expression within
parenthesis, prepended by a $ sign. */