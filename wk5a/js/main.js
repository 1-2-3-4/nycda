//turn the link green
$('a').css('color', 'green');
//change the text of the link
$('a').html('Google');
//.html() can function to get the value of something, or change the value
var linkHref = $('a').attr('href');
//modify the link href
$('a').attr('href', 'http://www.google.com/');


//create an element

var p = $('<p>Hello!</p>');
p.addClass('special');
$('.main-content').append(p);

//color buttons

function red() {
	$('body').css('background-color', 'red');
}

function orange() {
	$('body').css('background-color', 'orange');
}

function yellow() {
	$('body').css('background-color', 'yellow');
}

function green() {
	$('body').css('background-color', 'green');
}

function blue() {
	$('body').css('background-color', 'blue');
}

function clearBG() {
	$('body').css('background-color', 'white');
}

// To do list example

function addItem() {
	var newItem = '<li>' + $('#item').val() + '</li>';
	$(newItem).appendTo('#todo');
}

















