/*
<!--
	Aaron Elliott
	WPF 1409 Section 02
	Functions Personal 
	10-23-2014
-->
*/



	(function(){ // anon function

		var hos = 56, // hours of sleep I should get a week
		mhos = 35, // average weekly hours of sleep I get
		phos = 45; // what I would at least prefer to get 
  

		function calcHours(h, m, p){	//a function with three params

			m > h ? console.log( "Getting enough sleep")  : console.log( "Not getting enough sleep")  ; //turnary to check if getting enough
			if(mhos < hos){	//one logical operator to start the process
				
				var calc = h - m; // subtract average from needed hours 

				var perc = Math.round(calc / m * 10) * 10; //Expression with two arithmetic operators
				
				console.log("You need to be getting " + calc + " more hours of sleep a week" ); // Log the first calc
				
				console.log("You are averaging " + perc + "% of the needed hours of sleep weekly"); // log the percentage
				
				console.log("Try shooting for " + p + " hours of sleep weekly"); // log phos variable
			} else if(mhos > hos){// else if

				console.log("Doing just fine!"); // the person is getting enough sleep
		
			}
		
			return hos, mhos, phos; // return the values
		}

		//log the return values
		
		console.log("hours of sleep you need : " + hos + "\n" + "hours of sleep you're getting : " + mhos + "\n" + "min hours you should be getting a week : " + phos + "\n");
		
		//call the function
		calcHours(hos,mhos,phos);


	})();