// Counter buttons + and -

var counter = 0;

function increaseCounter() {
	counter = counter + 1;
	// document.getElementByTageName("button") would get each button
	document.getElementById("counter").innerHTML = counter;
}

function decreaseCounter() {
	counter = counter - 1;
	// alert(counter);
	document.getElementById("counter").innerHTML = counter;
}

// square this number button

function squareNumber() {
	var num = document.getElementById('number').value;
	var answer = num * num;
	console.log('The result of squaring the number ' + num + ' is ' + answer);
	document.getElementById('number-result').innerHTML = answer;
}

// add to shopping list button

var shoppingList = '<li>macbook</li>';

function addToShoppingList() {
	var item = document.getElementById('shopping').value;
	shoppingList = shoppingList + '<li>' + item + '</li>';
	document.getElementById('list-output').innerHTML = shoppingList;
}

//change bg color

function changeColor() {
	document.getElementsByTagName('body')[0].style.backgroundColor = 'pink';
}