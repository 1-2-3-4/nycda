//print to the console

console.log('hello world!');

//write to the HTML doc (replaces content?)

document.write('hello world!');

//variables
//declare a variable with var
var x; 

// undefined means declared but not assigned, has no value

// null reassign to a value that means nothing

// ReferenceError: variable is not defined -> this means you are trying to use a variable that hasn't been defined 

var x = 5; //anything to the right of the = is called an "expression"

var a = 2 + 2;
var b = a * 3;
var c = b / 2 * 5;

var name = 'Nicole';
var greeting = 'Hello ' + name + '!';
console.log(greeting);

var title = 'your highness';
var formalGreeting = 'Hello ' + name + ', ' + title + '!';
console.log(formalGreeting);

var quote = 'Phil said \"Hey man, what\'s up?\"'; //escaping quotes
console.log(quote);

//figure out if something is string, boolean, integer, etc: 
console.log(typeof quote);

// Exercises: http://www.teaching-materials.org/javascript/exercises/variables.html

// Ex. 1 Why pay a fortune teller when you can just program your fortune yourself?

//*** Store the following into variables: number of children, partner's name, geographic location, job title.
//*** Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var jobTitle = 'igloo inspector';
var geographicLocation = 'Alaska';
var numberOfChildren = 4;
var partnerName = 'Lumps';

var fortuneTold = 'You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnerName + ' with ' + numberOfChildren + ' kids (as in goats).';

console.log(fortuneTold);

//NOW AS A FUNCTION: 

function fortuneTeller(jobTitle, geographicLocation, numberOfChildren, partnerName) {
	console.log('You will be a ' + jobTitle + ' in ' + geographicLocation + ', and married to ' + partnerName + ' with ' + numberOfChildren + ' kids (as in goats).');
}

fortuneTeller('potato farmer', 'Bolivia', 2, 'Jose');

// Ex. 2 The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = 2015;
var birthYear = 1988;

var possibleAge1 = currentYear - birthYear;

console.log('They are either ' + possibleAge1 + ' or ' + (possibleAge1 - 1) + '.');

//AND NOW AS A FUNCTION 

function ageCalculator(currentYear, birthYear) {
	var possibleAge1 = currentYear - birthYear;
	console.log('They are either ' + possibleAge1 + ' or ' + (possibleAge1 - 1) + '.');
}

ageCalculator(2015, 1965);

// Ex. 3 The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 5;
var circumference = 2 * radius * Math.PI;
var area = Math.PI * radius * radius;
console.log('The circumference is ' + circumference);
console.log('The area is ' + area);

function geometrizer(radius) {
	var circumference = 2 * radius * Math.PI;
	var area = Math.PI * radius * radius;
	console.log('The circumference is ' + circumference);
	console.log('The area is ' + area);
}

geometrizer(2.85);

// 4. The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 28;
var maxAge = 82;
var snacksPerDay = 2;

console.log('You will need ' + ((maxAge - currentAge) * snacksPerDay * 365 ) + ' snacks to last you until the ripe old age of ' + maxAge);

function lifetimeSupply(currentAge, maxAge, snacksPerDay) {
	console.log('You will need ' + ((maxAge - currentAge) * snacksPerDay * 365 ) + ' snacks to last you until the ripe old age of ' + maxAge);
}

lifetimeSupply(28,85,1);

// Ex. 5 The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celsiusToFarenheit(celsiusTemp) {
	var answer = (celsiusTemp * 9 / 5) + 32;
	console.log(celsiusTemp + '°C is ' + answer + '°F');
}

celsiusToFarenheit(40);

function farenheitToCelsius(farenheitTemp) {
	var answer = (farenheitTemp - 32) * 5 /9;
	console.log(farenheitTemp + '°F is ' + answer + '°C');
}

farenheitToCelsius(96);

// from http://www.w3resource.com/javascript-exercises/javascript-basic-exercises.php

// 1. Write a JavaScript program to display the current day and time in the following format. Go to the editor
// Sample Output : Today is : Friday. 
// Current time is : 4 PM : 50 : 22

var todaysDate = new Date();
var today = todaysDate.getDay();
var hours = todaysDate.getHours();
var minutes = todaysDate.getMinutes();
var seconds = todaysDate.getSeconds();

var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

console.log('Today is : ' + days[today]);

if (hours > 12) {
	hours = (hours - 12).toString() + ' PM';
}
else {
	hours = hours.toString() + ' AM';
}

console.log('Current time is : ' + hours + ' : ' + minutes + ' : ' + seconds);


// 5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

var myString = 'w3resource';

function myStringRotate(myString) {

	for (i = 0; i < 10; i++) {
		var firstLetter = myString.substring(0,1);
		var restOfWord = myString.substring(1,10);
		var myString =  restOfWord + firstLetter;
		console.log(myString);
	}
}

myStringRotate(myString);


// function excercise
//name is a parameter/argument/input
function sayMyName(name) {
	console.log('Hi ' + name);
}

sayMyName('Nicole');
sayMyName('Steve'); //the name variable is in the scope of running this function only

function addNumbers(num1, num2) {
	console.log(num1 + num2);
}

addNumbers(24,12);
addNumbers(5.3,.3984759348);

// 1. Write a JavaScript function that reverse a number. Go to the editor
// Example x = 32243;
// Expected Output : 34223	

function reverseNum(num) {
	num = num + '';
	var revNum = num.split('').reverse().join('');
	console.log(revNum);
}

reverseNum(3702394);

// 2. Write a JavaScript function that checks whether a passed string is palindrome or not? Go to the editor
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checkPalindrome(myString) {
	myString = myString.toLowerCase().split(' ').join('');
	var reverseString = myString.split('').reverse().join('');
	if (myString == reverseString) {
		console.log('this is a palindrome!');
		console.log(myString);
		console.log(reverseString);
	}
	else {
		console.log('this is not a palindrome :(');
		console.log(myString);
		console.log(reverseString);
	}
}

checkPalindrome('madam');
checkPalindrome('nurses run');
checkPalindrome('Was it Eliots toilet I saw');
checkPalindrome('Steve is a guy');

// 3. Write a JavaScript function that generates all combinations of a string. Go to the editor
// Example string : 'dog' 
// Expected Output : d,do,dog,o,og,g 

function allCombo(myString) {
	myString = myString.split(' ').join('');
}

// 4. Write a JavaScript function that returns a passed string with letters in alphabetical order.

function alphabetizeString(myString) {
	myString = myString.split(' ').join('').split('');
	alphabet = myString.sort().join('');
	console.log(alphabet);
}

alphabetizeString('thing');
alphabetizeString('lipstick tube');
alphabetizeString('how about a whole sentence even');

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case.

function properCasing(myString) {

}






















