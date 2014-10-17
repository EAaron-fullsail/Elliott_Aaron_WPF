var likesCheese = false;

var likesMeat = false;

var likesBread = false;

var answers = [];

answers[0] = "yes";

answers[1] = "no";

answers[2] = "maybe";

var question = [];

question[0] = prompt("Do you like cheese?\n Type yes, no, or maybe");

question[0] = question[0].substr(0, question[0].length);

console.log(question[0]);
	if(question[0] == answers[0]){

	likesCheese  = true;

	}else if(question[0] == answers[1]){

		console.log("You really dont like cheese?");

	}else{

		console.log("You Should try it!");

	}

	console.log(likesCheese)

question[1] = prompt("Do you like cow meat?\n Type yes, no, or maybe");

question[1] = question[1].substr(0, question[1].length);

console.log(question[1]);

	if(question[1] == answers[0]){

		likesMeat  = true;

	}else if(question[1] == answers[1]){

		console.log("You really dont like cow?");

	}else{

		console.log("You Should try it!");
	}
		console.log(likesMeat)

question[2] = prompt("Do you like Bread?\n Type yes, no, or maybe");

question[2] = question[2].substr(0, question[2].length);

console.log(question[2]);

	if(question[2] == answers[0]){

		likesBread  = true;

	}else if(question[2] == answers[1]){

		console.log("You really dont like Bread?");

	}else{

		console.log("You Should try it!");

	}

	console.log(likesBread)


if(likesCheese == true && likesBread == true && likesMeat == true){
	console.log("You and I can be fiends");
}else{
	console.log("I cant be seen with you.. Sorry");
}



for(i=0;i<question.length; i++){

	question[i];

}



