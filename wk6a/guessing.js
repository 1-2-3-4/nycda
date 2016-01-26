// Part 2: Number guessing game
// Computer picks # from 1-100, player guesses
// Computer says too high, too low, or you win
// Player keeps guessing until they win

// Math.random gives you rand # between 0 and 1; multiply by 100
// Math.ceil rounds up so results are between 1 and 100
// Math.floor would round down so results are between 0 and 99
var computerNumber = Math.ceil(Math.random()*100);

//user picks a number
var userNumber = prompt('Pick a number from 1-100');

while(computerNumber != userNumber) {
	if (computerNumber > userNumber) {
		userNumber = prompt('Too low! Pick a number from 1-100');
	}
	else if (computerNumber < userNumber) {
		userNumber = prompt('Too high! Pick a number from 1-100');
	}
}
alert('You win!');
