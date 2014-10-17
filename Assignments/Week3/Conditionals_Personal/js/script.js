



var first = prompt("Doy you like Paintball?\n type yes or no only please");

first = first.substr(0, first.length);


if (first == "no"){

	console.log("Sorry this isn't for you");


}else if(first == "yes"){
	console.log("Great! Me too");
	
	var simi = 1;
	
	var ramping = 15;
	
	console.log("Let's see how fast you shoot!");
	
	console.log("alternate tapping your index and middle finger as many times as you can for 15seconds");
	
	var taps = parseInt(prompt("How many taps did you get? \n just type the number please"));

	var tapTypes = [];

	tapTypes[0] = 10;
	
	tapTypes[1] = 30;
	
	tapTypes[2] = 50;


	if(taps <= tapTypes[0]){
	
		console.log(taps + " bps is pretty good! Keep practicing though");
	
	}else if(taps > tapTypes[0] && taps < tapTypes[1]){
	
		console.log(taps + " bps is pretty good! Keep practicing though");
	}
	
	else if(taps > tapTypes[1] && taps < tapTypes[2]){
	
		console.log(taps + " bps Is Really good! Keep it up!");
	
	}else if(taps >= tapTypes[2] ){
	
		console.log(" You're off the scale you're so good");
	
	}

	var bps = taps * simi / 15; 
	
	var ramping = ramping * taps / 15; 
	
	console.log("you can shoot "+ bps +" ball(s) a second without ramping, and " + ramping + " balls per second with ramping");
	


}else{

	console.log("You entered in the wrong answer type");

}