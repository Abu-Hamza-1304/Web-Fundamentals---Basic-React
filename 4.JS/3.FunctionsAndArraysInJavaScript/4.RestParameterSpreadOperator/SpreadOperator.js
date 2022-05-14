"use strict";
/*
	The spread operator or spread syntax is similar to REST parameters, in that we have
	three dots used to represent a variable.

	In the case of REST parameters, that syntax is used to create an array out of a collection of values.
	Whereas, it's the reverse which takes place with the use of the spread operator where it is used to
	expand an array into its constituents.
*/
console.log("The min of 1, 2, 3 is: ", Math.min(1,2,3));
/*
	This invocation of Math.min works because it has been defined to accept an undefined number
	of parameters in the form of an arra using the REST parameter syntax.
*/

let arr1 = [1,2,3];

console.log("The min of arr1 (without spread): ", Math.min(arr1));
/*
	However, if we were to pass along an array directly, as we do in the next console.log
	statement, this does not work.
*/

console.log("The min of arr1 (with spread): ", Math.min(...arr1));
/*
	On the other hand, in the above statement, we effectively spread the constituents of
	our array into a list of parameters.

	SO this spread syntax is useful, not just to pass along the constituents of an array
	as an collection of parameters to a function. But it has other implications when
	performing array operations as well.
*/

let arr2 = [4,5,6];
let arr3 = [3,7,2];

console.log("Min of arr2 and arr3 is: ", Math.min(...arr2, ...arr3));

console.log("Min of arr2, arr3 and more is: ", Math.min(...arr2, 0, ...arr3, 8));

let arrays = [...arr1, 10, ...arr3, 20];

console.log("Array created by combining the spread operator with integers: ", arrays);

let str = "PentagonSpace";

console.log("String = ", str);

console.log("Array formed by spreading String: ", [...str]);

console.log("Array formed with Array.from(str): ", Array.from(str));