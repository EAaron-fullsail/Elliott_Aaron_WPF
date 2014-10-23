/*
<!--
	Aaron Elliott
	WPF 1409 Section 02
	Conditional Wacky 
	10-16-2014
-->

*/


var likesCheese = false; // set variable to false

var likesMeat = false;// set variable to false

var likesBread = false;// set variable to false

var answers = []; // create array 

answers[0] = "yes"; // assign the array a value 

answers[1] = "no"; // assign the array a value 

answers[2] = "maybe";// assign the array a value 

var question = []; // create array 

question[0] = prompt("Do you like cheese?\n Type yes, no, or maybe"); // prompt the user
 
question[0] = question[0].substr(0, question[0].length); // get the string the user entered 

console.log(question[0]); // log this 
	if(question[0] == answers[0]){ // if the answer is yes

	likesCheese  = true; // change variabe to true 

	}else if(question[0] == answers[1]){ // if it is no

		console.log("You really dont like cheese?"); // log this message 

	}else{ // if it is anything else 

		console.log("You Should try it!"); // log this message 

	}

	console.log(likesCheese); // log 

question[1] = prompt("Do you like cow meat?\n Type yes, no, or maybe"); // prompt the user

question[1] = question[1].substr(0, question[1].length);// get the string the user entered 

console.log(question[1]);// log 

	if(question[1] == answers[0]){ // if the answer is yes

		likesMeat  = true;// change variabe to true 

	}else if(question[1] == answers[1]){// if it is no

		console.log("You really dont like cow?"); // log this message 

	}else{ // if it is anything else 

		console.log("You Should try it!"); // log this message 
	}
		console.log(likesMeat); // log 

question[2] = prompt("Do you like Bread?\n Type yes, no, or maybe"); // prompt the user 

question[2] = question[2].substr(0, question[2].length); // get the string 

	if(question[2] == answers[0]){ // if it is yes 

		likesBread  = true; // change this to true 

	}else if(question[2] == answers[1]){ // if it is no

		console.log("You really dont like Bread?"); // log this message 

	}else{ // if it is anything else

		console.log("You Should try it!"); // log this message 

	}

	console.log(likesBread)


if(likesCheese == true && likesBread == true && likesMeat == true){ // if all three are true 
	console.log("You and I can be fiends"); // log this message 
}else{
	console.log("I cant be seen with you.. Sorry"); // anything else log this messge 
}



for(i=0;i<question.length; i++){ // loop through get the questions 

	question[i];

}



