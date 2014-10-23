	//find the alloted space for a user
	(function(){ // anon function d      

		var hasCalled
		var hasFinished;

		//A ternary
		

		var images = [];

		images[0] = {"n": "Squirell", "url": "images/", "idn": "1"} 

		images[1] = {"n": "Banner", "url": "images/", "idn": "2"} 

		images[2] = {"n": "Bubble", "url": "images/", "idn": "3"} 

		var totalImages = images.length,
		totalAllowedImages = 32,
		message = "You have used " + Math.round(totalImages / totalAllowedImages * 10) /10 + " of your alloted space",
		i,
		getLoc = function(){


			
			for(i=0; i<=totalImages; i++){
				
				//console.log("Getting new image");
				//console.log("Image id: " +images[i].idn+ "  " + "Name : " +images[i].n+ "  " + " location: " + images[i].url );
				i == totalImages ? hasFinished = false : hasFinished = true;
				return hasFinished
				}
		}

		
		//a function with three params
		function listImages(list, called, finished){
			hasCalled = true;
			console.log("Getting Data");

			if(i<totalImages){
			//one logical operator
				getLoc();

			}else if(hasFinished = true){
					console.log(message);
				}


			}


	listImages(images, hasCalled, hasFinished);


	})();