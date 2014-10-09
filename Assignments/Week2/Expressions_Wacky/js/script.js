/*
	Aaron Elliott
	WPF 1409 Section 02
	Expression Worksheet
	9-8-2014
*/

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



