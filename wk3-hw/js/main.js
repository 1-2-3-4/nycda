/*********************************************
MATH FUNCTIONS
**********************************************/
function squareNumber(num) {
	var answer = num * num;
	return answer;
}

function halfNumber(num) {
	var halfNum = num / 2;
	return halfNum;
}

function percentOf(num1, num2) {
	var answer = ((num1 / num2) * 100).toFixed(2);
	return answer;
}

function areaOfCircle(radius) {
	var area = (Math.PI * radius * radius).toFixed(2);
	return area;
}

/*********************************************
HELPER FUNCTIONS - INSERT VALUES INTO HTML
**********************************************/
// function squareNumberHTML() {
// 	var num = document.getElementById('square-num').value;
// 	var answer = squareNumber(num);
// 	document.getElementById('square-result').innerHTML = answer;
// 	return answer;
// }

//same as above but with jQuery instead

function squareNumberHTML() {
	var num = $('#square-num').val();
	var answer = squareNumber(num);
	$('#square-result').text(answer);
	return answer;
}

function halfNumberHTML() {
	var num = document.getElementById('half-num').value;
	var halfNum = halfNumber(num);
	document.getElementById('half-result').innerHTML = halfNum;
	return halfNum;
}

function percentOfHTML() {
	var num1 = document.getElementById('percent-num1').value;
	var num2 = document.getElementById('percent-num2').value;
	var answer = percentOf(num1, num2);
	document.getElementById('percent-result').innerHTML = answer;
	return answer;
}

function areaOfCircleHTML() {
	var radius = document.getElementById('radius').value;
	var area = areaOfCircle(radius);
	document.getElementById('area-result').innerHTML = area;
	return area;
}

function multiOperationsHTML() {
	//refer to the original hw functions
	var num = document.getElementById('multi-num').value;
	document.getElementById('multi-num-orig').innerHTML = num;
	// 1. Take half of the number and store the result.
	var halfNum = halfNumber(num);
	document.getElementById('multi-result1').innerHTML = halfNum;
	document.getElementById('multi-result1a').innerHTML = halfNum;
	// 2. Square the result of #1 and store that result.
	var squareNum = squareNumber(halfNum);
	document.getElementById('multi-result2').innerHTML = squareNum;
	document.getElementById('multi-result2a').innerHTML = squareNum;
	document.getElementById('multi-result2b').innerHTML = squareNum;
	// 3. Calculate the area of a circle with the result of #2 as the radius.
	var area = areaOfCircle(squareNum);
	document.getElementById('multi-result3').innerHTML = area;
	document.getElementById('multi-result3a').innerHTML = area;
	// 4. Calculate what percentage that area is of the squared result (#3).
	var percentage = percentOf(area, squareNum);
	document.getElementById('multi-result4').innerHTML = percentage;

}

