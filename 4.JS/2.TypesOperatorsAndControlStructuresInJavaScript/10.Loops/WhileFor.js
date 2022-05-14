"use strict";

console.log("While Loop Example: ");

/* A while loop is a control structure which allows the repeated execution of some code
as long as a specific condition is met. */

/*console.log("Printing integers from 1 to 10 : ");
let i = 1;
while (i <= 10){
	console.log(i+" ");
	i++;
}*/

/*console.log("Printing Even Numbers from 1 to 20 : ");
let j = 1;
 while (j <= 20){
 	if (j % 2 == 0){
 		console.log(j);
 	}
 	j++;
 }*/

/*console.log("Increasing order of series (with break) : ");
let x = 1;
while (x <= 10){
	console.log(x);
	x++;
	if (x == 5){
		break;
		we use break in order to terminate the while loop entirely
		once a specific condition was met. i.e., there were no
		further iterations of the while loop.
	}
}*/

/*console.log("Decreasing order of series (with continue) : ");
let y = 11;
while (y > 1){
	y--;
	if (y == 5){
		continue;
		with the use of continue, we ensure that only the current iteration
		is skipped, whereas all further iterations will go on as usual.
	}
	console.log(y);
}*/

console.log("Do-while Loop Example: ");

/*
let factorial = 1;
let n = 5;
let i = 1;
do {
	factorial *= i;
	i++;
}
while (i <= n);
console.log("Factorial of " + n + " is: " + factorial);
*/

console.log("For-Loop Example: ");

let a = 0, b = 1, c;
let count = 10;
for (let i = 3; i <= count; i ++){
	c = a + b;
	a = b;
	b = c;
	console.log(c);
}
