/*
<!--
	Aaron Elliott
	WPF 1409 Section 02
	Functions Industry 
	10-23-2014
-->
*/	


	//find the alloted space for a user
	(function(){ // anon function d      

		var hasCalled //set variable to see if function has ran
		var hasFinished;// set variable to see if functio has finished

		//A ternary
		

		var images = []; //array for images

		images[0] = {"n": "dog", "url": "images/Dog.jpg", "idn": "1"}  // object 1 

		images[1] = {"n": "Banner", "url": "images/Banner.jph", "idn": "2"} //object 2

		images[2] = {"n": "Bubble", "url": "images/Buble.jpg", "idn": "3"} //object 3

		var totalImages = images.length, //calc total items in array

		totalAllowedImages = 32,//set vaiable for total items allotted
		
		message = "You have used " + Math.round(totalImages / totalAllowedImages * 10) /10 + " of your alloted space",// set a variable with a string message

		i,//variable for i
		
		getLoc = function(i){ // function with a turnary
		
			i == totalImages ? hasFinished = false : hasFinished = true; // turnary to check if function has finished
		
			return hasFinished; // return this 
		}

		//a function with three params
		function listImages(list, called, finished){
			hasCalled = true; // set that the function has been called

			console.log("Getting List Items");// log this happening
			
			//one logical operator
				for(i=0; i<totalImages; i++){ // loop to get images
					
					getLoc(i); // call the getLog method
					
					console.log("Getting new image"); // log that it is doing work
					
					console.log("Image id: " +images[i].idn+ "  " + "Name : " +images[i].n+ "  " + " location: " + images[i].url );// print the result

				}
				
			if(i > totalImages){ //does nothing
			
			//do nothing
			
			}else if(hasFinished = true){ // check to see if the function is finished
			
					console.log(message); // if so print the message defined earlier
			
				}
			
			}//end listh Images


	listImages(images, hasCalled, hasFinished); // call the list method


	})();