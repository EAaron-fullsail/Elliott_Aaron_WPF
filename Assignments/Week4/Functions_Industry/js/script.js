	//find the alloted space for a user
	(function(){ // anon function d      

		var hasCalled
		var hasFinished;

		//A ternary
		

		var images = [];

		images[0] = {"n": "dog", "url": "images/Dog.jpg", "idn": "1"} 

		images[1] = {"n": "Banner", "url": "images/Banner.jph", "idn": "2"} 

		images[2] = {"n": "Bubble", "url": "images/Buble.jpg", "idn": "3"} 

		var totalImages = images.length,
		totalAllowedImages = 32,
		message = "You have used " + Math.round(totalImages / totalAllowedImages * 10) /10 + " of your alloted space",
		i,
		getLoc = function(i){
			i == totalImages ? hasFinished = false : hasFinished = true;
			return hasFinished
		}

		//a function with three params
		function listImages(list, called, finished){
			hasCalled = true;
			console.log("Getting List Items")
			//one logical operator
				for(i=0; i<totalImages; i++){
					getLoc(i);
					console.log("Getting new image");
					console.log("Image id: " +images[i].idn+ "  " + "Name : " +images[i].n+ "  " + " location: " + images[i].url );

				}
				
			if(i > totalImages){ //does nothing
			
			//do nothing
			
			}else if(hasFinished = true){
			
					console.log(message);
			
				}
			
			}//end listh Images


	listImages(images, hasCalled, hasFinished);


	})();