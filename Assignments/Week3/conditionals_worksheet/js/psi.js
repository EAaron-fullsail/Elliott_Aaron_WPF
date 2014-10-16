var tirePSI = []; // array for the four tires 

//list of four tire pressure 
tirePSI[0] = 32;

tirePSI[1] = 32;

tirePSI[2] = 32;

tirePSI[3] = 35;

// 
tirePSI[0] = {"N": "Back Left ", "Psi": tirePSI[0]}; // array item as object 

tirePSI[1] = {"N": "Back Right ", "Psi": tirePSI[1]};// array item as object 

tirePSI[2] = {"N": "Front Right ", "Psi": tirePSI[2]};// array item as object 

tirePSI[3] = {"N": "Front Left ", "Psi": tirePSI[3]};// array item as object 

// Presure needed in each tire 
var pressurePerTire = 32;


// Loop to check tire pressure 
for(i=0; i<tirePSI.length; i++){

	if(tirePSI[i].Psi != pressurePerTire){ // if one of the tires is not the same psi as desired 

		var pressureOff = true; // set the pressure boolean as true 

		console.log("UH OH! It looks like one or more of your tires is not at the prefered pressure"); // Alert the user 

		console.log("Lets see which one(s)!"); // let them know what is happening next 

		console.log("Preferred Psi in each tire: " + pressurePerTire + "psi\n"); // tell them the desired psi for each tire 

		for(i=0; i<tirePSI.length; i++){ // loop that lists out the current tire pressure in each tire 

			console.log(tirePSI[i].N + tirePSI[i].Psi + "psi");

		}

		for(i=0; i<tirePSI.length; i++){ // loop to find which tire is low or high 

			if(tirePSI[i].Psi < pressurePerTire ){ // if a tire is low

				console.log("It looks like the " + tirePSI[i].N + "tire is low"); // print this message 

			}else if(tirePSI[i].Psi > pressurePerTire ){ // if a tire is over inflated 

				console.log("It looks like the pressure in the " + tirePSI[i].N + "tire is high"); // print this message 

			}

		}

	}

}
if(pressureOff == true){ // if the pressureOff = ture 
	// do nothing 
}	
else{ // if it is false 
	console.log("You're tire pressure looks great!"); // print everything is okay
}