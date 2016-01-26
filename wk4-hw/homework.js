// 1. Is it positive?
// Write a function called isPositive that:
// - takes one argument, a number
// - returns true if it is positive, and false if it is not

function isPositive(num) {
	if (num >= 0) {
		return true; //num is positive
	}
	else {
		return false; //num is negative
	}
}

isPositive(-0.5);
isPositive(0);
isPositive(50);

// 2. State capitals
// Write a function called getCapital that:
// - takes one argument, a two-letter state abbreviation (ie. "ny", "ma", "fl")
// - returns the state capital (you don't need to do all 50 states! 3 or 4 will suffice)

var stateCapitalKeys = {
	nj: 'Trenton',
	nm: 'Santa Fe',
	ny: 'Albany',
	nc: 'Raleigh',
	nd: 'Bismarck',
	oh: 'Columbus',
	ok: 'Oklahoma City',
	or: 'Salem',
	pa: 'Harrisburg'
};

function getCapital(state) {
	return stateCapitalKeys[state];
}

getCapital('ny');
getCapital('pa');
getCapital('nd');

// 3. Tax brackets
// Write a function called calculateTaxes that:
// - takes one argument, an income (a number)
// - returns 5% of that income if it is less than $10000, 10% of that income if it is between $10001-$20000, and 15% if it is greater than $20000

function calculateTaxes(income) {
	if (income <= 10000) {
		return 0.05 * income;
	}
	else if (income > 10000 && income <= 20000) {
		return 0.1 * income;
	}
	else { // income is > 20000
		return 0.15 * income; 
	}
}

calculateTaxes(10500);
calculateTaxes(7000);
calculateTaxes(30000);

// BONUS: Fizz Buzz!
// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”

function fizzBuzz() {
	for (i = 1; i < 101; i++) {
		if ((i % 3 === 0) && (i % 5 === 0)) {
			console.log('FizzBuzz');
		}
		else if (i % 3 === 0) {
			console.log('Fizz');
		}
		else if (i % 5 === 0) {
			console.log('Buzz');
		}
		else {
			console.log(i);
		}
	}
}

fizzBuzz();

// notes from class on fizz buzz

var x = 0;
while(x <= 100) {
	//is x a multiple of 3?
	if (x % 15 === 0) {
		console.log('FizzBuzz');
	}
	else if (x % 3 === 0) {
		console.log('Fizz');
	}
	else if (x % 5 === 0) {
		console.log('Buzz');
	}
	else {
		console.log(x);
	}
	x++;
}
