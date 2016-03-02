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

// var hotel = {
// 	name: "Quay", //string
// 	rooms: 40, //number, obviously.
// 	booked: 25, //... also a number.
// 	checkAvailability:  function () {
// 		return this.rooms - this.booked
// 	}
// };

// var elName = document.getElementById("hotelName")
// elName.textContent = hotel.name

// var elRooms = document.getElementById("rooms")
// elRooms.textContent = hotel.checkAvailability();


// var hotel = {
// 	name: "Park",
// 	rooms: 120,
// 	booked: 77,
// 	checkAvailability: function() {
// 		return this.rooms - this.booked
// 	}
// };

// var elName = document.getElementById("hotelName")
// elName.textContent = hotel.name

// var elRooms = document.getElementById("rooms")
// elRooms.textContent = hotel.checkAvailability()

// //the above crazy notes are just for pages 85-104 of duckett's book, for practicing write script





//working with strings

// var saying = "Home sweet home"
// var msg = "<h2>length: </h2><p>" + saying.length + "</p>"

// msg += "<h2>uppercase: </h2><p>" + saying.toUpperCase() + "</p>"
// msg += "<h2>lowercase: </h2><p>" + saying.toLowerCase() + "</p>"
// msg +=  "<h2>character index: 12</h2><p>" + saying.charAt(12) + "</p>"
// msg += "<h2>first ee: </h2><p>" + saying.indexOf("ee") + "</p>"
// msg += "<h2>last e: </h2><p>" + saying.lastIndexOf("e") + "</p>"
// msg += "<h2>character index: 8-14</h2><p>" + saying.substring(8,14) + "</p>"
// msg += "<h2>replace: </h2><p" + saying.replace("me", "w") + "</p>"

// //select the element with an id attribute and add the value of the msg variable above inside of it

// var el = document.getElementById("info")
// el.innerHTML = msg;


// var originalNumber = 10.23456

// var msg = "<h2>original number</h2><p>" + originalNumber + "</p>"
// msg += "<h2>3 decimel places</h2><p>" + originalNumber.toFixed(3) + "</p>"
// msg += "<h2>3 digits</h2><p>" + originalNumber.toPrecision(3) + "</p>"
// var el2 = document.getElementById("info")
// 	el.innerHTML = msg


// the date object

//for footer year
var today = new Date()
var year = today.getFullYear()

var el = document.getElementById("footer")
el.innerHTML = '<p>Copyright &copy; ' + year  + '</p>'


//for the banner on left side showcasing #years in business

var today = new Date()
var year = today.getFullYear()
var est = new Date("Apr 16, 1996, 15:45:55")
var difference = today.getTime() - est.getTime()
difference = (difference / 31556900000)

var elMsg = document.getElementById("message")
elMsg.textContent = Math.floor(difference) + " years of online travel advice"


// re-create the hotel object and write out the offer details

(function() {

var hotel = {
	name: "Park",
	roomRate: 220, //amount in dollars
	discount: 15, // percentage off
	offerPrice: function() {
		var offerRate =  this.roomRate * ((100 - this.discount) / 100)
		return offerRate
	}
}
// write out the hotel name, standard rate, and the special rate

var hotelName, roomRate, specialRate  //declare the variables

hotelName = document.getElementById("hotelName")
roomRate = document.getElementById("roomRate")
specialRate = document.getElementById("specialRate")

hotelName.textContent = hotel.name //write hotel name
roomRate.textContent = "$" + hotel.roomRate.toFixed(2) //write room rate
specialRate.textContent = "$" + hotel.offerPrice() // write offer price

//CALCULATE AND WRITE OUT EXPIRY DETAILS FOR THE OFFER

var expiryMsg //message displayed to users
var today  //today's date
var elEnds // element that will show msg about offer end

function offerExpires(today) {
	//declare var within func for local scope
	var weekFromToday, day, date, month, year, dayNames, monthNames
	//add 7 days time in milliseconds
	weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)
	//create arrays to hold the days/months
	dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"]
	//collect the parts of the date to show on the page

	day = dayNames[weekFromToday.getDay()]
	date = weekFromToday.getDate()
	month = monthNames[weekFromToday.getMonth()]
	year = weekFromToday.getFullYear()

	//create message
	expiryMsg = "Offer expires next "
	expiryMsg += day + " <br>(" + date + " " + month + " " + year + ")"
	return expiryMsg
}

today = new Date()  //put today's date in var
elEnds = document.getElementById("offerEnds")
elEnds.innerHTML = offerExpires(today) // add the expry message

// finish the immediately invoked function expression
}())