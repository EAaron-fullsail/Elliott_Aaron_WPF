/*
<!--
	Aaron Elliott
	WPF 1409 Section 02
	Conditional Personal 
	10-16-2014
-->
*/



var first = prompt("Doy you like Paintball?\n type yes or no only please"); // get the first input 

first = first.substr(0, first.length); // get the string 

 
if (first == "no"){ // if the user says no 

	console.log("Sorry this isn't for you"); // print this message 


}else if(first == "yes"){ // if they say yes 

	console.log("Great! Me too"); // print this message 
	
	var simi = 1; // set simi = 1 
	
	var ramping = 15; // set ramping = 15
	
	console.log("Let's see how fast you shoot!"); // let the user know what's going on
	
	console.log("alternate tapping your index and middle finger as many times as you can for 15seconds"); // tell the user what to do 
	
	var taps = parseInt(prompt("How many taps did you get? \n just type the number please")); // get their input 

	var tapTypes = []; // array for comp types 

	tapTypes[0] = 10; // array element
	
	tapTypes[1] = 30;// array element
	
	tapTypes[2] = 50;// array element


	if(taps <= tapTypes[0]){ // if they tap less than 10 times 
	
		console.log(taps + " bps is pretty good! Keep practicing though"); // print this mmessage 
	
	}else if(taps > tapTypes[0] && taps < tapTypes[1]){ // if they tap more than 10 and less than 30 
	
		console.log(taps + " bps is pretty good! Keep practicing though"); // print this message 

	}else if(taps > tapTypes[1] && taps < tapTypes[2]){// if they tap more than 30 and less that 50 
	
		console.log(taps + " bps Is Really good! Keep it up!");// print this message 
	
	}else if(taps >= tapTypes[2] ){ // if they tap more than 50 
	
		console.log(" You're off the scale you're so good"); // print this message 
	
	}

	var bps = taps * simi / 15; // calc balls per second 
	
	var ramping = ramping * taps / 15; // calc balls per second  with ramping 
	
	console.log("you can shoot "+ bps +" ball(s) a second without ramping, and " + ramping + " balls per second with ramping"); // print results 
	


}else{

	console.log("You entered in the wrong answer type");

}