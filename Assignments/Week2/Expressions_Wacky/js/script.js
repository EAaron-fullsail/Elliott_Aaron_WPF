/*
	Aaron Elliott
	WPF 1409 Section 02
	Expression Wacky
	9-8-2014
*/


var animals = [];
animals[0] = 12;
animals[1] = 6;
animals[2] = 24;


alert("Welcome to the animal party!");
alert("We have" + animals[0] + " sheep, " +animals[1]+ " goats, and " + animals[2] + " cows at the party");

var sendHomeCows = parseInt(prompt(" Uh oh! the cows are chewing on the sofa! \n you decide it's time for some of the cows to go home! \n how many cows would you like to send home?"));
	if( animals[2] < sendHomeCows){
		console.log("Oh No! You can't send home more cows home than there are here at the house!");
	}
var cowsLeft = animals[2] - sendHomeCows;

console.log(cowsLeft + " Cow(s) still at the Party");

var sendHomeGoats = parseInt(prompt(" Uh oh! Now the goats are jumping on the bed! \n you decide it's time for some of the goats to go home! \n how many goats would you like to send home?"));

	if( animals[1] < sendHomeGoats){

		console.log("Oh No! You can't send home more goats home than there are here at the house!");

	}

var goatsLeft = animals[1] - sendHomeGoats;

console.log(goatsLeft + " Goat(s)  still at the Party");

var sendHomeSheep = parseInt(prompt(" Uh oh! Now the sheep are getting their wool everywhere! \n you decide it's time for some of the sheep to go home! \n how many sheep would you like to send home?"));

	if( animals[0] < sendHomeSheep){

		console.log("Oh No! You can't send home more sheep home than there are here at the house!");

	}

var sheepLeft = animals[0] - sendHomeSheep;

console.log(sheepLeft + " Sheep still at the Party");

var totalAnimals = parseInt(prompt("How Many animals are left at the party? \n 'only type a number'"));

console.log(" You Guessed : " + totalAnimals);

var totalAnimalsLeft = sheepLeft + goatsLeft + cowsLeft;

console.log(" Actual Amount Left: " + totalAnimalsLeft);

if(totalAnimals != totalAnimalsLeft){

	console.log("Oh No! You guessed incorrectly!");

	console.log("The total number of animals left at the party is : " + totalAnimalsLeft);

}else{


	console.log("Great Job! You guessed correctly!");

	console.log("The total number of animals left at the party is : " + totalAnimalsLeft);
}
