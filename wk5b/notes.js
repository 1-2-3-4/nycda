// LOOPS AND ARRAYS

// WHILE LOOP - will run *while* condition is true; easy to start an infinite loop this way

var x = 0;
while(x < 10) {
	console.log(x);
	//don't forget to increment!!!! 
	x++;
}

// this example returns 0-9, 10 < 10 is not true so it'll stop looping


// simple guessing game 
a = 0;
b = 5;

while (a != b) {
	a = prompt('Guess a number');
}

// bower will download libraries from the terminal window into your project folder, keeps a list of files and versions

// gulp will manage files before production i.e.) minify JS,  