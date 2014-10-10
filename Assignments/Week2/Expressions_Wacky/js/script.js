/*
	Aaron Elliott
	WPF 1409 Section 02
	Expression Wacky
	9-8-2014
*/


//Sets up an array to hold the number of animals
var animals = [];
animals[0] = 12; // number of Goats
animals[1] = 6; // number of sheep
animals[2] = 24; // number of cows

//Welcome Alert
alert("Welcome to the animal party!");
// Alert expaling what is going on here
alert("We have" + animals[0] + " sheep, " +animals[1]+ " goats, and " + animals[2] + " cows at the party");

// Prompt the user to send cows home
var sendHomeCows = parseInt(prompt(" Uh oh! the cows are chewing on the sofa! \n you decide it's time for some of the cows to go home! \n how many cows would you like to send home?"));
	
	//if the user selects a number that is to high restart the applicaiton
	if( animals[2] < sendHomeCows){
		alert("Oh No! You can't send home more cows home than there are at the house!");
		console.log("Oh No! You can't send home more cows home than there are here at the house!");
		location.reload(); // Reload the page 
	}

//Subtract the input from the total number of cows
var cowsLeft = animals[2] - sendHomeCows;

//Log this in the console
console.log(cowsLeft + " Cow(s) still at the Party");

//Prompt the user to send some goats home
var sendHomeGoats = parseInt(prompt(" Uh oh! Now the goats are jumping on the bed! \n you decide it's time for some of the goats to go home! \n how many goats would you like to send home?"));
	//if the user selects a number that is to high restart the applicaiton
	if( animals[1] < sendHomeGoats){
		alert("Oh No! You can't send home more cows home than there are at the house!");
		console.log("Oh No! You can't send home more goats home than there are here at the house!"); //Warn the user
		location.reload(); // Reload the page 
	}

//Subtract the input from the total number of goats
var goatsLeft = animals[1] - sendHomeGoats;

//Log this in the console
console.log(goatsLeft + " Goat(s)  still at the Party");

//Prompt the user to send home some sheep
var sendHomeSheep = parseInt(prompt(" Uh oh! Now the sheep are getting their wool everywhere! \n you decide it's time for some of the sheep to go home! \n how many sheep would you like to send home?"));

	if( animals[0] < sendHomeSheep){
		alert("Oh No! You can't send home more cows home than there are at the house!");
		console.log("Oh No! You can't send home more sheep home than there are here at the house!");
		location.reload(); // Reload the page 
	}

//Subtract the input from the total number of sheep
var sheepLeft = animals[0] - sendHomeSheep;

//Log this in the console
console.log(sheepLeft + " Sheep still at the Party");

//Prompt the user to guess how many animals are left at the party
var totalAnimals = parseInt(prompt(" How Many animals are left at the party? \n 'only type a number'"));

//Log the amount guessed in the console
console.log(" You Guessed : " + totalAnimals);

//Find the total remaining animals
var totalAnimalsLeft = sheepLeft + goatsLeft + cowsLeft;

// Log this in the console
console.log(" Actual Amount Left: " + totalAnimalsLeft);

//Check to see if the user guessed right

if(totalAnimals != totalAnimalsLeft){

	console.log("Oh No! You guessed incorrectly!"); // if not tell them

	console.log("The total number of animals left at the party is : " + totalAnimalsLeft); // and tell them the real total

}else{


	console.log("Great Job! You guessed correctly!"); // if they did guess right let them know

	console.log("The total number of animals left at the party is : " + totalAnimalsLeft); // and tell them the total
}
