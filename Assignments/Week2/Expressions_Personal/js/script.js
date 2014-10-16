/*
	Aaron Elliott
	WPF 1409 Section 02
	Expression Personal
	9-9-2014
*/


//Welecome alert
alert("Lets Calulate how to pay off those student loans!");

//Get input for how much the student owes
var amountOwed = parseInt(prompt("How much do you currently owe?"));

//Get input from the user one how long they want to pay
var howLong = parseInt(prompt("How many years before your would like your loans to be repaid?"));

//Get input from user 
var howMuch = parseInt(prompt("how much do you expect to to pay each month?"));

// Array to hold all of the inputs from user and one input used throughout the rest of the code
var inputs = [];

inputs[0] = amountOwed;
inputs[1] = howLong;
inputs[2] = howMuch;
inputs[3] = 12;

// Calculate how much they currently owe / (12 months * expected monthly payments )= total years 
var actualAmount = amountOwed / (12 * inputs[1]);

// Calculate payments if they do not make their goal
var prefPayments = inputs[0] / ( inputs[3] * inputs[1] );

// Calculate payments if they do not make their goal
var onTrackPayments = inputs[0] / ((inputs[1]*inputs[3])*inputs[2])

// check to see if the student will make his or her repayment goal
if( inputs[1] != actualAmount) {
	//If they are not going to make it
	console.log("Uh Oh! You wont be able to repay you loans in that amount of time with such low monthly Payments");// Message the user

	console.log("To repay $" + inputs[0] + " in " + inputs[1] + " years you will need to make monthly payments of $" + prefPayments);// Update the user

}else{
	// If the student is going to make it
	console.log("Great! You're Right one track!"); // Message the user

	console.log("You can repay $" + inputs[0] + " in " + onTrackPayments + " years making monthly payments of $" + inputs[2]); // Update the user
}







