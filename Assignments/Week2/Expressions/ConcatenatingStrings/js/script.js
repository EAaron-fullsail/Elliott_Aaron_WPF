// Expressions - Order of Operations

var oranges = []; // Define array

oranges[0] = 234; // Set 1st value to 87
oranges[1] = 567; // Set 2nd value to 100
oranges[2] = 883;// Set 3rd value to 60


console.log( " You have three Bins of Oranges "); // Print array to console

console.log( " One containing " + oranges[0] + " Oranges" ); // <- Example of Concatenation
console.log( " One containing " + oranges[1] + " Oranges" ); // <- Example of Concatenation
console.log( " One containing " + oranges[2] + " Oranges" ); // <- Example of Concatenation

// adds all the values of the array
var sum = oranges.reduce(function(prev, cur){
	return prev + cur; // return the value
});


console.log("You have " + sum + " Total Oranges"); // Print sum of all array values to the console









