/*
	Aaron Elliott
	WPF 1409 Section 02
	Expression Worksheet
	9-8-2014
*/





//Get user input




var doc = document;
var message = doc.createElement("li");
var target = doc.getElementById("DOM_Target");

var speeds = [];
speeds[0] = 1000000;
speeds[1] = 1000000000;


var hz = [];

hz[0] = "mhz";
hz[1] = "ghz";

var yourProcessor;
var yourClockSpeed;


alert("Lets Calulate how many bits your processor can transfer in a minute!");
var bitprompt = parseInt(prompt("Is your processor 64bits or 32bits?"));

var hrzmessage = prompt("Is the Clock speed in Ghz or Mhz?\nType Ghz or Mhz");
if(hrzmessage == hz[0]){

	var howmany = parseInt(prompt("How many " + hrzmessage + " is it? \n Just type the number please."));
		
	var totatBits = bitprompt * (howmany * speeds[0]);

	var outPut = doc.createTextNode(totatBits);
	
	message.appendChild(outPut);

	target.appendChild(message);

	console.log(totatBits);

}else if(hrzmessage == hz[1]){

	var howmany = parseInt(prompt("How many " + hrzmessage + " is it? \n Just type the number please."));

	var totatBits = "You're Computer can process " + bitprompt * (howmany * speeds[1]) + " per second";

	var outPut = doc.createTextNode(totatBits);
	message.appendChild(outPut);

	target.appendChild(message);
}else{

	//Print Error Message 
	
}










//Prompt

















//Dog Years task
var ageInHumanYears = 3; // set human years = 3

var calDogYears = ageInHumanYears * 7; // multiply human years to get dog years
var ageInDogYears = calDogYears; // set age in dog years to reults of calucaltion

 
// Creates a string with the results
var result = "Sparky is " + ageInHumanYears + " in human years old which makes him " + ageInDogYears + " in dog years";

console.log(result); // Print the Results
// end 

//Pizza at the party task 
var peopleAtTheParty = 8; // Number of people at party
var pizzaOrdered = 4; // Number of pizzas ordered 
var numberOfSlices = 6; // Number of slices each person gets

var division = pizzaOrdered * numberOfSlices / peopleAtTheParty; // Calulate the number of pieces each person eats

var pieces = division; // store that result in a variable

var result = "Each person ate " + pieces + " of pizza at the party."; // create a string with the results stored in variable

console.log(result);// Print the Results
//end

//Pizza for the dog

//I don't understand what's being asked here 

//end

//Groceries task 
var weeksGroceries = []; // Creats an empty array

weeksGroceries[0] = 23; // Set 1st array item to 23
weeksGroceries[1] = 41; // Set 2nd array item to 41
weeksGroceries[2] = 5; // Set 3rd array item to 5
weeksGroceries[3] = 25; // Set 4th array item to 25
weeksGroceries[4] = 10;// Set 5th array item to 10


//Cycle through and add all of the array itmes 
var sum = weeksGroceries.reduce(function(prev, cur){
	return prev + cur; // return the value
});

var average = sum / weeksGroceries.length; // finds the average from the total

//store those results in a string
var result = "You have spent a total of $" + sum + " on groceries over 5 weeks. That is an average of $" + Math.round(100*average)/100 + " per week";
console.log(result);// Print the Results

//End


//Find the discount task

var originalPrice = 105; // set original price

var discountPercentage = 20 / 100; // get discount rate in decimal form

var discount = originalPrice * discountPercentage; // multiply to find the discounted amount

var newPriceBeforeTax = originalPrice - discount; // subtract that discount from the original price

var tax = 7 / 100; // find the tax percentage

var taxedPrice = newPriceBeforeTax * tax + newPriceBeforeTax; // add the tax

//Store the results in a string 
var result = "Your total was originally $" + originalPrice + ", but after a " + discountPercentage * 100 + "% discount, it is now $" + newPriceBeforeTax + " without tax, and $" + taxedPrice + " with tax.";

console.log(result);// Print the Results



