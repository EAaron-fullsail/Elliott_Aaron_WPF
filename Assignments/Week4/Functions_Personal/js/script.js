	(function(){ // anon function

		var hos = 56, // hours of sleep I should get a week
		mhos = 35, // average weekly hours of sleep I get
		phos = 45; // what I would at least prefer to get 
  

		function calcHours(h, m, p){	//a function with three params

			m > h ? console.log( "Getting enough sleep")  : console.log( "Not getting enough sleep")  ;
			if(mhos < hos){	//one logical operator
				var calc = h - m;
				var perc = Math.round(calc / m * 10) * 10; //Expression with two arithmetic operators
				console.log("You need to be getting " + calc + " more hours of sleep a week" );
				console.log("You are averaging " + perc + "% of the needed hours of sleep weekly");
				console.log("Try shooting for " + p + " hours of sleep weekly");
			} else if(mhos > hos){// else if
				console.log("Doing just fine!");
			}
			return hos, mhos, phos;
		}

		console.log("hours of sleep you need : " + hos + "\n" + "hours of sleep you're getting : " + mhos + "\n" + "min hours you should be getting a week : " + phos + "\n");
		calcHours(hos,mhos,phos);

	})();