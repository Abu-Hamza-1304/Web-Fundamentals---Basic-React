"use strict";

var myCar = {

	make: "Volvo",
	model: "S60",
	price: 42000,
	color: "Grey",

	seats: {
		material: "Leather",
		color: "Brown"
	}
}

console.log("My car: ", myCar);

var yourCar = myCar;

console.log("Your ar: ", yourCar);

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Grey";

console.log("Your car: ", yourCar);

/*
	We will now initialize a variable called "hisCar" by invoking an object method.
	Specifically, this is the Object.assign function, which effectively copies over
	the fields from a source object over to a target.
*/

var hisCar = Object.assign({}, myCar);
/*
	So the source object in this case in myCar, which is the second argument, and
	the target is the empty object, which is the first argument.

	Object.assign works by copying over all of the fields from the source argument
	into the target and then returns the target.

	So when this function call, hisCar will be a new object, which contains all of the
	fields in myCar.
*/
hisCar.color = "Red";
hisCar.seats.color = "Neon Green";

console.log("The effect of Object.assign() : ");
console.log("His car: ", hisCar);
console.log("My car: ", myCar);

/*
	NOTE: When copying objects using the Object.assign method, we have not created an
	entirely independent deep copy.
	All of the top-level fields in both of these objects are independent.
	However, in the case of nested objects, both myCar and its copy hisCar are pointing
	to the same underlying object.
	However, creating copies using Object.assign method is different from creating a copy
	using the assignment or equal to operator. Since at least the fields which are not
	nested objects are independent of each other. 
*/

var herCar = {...myCar};

console.log("Her car: ", herCar);

herCar.seats.color = "Black";

console.log("The effect of the spread syntax: ");
console.log("Her car: ", herCar);
console.log("My car: ", myCar);

/*
	NOTE: myCar and herCar are not completely independent. So the use of the spread syntax
	in order to create a copy of an object does not create a deep copy.
	However, this copy is similar to using the Object.assign method, where all of the fields
	defined at the top-level are indeed different copies.
	However, in case of the nested objects, they are in fact references to the same underlying
	data.
*/

/*
	In order to create deep copy where even nested objects are created out of copies rather
	than references is to make use of the "JSON.stringify" method.
*/

var myCar = {

	make: "Volvo",
	model: "S60",
	price: 42000,
	color: "Grey",

	seats: {
		material: "Leather",
		color: "Brown"
	}
}

yourCar = JSON.parse(JSON.stringify(myCar));

/*
	When we invoke JSON.stringify on myCar, this effectively converts that object into a
	String representation.
	And important feature here is that even the nested objects are converted to strings.
*/

yourCar.tyres = "Pirelli";
yourCar.seats.color = "Purple";

console.log("The effect of JSON.parse() and JSON.stringify() :");
console.log("Your car: ", yourCar);
console.log("My car: ", myCar);

/*
	One important point to note about using this combination of JSON.stringify and
	JSON.parse() is that, we cannot use these in order to create copies of objects
	where the attribute values are functions.
	This is because functions are not recognized by the JSON format.
	And those will be lost if we JSON,stringify an object.
*/