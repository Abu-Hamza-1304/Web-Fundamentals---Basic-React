"use strict";
// Destructuring is when we can break down an array into its components
let numbers = [10, 20, 30, 40, 50];
let [a, e, i, o, u] = numbers;

/*
console.log("Values after the first assignment (no rest parameters): ");

console.log("Value of a : " + a);
console.log("Value of e : " + e);
console.log("Value of i : " + i);
console.log("Value of o : " + o);
console.log("Value of u : " + u);

[a, e, i] = numbers;

console.log("Values after the second assignment (no rest parameters): ");

console.log("Value of a : " + a);
console.log("Value of e : " + e);
console.log("Value of i : " + i);
*/

[a,...e] = numbers;
/*
	Just as with the REST parameters, the first value in the number array will be
	assigned to the variable 'a' and the remaining will be assigned to the array of 'b'.
	The presence of the three dots before 'b' indicates that the length of this is unknown,
	and that 'b' should be an array.
	So using this syntax, we are now destructuring an array into a single variable 'a' and
	array of unknown length 'b'.
*/
console.log("Values after [a,...e] = numbers: ");

console.log("Value of a : " + a);
console.log("Value of e : " + e);

[, ...a] = numbers;
/*
	Once again we make use of REST parameters here and note that we begin with a comma
	here, which effectively means that the first value in the numbers array should be
	ignored, and the rest will be assigned to 'a'.
*/
console.log("Values after [, ...a] = numbers: ");

console.log("Value of a : " + a);