//make a function that multiplies 2 numbers

function multiplyNumbers(num1, num2) {
	var result = num1 * num2;
	return result;
}

multiplyNumbers(4,5);

//comparison functions

// = assigns a value
// == type coercion, string can equal a value even though they are different types of content
// === strict comparison, these 2 things need to be exactly the same
// !== not equals comparison

var x = -5;

if (x < 0) {
	console.log('x is less than 0!')
}

else if (x === 0) {
	console.log('x is equal to 0!');
}

else if (x > 0) {
	console.log('x is greater than 0!');
}

// || or, && and, ! not

var userAge = 28;

if ((userAge >= 0 && userAge < 3) || userAge > 90) {
	console.log('you are not the target audience for this website');
}
else {
	console.log('you are the target audience for this website');
}

// check if its raining!

var isRaining = true;
var isSnowing = false;

if (isRaining || isSnowing) {
	console.log('Bring an umbrella!');
}

if (!isRaining) {
	console.log('Don\'t bring an umbrella');
}

// values that are false-y: false, 0, null, empty string, undefined

var userAge = 39;

if (userAge >= 35) {
	console.log('you can be president');
}
else if (userAge >= 21) {
	console.log('you can drink');
}
else if (userAge >= 18) {
	console.log('you can vote');
}
else if (userAge >= 16) {
	console.log('you can drive');
}
else {
	console.log('you have so much to look forward to');
}

// switch statements - check for equality

switch (new Date().getDay()){
	case 0: 
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
}

// exercises 

// What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1,num2) {
	if (num1 > num2) {
		console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num1);
		return num1;
	}
	else if (num2 > num1) {
		console.log('The greater number of ' + num1 + ' and ' + num2 + ' is ' + num2);
		return num2;
	}
	else {
		console.log(num1 + 'and ' + num2 + ' are equal');
	}
}

greaterNum(5,10);
greaterNum(10,5);
greaterNum(3,3);
greaterNum(-5,-20);
greaterNum(1.1,1.2);


// The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(lang) {
	if (lang === 'es') {
		// console.log('Hola el Mundo');
		return 'Hola el Mundo';
	}
	else if (lang === 'de') {
		// console.log('Guten Tag');
		return 'Guten Tag';
	}
	else {
		// console.log('Hello, World!');
		return 'Hello, World!';
	}
}

helloWorld('en');
helloWorld('de');
helloWorld();
helloWorld('es');

// The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(numScore) {
	if (numScore >= 90) {
		// console.log('You got an A!');
		return 'A';
	}
	else if (numScore >= 80 && numScore < 90) {
		// console.log('You got a B!');
		return 'B';
	}
	else if (numScore >= 70 && numScore < 80) {
		// console.log('You got a C!');
		return 'C';
	}
	else if (numScore >= 60 && numScore < 70) {
		// console.log('You got a D');
		return 'D';
	}
	else {
		// console.log('You got an F');
		return 'F';
	}
}

assignGrade(95);
assignGrade(80);
assignGrade(76);
assignGrade(15);
assignGrade(66);

// The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(num, noun) {
	if (num != 1) {
		if (noun === 'sheep' || noun === 'moose') {
			return num + ' ' + noun;
		}
		else if (noun === 'octopus') {
			return num + ' octupi';
		}
		else if (noun === 'mouse') {
			return num + ' mice';
		}
		else if (noun === 'goose') {
			return num + ' geese';
		}
		else {
			return num + ' ' + noun + 's';
		}
	}
	else {
		return num + ' ' + noun;
	}
}

pluralize(5, 'cat');
pluralize(1, 'dog');
pluralize(2, 'sheep');
pluralize(3, 'mouse');
pluralize(0, 'goose');


// 10. Write a JavaScript program to construct the following pattern, using a nested for loop. Go to the editor

// *  
// * *  
// * * *  
// * * * *  
// * * * * *  


function prettyPicture() {
	var picture = '*';
	for (i=0; i<10; i++) {
		console.log(picture);
		picture += ' *';
	}
}

prettyPicture();

// 4. Write a JavaScript conditional statement to find the largest of five numbers. Display an alert box to show the result. Go to the editor 
// Sample numbers : -5, -2, -6, 0, -1 

function largestNum(num1,num2,num3,num4,num5) {
	var numArray = [num1, num2, num3, num4, num5].sort(function(a, b){return b-a});
	return numArray[0];
}

largestNum(1,2,3,4,5);
largestNum(-30,0,65,-50,100,80)

// 5. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it will check if the current number is odd or even, and display a message to the screen. Go to the editor 
// Sample Output : 
// "0 is even" 
// "1 is odd" 
// "2 is even" 

function oddEven() {
	for (i=0; i<16; i++) {
		if (i % 2 === 0 || i === 0) {
			console.log(i + ' is even');
		}
		else {
			console.log(i + ' is odd');
		}
	}
}

oddEven();

// 2. Write a JavaScript conditional statement to find the sign of product of three numbers. Display an alert box with the specified sign. Go to the editor 
// Sample numbers : 3, -7, 2 
// Output : The sign is - 

function findSign(num1, num2, num3) {
	var product = num1 * num2 * num3;
	if (product < 0) {
		return 'the sign is -';
	}
	else {
		return 'the sign is +';
	}
}

findSign(3,-7,2);
findSign(-1,-2,-3);
findSign(1,2,3);

// 12. Write a JavaScript program to sum the multiples of 3 and 5 under 1000. Go to the editor 
// Click me to see the solution


function multiples() {
	var sum = 0;
	for (i=0; i<1001; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return i;
}

multiples();


// Use a while loop to write a program that calculates and shows the value of 210 (2 to the 10th power).

var i = 2;
var result = 2;
while (i <= 10) {
	result = result * 2;
	i++;
}
console.log(result);


// Rewrite the solution of the previous exercise using a for loop instead of a while loop.

var result = 2;
for (i=2; i <=10; i++) {
	result = result * 2;
}
console.log(result);

// abs(n)
// Write a function called abs, which returns the absolute value of the number it is given as its argument. The absolute value of a negative number is the positive version of that same number, and the absolute value of a positive number (or zero) is that number itself.

function abs(num) {
	if (num < 0) {
		return num * -1;
	}
	else {
		return num;
	}
}

abs(-1);
abs(1);


































