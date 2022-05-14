"use strict";

let items = [
				{name: "meat", price: 25},
				{name: "vegetables", price: 17},
				{name: "cake", price: 20},
				{name: "drinks", price: 38},
			];

let prices = [];

for (let item of items) {
	prices.push(item.price);
}

console.log("Price list using for loop: "+prices);

let priceList = items.map(function(item) {
	return item.price;
});
/*
	JavaScript provides a built-in function called 'map' for every array
	and the argument to this is a function.
*/
console.log("Price list after mapping: "+priceList);

priceList = items.map(item => item.price);
console.log("Price list after mapping (with ES6 syntax) : "+priceList);

let total = 0;
for (let item of items) {
	total += item.price; //total = total + item.price;
}
console.log("Total cost of items (for loop) : "+total);

let totalReducer = items.reduce((sum, item) => sum + item.price, 0);
console.log("Total cost of items (reducer) : "+totalReducer);

let expensiveItems = items.filter(item => item.price >= 25);
console.log("The expensive items are: ", expensiveItems);

let costExpensieItems = expensiveItems.reduce((sum, item) => sum + item.price, 0);
console.log("The total price of the expensive items: ", costExpensieItems);

const values = [3, 1, 3, 5, 2, 4, 4, 4];
const setOfValues = new Set(values);
const uniqueValues = [...setOfValues];

console.log("Unique elements of the array are: ", uniqueValues);

