

var gasInput = parseInt(prompt("Enter percentage of gas in the car's tank?"));
console.log(gasInput);
var capacityInput = parseInt(prompt("Enter your car's tank capacity?"));
console.log(capacityInput);
var milege = parseInt(prompt("How many miles per gallon of gas does your car average?"));
console.log(milege);
var toGo = parseInt(prompt("How many miles do you have to go?"));
console.log(toGo);


var gallons = capacityInput * (gasInput / 100);
console.log("Your car has " + gallons +" gallons of gas left!");
var milesLeft = gallons * milege;
console.log("You can travel another " + milesLeft + " miles without stopping for gas! ");
if (milesLeft > toGo){
	console.log("Yes, you can make it without stopping for gas!");
}else{
	console.log("You only have " + gallons + " gallons of gas in your tank, better get gas now while you can");
}