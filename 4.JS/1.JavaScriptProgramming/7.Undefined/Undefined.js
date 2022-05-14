"use strict";

var uninitialized_var;
console.log("uninitialized_var = ", uninitialized_var);

let uninitialized_let;
console.log("uninitialized_let = ", uninitialized_let);

var undefined_var = undefined;
console.log("undefined_var = ", undefined_var);

let undefined_let = undefined;
console.log("undefined_let = ", undefined_let);

/*undefined in JavaScript is used in order to represent a variable whose
value has not been set as yet.*/

/*
The variables uninitialized_var and uninitialized_let are implicitly given a value of undefined.
Whereas undefined_var and undefined_let are explicitly set this value.
*/

/*This is to contrast the undefined value from another special value used in JS to represent
a non-existent value, and that is called null.*/

var x = null;
console.log("Value of x = ", x);