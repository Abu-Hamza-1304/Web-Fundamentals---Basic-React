"use strict";

console.log("Is this === window?", this === window);
// this is same as window object.
console.log("What is this?", this);

var age = 35;
console.log("window.age : ", window.age);
console.log("this.age : ", this.age);

this.age = 55;
console.log("window.age : ", window.age);
console.log("age : ", age);

// NOTE: In the global context, "this" points to the window object.

let someFunction = () => this;
console.log("this returned from a function: ", someFunction());
// Even in this context, "this" returns the window object.

/*
	NOTE: Arrow functions in JavaScript inherit the scope from their parent,
	which is why the value of this points to the same window object in this case.
*/

/*
let myCar = {
	make: "Volvo",
	model: "S60",
	price: 42000,
	printDetails() {
		// console.log("this from myCar: ", this);
		console.log(`
					Make: ${this.make}
					Model: ${this.model}
					Price: ${this.price}
					`);
	},
	engine: {
		cylinders: 4,
		displacement: 2000,
		horsepower: 250,
		printDetails() {
			console.log(`
						Displacement: ${this.displacement}cc
						HorsePower: ${this.horsepower}bhp
						`);
		}
	}
};

console.log("The fields of myCar are: ");
myCar.printDetails();

//We see that, it is the myCar Object itself which is returned.
// So when defined within a function inside an object, this points to the object itself.

console.log("Engine details: ");
myCar.engine.printDetails();
*/

let myCar = {
	make: "Volvo",
	model: "S60",
	price: 42000,
	engine: {
		cylinders: 4,
		displacement: 2000,
		horsepower: 250,
	}
};

function printCarDetails() {
	console.log(`
				Make: ${this.make}
				Model: ${this.model}
				Price: ${this.price}
				`);
}

function printEngineDetails() {
	console.log(`
				Displacement: ${this.displacement}cc
				HorsePower: ${this.horsepower}bhp
				`);
}

// We can perform linking of a function to an object in three different ways.

// 1. Using call function
console.log("Car details: ", printCarDetails.call(myCar));
console.log("Engine details: ", printEngineDetails.call(myCar.engine));

let yourCar = {
	make: "Porsche",
	model: "718 Cayman",
	price: 61000,
	engine: {
		cylinders: 4,
		displacement: 2500,
		horsepower: 350,
	}
};

console.log("Your car details: ", printCarDetails.call(yourCar));
console.log("Your engine details: ", printEngineDetails.call(yourCar.engine));