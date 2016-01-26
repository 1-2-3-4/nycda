// RETURN VALUES + OUTPUTS

function addNumbers(num1,num2) {
	var result = num1 + num2;
	return result; //anything after this line won't be executed
}

addNumbers(2,5);
addNumbers(3,2);

// you can use function calls in expressions

var biggerSum = addNumbers(2, 5) + addNumbers(3,2);
console.log(biggerSum);

//you can call functions inside function calls

var hugeSum = addNumbers(addNumbers(5,2), addNumbers(3,2));

//more exercises

// 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. Go to the editor
// Example string : 'the quick brown fox' 
// Expected Output : 'The Quick Brown Fox '

function titleCase(myString) {
	var titleCase = myString.split(' ');
	for (i = 0; i < titleCase.length; i++) {
		titleCase[i] = titleCase[i].substr(0,1).toUpperCase() + titleCase[i].substr(1,titleCase[i].length);
	}
	titleCase = titleCase.join(' ');
	return titleCase;
}

titleCase('something goes here blah blah blah');

// 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.

function longestWord(myString) {
	var myString = myString.split(' ');
	var newArray = [];
	for (i = 0; i < myString.length; i++) {
		newArray.push(myString[i].length);
	}
	var largestNum = Math.max.apply(Math, newArray);
	var arrayPos = newArray.indexOf(largestNum);
	return myString[arrayPos];
}

longestWord('hello my name is nicole i made a function');

longestWord('here\'s another sentence where I will try to use a lot of pretentiously elaborate and lengthy words');

// 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Go to the editor
// Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. 
// Example string : 'The quick brown fox' 
// Expected Output : 5

function checkVowels(myStr) {
	var numVowels = (myStr.match(/a/g) || []).length + (myStr.match(/e/g) || []).length + (myStr.match(/i/g) || []).length + (myStr.match(/o/g) || []).length + (myStr.match(/u/g) || []).length;
	return numVowels;
}

checkVowels('aaa aa a a a');

checkVowels('here is another sentence using all the vowels hopefully');

// class example - xmas shopping list 

var shoppingList = 'Corgi';

function addItem(item) {
	shoppingList = shoppingList + ', ' + item;
	return shoppingList;
}

addItem('BB8 Robot');
addItem('macbook');
addItem('markers');
addItem('pajamas');

// class example2 - return song genre

function getGenre(song) {
	if (song === 'Song 1' ||
		song === 'Song 2' ||
		song === 'Song 3' ||
		song === 'Song 4' || ) {
		return 'classical';
	} 
	else if (song === 'Song 5' ||
		song === 'Song 6') {
		return 'heavy metal';
	}
	else if (song === 'Song 7' ||
		song === 'Song 8') {
		return 'rock';
	}
	else if (song === 'Song 9' ||
		song === 'Song 10') {
		return 'jazz';
	}
}

































