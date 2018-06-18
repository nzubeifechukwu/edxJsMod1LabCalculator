/* Code for a web page that displays the result of simple arithmetic operations */

var username = window.prompt("Please enter your name: "); // username stores the name entered by user

// access the id title content and store in greeting
var greeting = document.getElementById("title");

// concatenate greeting with username
greeting.innerHTML += ", " + username;

var number1 = parseInt(window.prompt("Enter a number: ")); // number1 stores the first operand as a number
var number2 = parseInt(window.prompt("Enter another number: ")); //number2 stores the second operand as a number

// operand1Info gets and stores the id operand1 content; operand2Info gets and stores the id operand2 content
var operand1Info = document.getElementById("operand1");
var operand2Info = document.getElementById("operand2");

// appends number1 and number2 to operand1Info and operand2Info
operand1Info.innerHTML += number1;
operand2Info.innerHTML += number2;

var sum = number1 + number2;
var difference = number1 - number2;
var product = number1 * number2;
var quotient = number1 / number2;
var modResult = number1 % number2;

// displays the sum of number1 and number2 on the page
document.getElementById("sum").innerHTML = "The sum of " + number1 + " and " + number2 + " is " + sum;

// displays the difference between number1 and number2 on the page
document.getElementById("diff").innerHTML = "The difference between " + number1 + " and " + number2 + " is " + difference;

// displays the product of number1 and number2 on the page
document.getElementById("product").innerHTML = "The product of " + number1 + " and " + number2 + " is " + product;

// displays the quotient when number1 is divided by number2
document.getElementById("quotient").innerHTML = "The quotient of " + number1 + " and " + number2 + " is " + quotient;

// displays the remainder when number1 is divided by number2
document.getElementById("mod").innerHTML = "The result of the mod operation on " + number1 + " and " + number2 + " is " + modResult;
