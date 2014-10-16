var date = new Date(); // get time 

var time = date.getHours(); // get just the hours

//var time = 4;

var halfDay = 12; // used to calculate pm and am

var hStart = 5; // start time for happy hour

var hEnd = 6;// end time for happy hour

var moviePrices = []; // array of movie prices

moviePrices[0] = 15; // most expensive price

moviePrices[1] =  7; // discountd price

var age = prompt("how old are you?"); // get users age

var ageFD = 55; // age for discount

var timeDiscount = false; // varaible for time discount

var ageDiscount = false; // variable for age discount 

if(time > halfDay ){ // check to see if it after noon

	time = time - 12; // get the time if it's after noon

	if(time >= hStart && time <= hEnd){ // check to see if it's between 5 and 6

		console.log("Eligible for time discount"); // log that the person is elegible for time discount

		timeDiscount = true; // set time discount to true 

	}else{ // if it is not happy hour

		console.log("not Eligible for time discount"); // log that the person is not elegible for time discount

		timeDiscount = false; // keep time Discount = false

	}

}else{ // if it is before happy hour

		console.log("not Eligible for time discount");// log that the person is not elegible for time discount

		timeDiscount = false;// keep time Discount = false
}

if( age > ageFD){ // check to see if person is elegible for age discount

		console.log("Eligible for Age discount"); // log that they are old enough

		ageDiscount = true; // set age varaible to true

}else{ // if they aren't old enough

		console.log("not Eligible for Age discount"); // log that they do not get the discount

		ageDiscount = false; // set age varaible to false

}

if( ageDiscount == true && timeDiscount == true ){ // if they are able to recieve both discounts

	console.log("The ticket price is $" + moviePrices[1]); // set the movie price to $7

}else if(ageDiscount == true && timeDiscount == false ){// if they are able to recieve age discount

	console.log("The ticket price is $" + moviePrices[1]); // set the movie price to $7

}else if(ageDiscount == false && timeDiscount == true ){// if they are able to recieve time discount

	console.log("The ticket price is $" + moviePrices[1]); // set the movie price to $7

}else{// if they dont recieve a discount

	console.log("The ticket price is $" + moviePrices[0]);// set the movie price to $15

}

