"use strict";

let firstItem = {id: 1, name: "laptop", price: 500};
/*
	An object is in fact a collection of key and value pairs and these are
	defined in JavaScript within parenthesis.

	For each key and value pair, the key and value are seperated by a colon.
	And the key value pairs themselves are seperated by commas.
*/

//Syntax for accessing object: <obj_name>.<key>
console.log(`firstItem has a name of ${firstItem.name} and it costs ${firstItem.price}.`);

let secondItem = {id: 2, name: "watch", price: 240, brand: "Sonata"};
/*
	We will now make use of another notation which can be used in order to
	access the values in an object. So rather than dot notation, we can use
	the below syntax of an "associated array" where we specify the key within
	square brackets and then this will return the corresponding value. 
*/
console.log(`secondItem has a name of ${secondItem["name"]} and it costs ${secondItem["price"]}.`);

console.log(`The brand of firstItem is ${firstItem.brand} while that of secondItem is ${secondItem.brand}.`);

const USD_EUR = 0.9;

let thirdItem = {id: 3,
				name: "headphones",
				brand: "BOAT",
				price: 84,
				priceEUR: this.price * USD_EUR};

/*
	Since we are trying to derive a particular property's value using one of the existing properties,
	we will need to refer to an object's own property.
	And the way to do this in JavaScript, is to make use of the "this" keyword.
	"this" refers to the current object, and to get the value of price for the current object, we
	can access it as this.price
*/

console.log("Price of thirdItem in Euros is: ", thirdItem.priceEUR);

thirdItem = {id: 3,
			name: "headphones",
			brand: "BOAT",
			price: 84,
			priceEUR: function() { return this.price * USD_EUR; }
			};

console.log("Price of updated thirdItem in Euros is: ", thirdItem.priceEUR());


// Re-defining thirdItem with the use of ES6 syntax
thirdItem = {id: 3,
			name: "headphones",
			brand: "BOAT",
			price: 84,
			priceEUR() { return this.price * USD_EUR; }
			};
// Here we don't have a colon and function keyword.
// We just have the name of our function which is priceEUR followed by parenthesis and then the function body.
console.log("Price of updated thirdItem (using ES6 syntax) in Euros is: ", thirdItem.priceEUR());

thirdItem.mfgCountry = "Canada";
// We can use the dot notation in order to add properties to an already existing object.
console.log("The thirdItem is: ", thirdItem);

let fourthItem = new Object();
/*
	Here fourthItem is being initialized as a new Object by which we make use of the new keyword followed
	by the Object constructor.
	At this time, the fourthItem object won't really have any properties. But we have already seen that we
	can use the dot notation in order to add properties to an already existing object.
*/
fourthItem.id = 4;
fourthItem.name = "cell phone";
fourthItem.price = 450;

console.log("The fourthItem is: ", fourthItem);

delete fourthItem.price;

console.log("The fourthItem is: ", fourthItem);