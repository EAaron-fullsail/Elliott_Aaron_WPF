/*
	Aaron Elliott
	WPF 1409 Section 02
	Expressions industry 
	9-9-2014
*/

var doc = document;
var message = doc.createElement("li");
var target = doc.getElementById("DOM_Target");


// Arry that holds all information for hz
var speeds = [];
speeds[0] = 1000000;
speeds[1] = 1000000000;

//Array that holds information for type hz Unit of Measurement 
var hz = [];
hz[0] = "Mhz";
hz[1] = "Ghz";

var processors = [];
processors[0] = 64;
processors[1] = 32;

//Welecome alert
alert("Lets Calulate how many bits your processor can transfer in a minute!");

//Get input from user 
var bitPrompt = parseInt(prompt("Is your processor 64bits or 32bits?"));

if( bitPrompt == processors[0] || bitPrompt == processors[1]){

	//Get Input from user 
	var hrzMessage = prompt("Is the Clock speed represented in Ghz or Mhz?\nType 'Ghz' or 'Mhz'(Case Sensitve)");

	// Check to see if that input is = mhz 
	if(hrzMessage == hz[0]){ // yes?

		var howMany = parseInt(prompt("How many " + hrzMessage + " is it? \n Just type the number please."));

		var totatBits = bitPrompt * (howMany * speeds[1]);

		var totalBytes = parseInt(totatBits) / 8;

		var totalMBytes = parseInt(totatBits) / 8000000 ;

		var totalGBytes =  parseInt(totatBits) / 1000000000 ;

		var newMessage = "Your Computer can process " + totatBits +  " bits per second, " + totalBytes  +  "bytes per second," + totalMBytes + "Megabytes per second, and"   + totalGBytes + "total Gigabytes per second.";
	 
		//load asnwer into a node
		var outPut = doc.createTextNode(newMessage);
		
		message.appendChild(outPut);

		target.appendChild(message);

		console.log(totatBits);

	}else if(hrzMessage == hz[1]){

		var howMany = parseInt(prompt("How many " + hrzMessage + " is it? \n Just type the number please."));

		var totatBits = bitPrompt * (howMany * speeds[1]);

		var totalBytes = parseInt(totatBits) / 8;

		var totalMBytes = parseInt(totatBits) / 8000000 ;

		var totalGBytes =  parseInt(totatBits) / 1000000000 ;

		var newMessage = "Your Computer can process " + totatBits +  " bits per second, " + totalBytes  +  "bytes per second," + totalMBytes + "Megabytes per second, and"   + totalGBytes + "total Gigabytes per second.";
	 
		//load asnwer into a node
		var outPut = doc.createTextNode(newMessage);
		
		message.appendChild(outPut);

		target.appendChild(message);

		console.log(totatBits);
	}else{ // Something went wrong

		//Print Error Message 
		alert("Sorry there was a problem \n Press okay to reload the page")
		location.reload(); // Reload the page 
		
	}

}
else{ // Something went wrong

		//Print Error Message 
		alert("Sorry there was a problem \n Press okay to reload the page")
		location.reload(); // Reload the page 
		
	}


