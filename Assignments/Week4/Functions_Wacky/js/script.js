/*
<!--
	Aaron Elliott
	WPF 1409 Section 02
	Functions Wacky 
	10-23-2014
-->
*/

	(function(){ // anon function

		var weasels = []; //array for the weasels

		weasels[0]={"n": "Bob", "hungry": "yes"} // array value one
		weasels[1]={"n": "Steve", "hungry": "yes"} // two
		weasels[2]={"n": "Danny", "hungry": "no"} //three

		var a = 0; // varaible for total hungry
		//a function with three params

		function countTheWeasels(a, w){//function to find the weasels who are hung

			for(var i = 0; i<weasels.length; i++){ // loop to cycle through the array of objects
				//Turnary to see which ones are hungry
				weasels[i].hungry === "yes" ? console.log(weasels[i].n + " the weasel is Hungry") : console.log(weasels[i].n + " weasel is is Napping") ;	//A ternary 

				//if the weasel is hungry
				if(weasels[i].hungry == "yes"){	//one logical operator
					a++;//inc the hungry counter
		
				}else if(weasels[i].hungry == "no"){	// else if
					a--;//dec the hungry counter
			
				}//else end

			}//for end 

			console.log("You have "+ a + " hungry weasel(s)!"); // log the number of hungry weasels
			var totalPercHungry = "You have " + Math.round(a / weasels.length * 100) + "% of you weasels who are hungry";// print out percentage of hungry weasels
			console.log(totalPercHungry);//log that message

		}
		//Expression with two arithmetic operators

		countTheWeasels(a, weasels);//call the function



	})();