// Expressions - Order of Operations

var quizes = []; // Define array

quizes[0] = 87; // Set 1st value to 87
quizes[1] = 100; // Set 2nd value to 100
quizes[2] = 60;// Set 3rd value to 60
quizes[3] = 80;// Set 4th value to 80

console.log( "Grades for the quiz " + quizes ); // Print array to console


// adds all the values of the array
var sum = quizes.reduce(function(prev, cur){
	return prev + cur; // return the value
});

// find the average 
var numberOfScores = 0; // Define numberOfScores variable and set it to 0

// For each item in quizes array increment i by 1
for(var i=0; i <= quizes.length; i++){
 numberOfScores = i; // set numberOfScores variable = i
}

// Define average variable
var average = "The average for the class is " + sum / numberOfScores; // calculates average score

console.log("Total number of scores in array " + numberOfScores); // Print number of array items to console

console.log("Sum of all the grades " + sum); // Print sum of all array values to the console

console.log(average); // Print the average variable to the console 








