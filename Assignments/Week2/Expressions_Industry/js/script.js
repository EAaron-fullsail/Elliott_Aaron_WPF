/*
	Aaron Elliott
	WPF 1409 Section 02
	Expressions industry 
	9-9-2014
*/

var doc = document;
var message = doc.createElement("li");
var target = doc.getElementById("DOM_Target");


// Arry that holds values for mhz and ghz information for hz
var speeds = [];
speeds[0] = 1000000;
speeds[1] = 1000000000;

//Array that holds values for type hz Unit of Measurement 
var hz = [];
hz[0] = "Mhz";
hz[1] = "Ghz";

//Array that holds the value for the two processor selections
var processors = [];
processors[0] = 64;
processors[1] = 32;


var byteUnits = 8; // Unit used to calculate speed for bytes
var mByteUnits = 8000000; // Unit used to Calculate speed for mBytes
var gByteUnites = 1000000000; // Unit used to calculate speed for gBytes
//Welecome alert
alert("Lets Calulate how many bits your processor can transfer in a minute!");

//Ask user for information about their processor
var bitPrompt = parseInt(prompt("Is your processor 64bits or 32bits? \n Only type 64 or 32"));

console.log('You have a ' + bitPrompt + 'Processor'); // Log response to console

//Check to see if they provided a valid answer
if( bitPrompt == processors[0] || bitPrompt == processors[1]){

	//Get the processors clock speed unit of measurement
	var hrzMessage = prompt("Is the Clock speed represented in Ghz or Mhz?\nType 'Ghz' or 'Mhz'(Case Sensitve)");

	// Check to see if that input is in mhz 
	if(hrzMessage == hz[0]){ // yes?

		//Ask for the numarical value 
		var howMany = parseInt(prompt("What is the numerical value for the clock speed in" + hrzMessage + "? \n Just type the number please."));

		var totatBits = bitPrompt * (howMany * speeds[0]); // calulate the total bits per second

		console.log(totatBits);
		
		var totalBytes = parseInt(totatBits) / byteUnits; // calculate the total bytes per second

		var totalMBytes = parseInt(totatBits) / mByteUnits ;// calculate the total mBytes per second

		var totalGBytes =  parseInt(totatBits) / gByteUnites ; // calculte the total gBytes per second 

		//Print the totals to the user 
		var newMessage = "Your Computer can process " + totatBits +  " bits per second, " + totalBytes  +  "bytes per second," + totalMBytes + "Megabytes per second, and "   + totalGBytes + " Gigabytes per second.";
	 	
	 	console.log(newMessage);

		//load asnwer into a node
		var outPut = doc.createTextNode(newMessage);
		
		//append that node to the message element
		message.appendChild(outPut);

		//append the message element to the 
		target.appendChild(message);



	}else if(hrzMessage == hz[1]){ // did the user enter ghz? 

		//if Yes
		//Ask for the numarical value 
		var howMany = parseInt(prompt("What is the numerical value for the clock speed in" + hrzMessage + "? \n Just type the number please."));

		var totatBits = bitPrompt * (howMany * speeds[1]); // calulate the total bits per second

		console.log(totatBits);
		
		var totalBytes = parseInt(totatBits) / byteUnits; // calculate the total bytes per second

		var totalMBytes = parseInt(totatBits) / mByteUnits ;// calculate the total mBytes per second

		var totalGBytes =  parseInt(totatBits) / gByteUnites ; // calculte the total gBytes per second 

		//Print the totals to the user 
		var newMessage = "Your Computer can process " + totatBits +  " bits per second, " + totalBytes  +  "bytes per second," + totalMBytes + "Megabytes per second, and"   + totalGBytes + "total Gigabytes per second.";
	 	
	 	console.log(newMessage);

		//load asnwer into a node
		var outPut = doc.createTextNode(newMessage);
		
		//append that node to the message element
		message.appendChild(outPut);

		//append the message element to the 
		target.appendChild(message);
	}else{ // Something went wrong

		//Print Error Message 
		alert("Sorry there was a problem \n Press okay to reload the page")
		location.reload(); // Reload the page 
		
	}

}else{ // Something went wrong

		//Print Error Message 
		alert("Sorry there was a problem \n Press okay to reload the page")
		location.reload(); // Reload the page 
		
}


