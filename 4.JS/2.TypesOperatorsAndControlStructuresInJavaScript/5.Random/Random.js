"use strict";

console.log("A random value between 0 and 1: ", Math.random());
// This will return floating point values always.

console.log("Random integer between 0 and 9 : ", Math.floor(Math.random() * 10));
/* Here we make use of the Math.floor function to get random value of integer type by
multiplying the random value between 0 and 1 which is returned by a value of 10.
So we will end up with a floating point value anywhere between 0 and 10. Now when
we apply Math.floor to this, we will end up with an integer between 0 and 9, since
this will always round down. */

// To get random integer within specified range
console.log("Random integer between 0 and 10 : ", Math.floor(Math.random() * 11));

console.log("Random integer between 1 and 10 : ", Math.floor(Math.random() * 10) + 1);