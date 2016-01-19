// //declaring a function

// function sayHello() {
// 	document.write("Hello!");
// }
// sayHello();

// //giving functions parameters - items that appear inside the parentheses

// // function getArea(with, height) {
// // 	return width * height;
// // }

// //above function will calc and return the area of a rectangle, needing the width and height
// //when you design a script =note the info the function requries in order for it to perform

// // //arguments are values that the function should use in the parens. variables.

// // getArea(3, 5);

// // wallWidth = 3;
// // wallHeight = 5;
// // getArea(wallWidth, wallHeight);


// //get a single value out of a function


// function calculateArea(width, height) {
// 	var area = width * height;

// }
// var wallOne = calculateArea(3, 5);
// var wallTwo = calculateArea(8, 5);

// //getting multiple values out of a function

// function getSize(width, height, depth) {
// 	var area = width + height;
// 	var volume = width + height * depth
// 	var sizes [area, volume]
// 	return sizes;
// }
// var areaOne = getSize(3, 2, 3)[0];
// var volumeOne = getSize(3, 2, 3)[1];


// //anon functions and function expressions.
// //expressions => value. 
// //function declaration - can call later in code.
// //to call fuctions, give them names. like pets.
// //example below is for a function called 'area'


// function area(width, height) {
// 	return width * height;
// };
// var size = area(3, 4);

// //func expressions names are usually skipped over by intrepreter. nameless functions are called anon functions.

// var area = function(width, height) {
// 	return width * height
// }
// var size = area(3, 4)


// //immediate invoked function expressions
// //'IIFE' [pronounced iffy]
// // Iffy has no name. Executed as interpreter comes across them

// var area = ( function() {
// 	var width = 3;
// 	var height = 2;
// 	return width = height
// } ());    //the final parentheses - paired - call function immediately. group operators = the opening and closing single parens - ensures intrepreter treats as expression

// //BUT WHEN DO I USE THE IFFY?
// //used for code that only needs to run once within a task/
// //-i.e., 
// 	//argument when a func is called, to calc value for that func
// 	//to assign a value of property to object
// 	//in event handlers and listeners, to perform task of event
// 	//to prevent c o n f l i c t between two scripts that might use the same var names < this seems important/ remember this/ iffe's prevent conflict. so they're like code peacekeepers.

// 	//IFFE used as wrapper around set of code. any var declared within that anon function are protected from var in other scripts. this is called SCOPE
// //"INVOKE THE IFFY!" < remember this absurd phrase to remember what to use to immediately invoke function expressions 
// // ///////[like release the kraken. but for js?]


// //variable scope:

// //use local variables wherever possible. global variables take up room in memory

// // //local variable:

// // function getArea(width, height) {
// // 	var area = width * height;
// // 	return area;
// // }
// // //local variables are better on the browser's memory. global variables are more high maintenance and the poor browser has to remember them for as long as the webpage is open.

// // //global scope:

// // var wallSize = getArea(3, 2)
// // document.write(wallSize);

// }

// //What is An Object (pg 100)

// //objects group together variables. objects are everything. variables become known as properties
// //**TEST SELF BELOW ON WHAT TO CALL EACH BELOW. creating an object. :)

// var hotel = {
// 	name: "Quay", //string
// 	rooms: 40, //number
// 	booked: 25 //number
// 	gym: true //boolean
// 	roomTypes: ["twin", "double", "suite"], //array

// 	checkAvailability: function() {
// 		return this.rooms - this.booked;     //function
// 	}

//  }


// //Creating an Object with literal notation - most popular way
// //object is the curly braces and contents
// //stored in variable called hotel, so refer to it as hotel object
// //separate each key from its value using a colon i.e. name: Quay
// //separate each property and method with a comma but not after the last value
// //--pg 102

// //DOT NOTATION
// //using the period as the 'member operator. accesses property or method of an object


// var hotelName = hotel.name;
// var roomsFree = hotel.checkAvailability();

//CREATING OBJECTS USING LITERAL NOTATION 	 pg 104 PRACTICE

var hotel = {
	name: "Quay", //string
	rooms: 40, //number, obviously.
	booked: 25, //... also a number.
	checkAvailability:  function () {
		return this.rooms - this.booked
	}
};

var elName = document.getElementById("hotelName")
elName.textContent = hotel.name

var elRooms = document.getElementById("rooms")
elRooms.textContent = hotel.checkAvailability();


var hotel = {
	name: "Park",
	rooms: 120,
	booked: 77,
	checkAvailability: function() {
		return this.rooms - this.booked
	}
};

var elName = document.getElementById("hotelName")
elName.textContent = hotel.name

var elRooms = document.getElementById("rooms")
elRooms.textContent = hotel.checkAvailability()

//the above crazy notes are just for pages 85-104 of duckett's book, for practicing write script