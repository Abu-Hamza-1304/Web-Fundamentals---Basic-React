"use strict";

let prices = new Array(10, 20, 36, 40, 47);
let shallowCopy = prices;

console.log("Before changing shallowCopy, prices are : ", prices);

shallowCopy[0] = 70;

console.log("After changing shallowCopy, prices are : ", prices);

/*
	NOTE: When a SHALLOW COPY is created, teh elements of the array are not duplicated,
	we simply have another variable pointing to the same data.
*/

let deepCopy = prices.slice();
/*
	If we want to actually create an entirely independent copy where we simply don't
	have another pointer pointing to the same data, but an entire seperate copy of the
	data itself. This is something known as a DEEP COPY.
	And we can get such a copy of an array by invoking the slice method.
	When we do this, deepCopy will be initialized with the current contents of the prices
	array.
*/
console.log("Before changing deepCopy, prices are : ", prices);

deepCopy[0] = "Eighty";

console.log("After changing deepCopy, prices are : ", prices);
/* From the console, it is clear that the modification to the deepCopy has not affected
the prices array in any manner. */
console.log("The contents of deepCopy are : ", deepCopy);
// Its clear that prices and deepCopy are entirely independent from each other.

prices.push(100);
// To add an element at the end of an array, we invoke push method of the array.
console.log("Contents of prices after a push are : ", prices);

prices.unshift(0);
// To add an element at the start of an array, JS provides unshift method of the array.
console.log("Contents of prices after an unshift are : ", prices);

prices.pop();
// To remove an element from the end of an array, JS provides pop method of the array.
console.log("Contents of prices after a pop are : ", prices);

prices.shift();
// To remove an element from the front of an array, JS provides shift method of the array.
console.log("Contents of prices after a shift are : ", prices);

delete prices[2];
// To remove an element from the middle of the array by providing the index value, JS provides delete function.
console.log("Contents of prices after a delete at index 2 are: ", prices);

/*
	NOTE-1:
			push and unshift methods are able to add elements to the extremities of an array.
	NOTE-2:
			pop and shift methods are able to remove elements from the extremities of an array.
	NOTE-3:
			delete method is used to remove elements from the middle of array by providing the
			index value.
	NOTE-4:
			slice method is used to add elements to the middle of array by providing the
			index value.
*/

let dogBreeds = ['Labrador', 'Beagle', 'Golder Retriever', 'Doberman', 'German Shepherd', 'Boxer'];

console.log("Original Contents of dogBreeds are : ", dogBreeds);

dogBreeds.slice(3, 0, 'Poodle', 'Dalmatian');
/*
	Specifically, let us insert two new dog breeds into the array to represent a poodle and a dalmatian.
	And this can be accomplished using the slice method.
	Now, lool at the arguments we passed here:
		The first argument is the index starting from which we want to enter values into the array;
		The second argument do the slice method is the number of elements which need to be removed
		from a current version of the array, starting from the index which is specified. Since we
		don't want any of the existing data to be removed, we set this value to zero;
		And this is followed by all of the elements which we wish to insert into the array.
	NOTE: The number of arguments which we supply is undefined which means that the slice method
	in its definition uses rest parameters beyond the first two arguments.
*/
console.log("dogBreeds after slice(3, 0, 'Poodle', 'Dalmatian') are : ", dogBreeds);

dogBreeds.slice(1, 2, 'Indi');

console.log("dogBreeds after slice(1, 2, 'Indi') are : ", dogBreeds);

/*
	Important Note:
	One thing to note about the slice method though, is that it performs its oeprations
	in place.
	i.e., when we invoke slice using an array, the array itself gets modified.
*/

// ARRAY SLICE: It is a copy of a piece of the array.
let sliceOfDogBreeds = dogBreeds.slice(3);
console.log("dogBreeds.slice(3) = ", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(3, 5);
console.log("dogBreeds.slice(3, 5) = ", sliceOfDogBreeds);

sliceOfDogBreeds = dogBreeds.slice(-3, -1);
console.log("dogBreeds.slice(-3, -1) = ", sliceOfDogBreeds);

// CONCATENATION OF ARRAYS IN JavaScript
let europeOffices = ['Bucharest', 'Prague', 'Rome'];
let africaOffices = ['Durban', 'Nairobi'];
let oceaniaOffices = ['Chrischurch', 'Sydney'];

let southernOffices = africaOffices.concat(oceaniaOffices);

console.log("southernOffices: ", southernOffices);

console.log("africaOffices: ", africaOffices);

console.log("oceaniaOffices: ", oceaniaOffices);

let allOffices = africaOffices.concat(oceaniaOffices, europeOffices);
/*
	One feature of the concat method is that it does not accept justa single array as an argument,
	but it is possible for us to pass along a sequence of arrays.
*/
console.log("allOffices: ", allOffices);

// SORTING OF ARRAYS IN ALPHABETICAL ORDER IN JavaScript
let sortedOffices = allOffices.sort();
console.log("sortedOffices: ", sortedOffices);

console.log("allOffices after sorting: ", allOffices);

/*
	NOTE-1: The original array was not affected by invoking the concat method.
	NOTE-2: The original array was affected by invoking the sort method.
*/

/* To arrange the constituents of an array in reverse alphabetical order,
we can invoke an array's reverse method. */
console.log("Reverse sorting of allOffices: ", allOffices.reverse());

allOffices = africaOffices.concat(oceaniaOffices, europeOffices);

console.log("Sorted copy of allOffices using spread syntax (without sort): ", [...allOffices]);
console.log("Sorted copy of allOffices using spread syntax (with sort): ", [...allOffices].sort());

console.log("Sorted copy of allOffices using slice (without sort): ", [...allOffices].slice());
console.log("Sorted copy of allOffices using slice (with sort): ", [...allOffices].slice().sort());

console.log("allOffices after sorting: ", allOffices);

let numArray = [20, 50, 3, 10, 35];

console.log("Original elements of numArray are: ", numArray);

console.log("Sorted copy of numArray using the default sort: ", numArray.slice().sort());
// This will give alphabetical sort not the numerical sort.

numArray.sort(function(a, b) {
	return a - b;
});
console.log("Sorted numArray with compare function: ", numArray);

numArray.sort(function(a, b) {
	return b - a;
});
console.log("Sorted numArray (in reverse order) with compare function: ", numArray);