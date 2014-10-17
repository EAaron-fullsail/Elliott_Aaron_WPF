// answer
		var doc = document;

		var questions = []; // questions array
		
		//Object with question elements
		questions[0] ={"Q": "What would a for loop if it's conditions were set to (i=0; i<4; i++)?", "a1": "nothing at all", "a2": "run 5 times before stopping", "a3": "there is no such thing as a for loop in javascript", "a4": "pancakes", "ca": "run 5 times before stopping","n": "1"};

		//Object with question elements
		questions[1] = {"Q": "A ___________ is used to store a value?", "a1": "variable", "a2": "bucket", "a3": "whats a value?", "a4": "a loop", "ca": "variable","n": "2"};

		//Object with question elements
		questions[2]= {"Q": "Why would you want to use git?", "a1": "organization", "a2": "you don't want to be known as a 'cowboy coder' ", "a3": "you never loose the code you've written", "a4": "all of the above", "ca": "all of the above","n": "3"};


		var q = 0; // question counter 
		
		var answerList = doc.getElementsByTagName('ul')[0];// DOM element for possible answers

		var correctAnswers = 0; // correct answer counter
		
		var wrongAnswers = 0; // worng answer counter
		
		var possibleAnswers  =  Object.keys(questions[q]).length - 4; // calculate the possible answers per question
		
		var totalAnswers = 0; // total answers given by user 

		var endQuiz = false; // varaible to tell when quiz is finished

		
	// Function to load a new question
	function getQuestion(){

			//if the user has answered all three questions
			if (totalAnswers == 3){

				endQuiz = true; // set the endQuiz varaiable to true 

				console.log("you finished the quiz"); // log this event 

				var quizBody = doc.getElementsByTagName('ul')[0]; // target a DOM element

				//replace the html with this string 
				quizBody.innerHTML = ("<p>You Finished the quiz</p>\n <p>You got "+correctAnswers+" questions correct!</p> \n <p>You missed "+wrongAnswers+" questions.</p>");

				// if the user did not answer all the questions correctly

				if(endQuiz == true && correctAnswers != 3){
				
				console.log("You Failed"); // they fail
				
				var readout = doc.createElement("p"); // create a html element

				var results = doc.createTextNode("You Failed!"); // create a text node

				quizBody.appendChild(results); // append this to the quizbody

				}else if(endQuiz == true && correctAnswers == 3){ // if the user did answer all of the questions correctly
			
				console.log("You Passed");// they passed
				
				var readout = doc.createElement("p"); // do the same as before 

				var results = doc.createTextNode("You Passed!");// do the same as before 

				quizBody.appendChild(results);// do the same as before 
				}else{
					//Do nothing
				}
			}else{

			a = []; // array to hold all of the possible answers 

			a[0] = questions[q].a1;// answer

			a[1] = questions[q].a2;// answer
			
			a[2] = questions[q].a3;// answer
			
			a[3] = questions[q].a4;// answer

	

			n = questions[q].n;// get the number for the question 

			var qNum = doc.getElementById("questionNumber");// target the dom

			qNum.innerHTML = "Question " + n + " / 3";//  add the new value


			var questionDiv = doc.getElementById("questionDiv"); // target the dom
			
			var question = doc.createElement("h1"); // create and h1 element for the question

			var questionTitle = doc.createTextNode(questions[q].Q); // add the questinon to a node
			
			question.appendChild(questionTitle); // append this node
			
			questionDiv.insertBefore(question, questionDiv.FirstChild); //insert it into the html
			
			console.log(questionTitle); // log 

			for (i = 0; i<=possibleAnswers; i++){ // for loop to list answers 
				
                var newAnswer = doc.createElement("li"); // create a new li element
                
                newAnswer.id = "answer"+i;// give it a custom id 
                
                newAnswer.addEventListener('click', checkAnswer, false);// add an event to each li

                var answer = doc.createTextNode(a[i]); // create a new text node 

				newAnswer.appendChild(answer); // append that text node
				
				answerList.insertBefore(newAnswer, answerList.firstChild);// insert it into the html



			}// end for loop



		}//end else 

}//end getQuestion()



if(endQuiz == false){	// if the quiz hasn't ended 

	getQuestion(q); // call the getQuestion Method

}else{

	//do nothing
}

//Function to check the users answer
function checkAnswer(id){ // pass in id vaule 

	id = this.id; // set id to the 

	var at = doc.getElementById(""+id+"").innerHTML; // get tje element with the same id as the one clicked


	console.log(at);

	var ca = questions[q].ca; // find the answer for the question


	if(at == ca){ // if they are the same

		console.log("Right Answer"); // log right answer

		correctAnswers++; // inc correct answers

		console.log(correctAnswers); // log that as well

		var newQuestion = doc.getElementById("questionDiv"); //get the question div 

		newQuestion.innerHTML = ""; // reset it's html

		var list = doc.getElementsByTagName('ul')[0]; // get the answers div 

		list.innerHTML = "";// reset the html

		q++; // inc the question counter 

		totalAnswers++; // inc the total answers counter 

		getQuestion(q); // reload the getQuestion method 

}else{ // if the answer was wrong 

		console.log("Wrong Answer"); // log that the answer was wrong 
 
		wrongAnswers++; // inc the wrong answers counter 

		console.log(wrongAnswers); // log this 

		var newQuestion = doc.getElementById("questionDiv"); // get the question div 

		newQuestion.innerHTML = ""; // resest it's html 

		var list = doc.getElementsByTagName('ul')[0]; // get the answers div
		
		list.innerHTML = ""; // reset the html

		q++;// inc the question counter 

		totalAnswers++; // inc the total answers counter 

		getQuestion(q); // re-call the getQuestion method
	
	}

}