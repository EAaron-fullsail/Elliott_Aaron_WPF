var spp = 8.666666667;
var animals = [];

animals[0] = {"n": "Bear", "weight": "600lbs"};

animals[1] = {"n": "Otter", "weight": "15lbs"};

animals[2] = {"n": "Duck", "weight": "10lbs"};


function deathByStings(){
	for(i=0; i<animals.length; i++){
		var death = parseInt(animals[i].weight) * spp;
		death = Math.round(100*death) / 100;

		console.log("It would take " + death + " bee stings to kill a " +animals[i].weight+ " "+ animals[i].n);
	}
}



deathByStings();
