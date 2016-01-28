$( document ).ready(function() {
	//declare global variables
	var userNumber = '';
	var computerResponse = '';
	var userReply = '';
	var computerNumber;
	var randomEmoji;
	var emojis = ['(و˃ᴗ˂)و', '(╯°□°）╯︵ ┻━┻', '＼（＾○＾）人（＾○＾）／', '(✿ ♥‿♥)', '\\(^-^)/', ];

	//initate game!
	playGame();

	function playGame() {
		// pick random number and initiate prompt
		initiateGuessing();
		// focus on user input field
		$('#userGuess').focus();
		// user picks a number
		$('#userGuess').keydown(function(e){
			// submit on enter
			if (e.keyCode === 13) {
				// user num = input
				userNumber = $('#userGuess').val();
				// print user num in html
				printUserReply(userNumber);
				// clear input 
				$('#userGuess').val('');
				// check if usernum = winner
				checkMyNum(userNumber);
				// scroll to bottom of chatbox
				scrollDown();
			}
		});
	}	

	function checkMyNum(guessNum) {
		if (computerNumber < userNumber) {
			printComputerReply('Too high! Guess again');
		}
		else if (computerNumber > userNumber){
			printComputerReply('Too low! Guess again');
		}
		else {
			// pick random emoji for the you win msg
			randomEmoji = randomEmojis();
			// print winning msg
			printComputerReply('You win! ' + randomEmoji);
			// ask play again?
			printComputerReply('Play again?');
			// swap inputs
			$('#userReply').show().focus();
			$('#userGuess').hide();
			// get user answer
			$('#userReply').keydown(function(e) {
				if (e.keyCode === 13) {
					//get user reply
					userReply = $('#userReply').val();
					printUserReply(userReply);
					console.log('this is a user reply ' + userReply);
					//clear user reply
					$('#userReply').val('');
					console.log('after clear ' + userReply);
					//check if y or n
					checkMyReply(userReply);
				}
			});
		}
	}

	function checkMyReply(reply) {
		if ((reply === 'y' || reply === 'yes') || (reply === 'Y' || reply === 'Yes')){
			//if yes, generate new computerNum and show prompt msg
			initiateGuessing();
			scrollDown();
			//show the num field, hide reply field
			$('#userReply').hide();
			$('#userGuess').show().focus();
			return computerNumber;
		}
		else {
			//if no, sadface and quit out of function
			printComputerReply('okay :(');
			scrollDown();	
			return false;
		}
	}

	function randomNum() {
		return Math.ceil(Math.random()*100);
	}

	function randomEmojis() {
		return emojis[Math.floor(Math.random()*emojis.length)];
	}

	function initiateGuessing() {
		// computer picks a number from 1-100
		computerNumber = randomNum();	
		console.log(computerNumber);
		// print initiate prompt
		printComputerReply('I\'m thinking of a number between 1 &amp; 100');
		return computerNumber;
	}

	function printComputerReply(computerReply) {
		$('#guessing-text').append('<div class="computerTxt-container"><i class="fa fa-terminal"></i><span class="computerTxt">' + computerReply + '</span></div>');
	}

	function printUserReply(text) {
		$('#guessing-text').append('<div class="userTxt-container"><span class="userTxt">' + text + '</span><i class="fa fa-user"></i></div>');
	}

	function scrollDown() {
		$('#guessing-text').scrollTo($('#guessing-text')[0].scrollHeight, 350);
	}

});

/*

(و˃ᴗ˂)و

(╯°□°）╯︵ ┻━┻

ʕ·ᴥ·ʔ

＼（＾○＾）人（＾○＾）／

(◡ ﹏ ◡✿)

(◕ ﹏ ◕)

(╥﹏╥)

(Ͼ˳Ͽ)

*/


