/*
	Aaron Elliott
	WPF 1409 Section 02
	Expression Personal
	9-8-2014
*/




//Welecome alert
alert("Lets Calulate how to pay off those student loans!");

//Get input for how much the student owes
var amountOwed = parseInt(prompt("How much do you currently owe?"));

//Get input from the user one how long they want to pay
var howLong = parseInt(prompt("How many years before your would like your loans to be repaid?"));

//Get input from user 
var howMuch = parseInt(prompt("how much do you expect to to pay each month?"));


var inputs = [];

inputs[0] = amountOwed;
inputs[1] = howLong;
inputs[2] = howMuch;
inputs[3] = 12;

// how much they currently owe / (12 months * expected monthly payments )= total years 
var actualAmount = amountOwed / (12 * inputs[2]);

var prefPayments = inputs[0] / ( inputs[3] * inputs[1] );

var onTrackPayments = inputs[0] / ((inputs[1]*inputs[3])*inputs[2])

if( inputs[1] != actualAmount) {

	console.log("Uh Oh! You wont be able to repay you loans in that amount of time with such low monthly Payments");
	console.log("To repay $" + inputs[0] + " in " + inputs[1] + " years you will need to make monthly payments of $" + prefPayments);

}else{

	console.log("Great! You're Right one track!");
	console.log("You can repay $" + inputs[0] + " in " + onTrackPayments + " years making monthly payments of $" + inputs[2]);
}

console.log(actualAmount)







