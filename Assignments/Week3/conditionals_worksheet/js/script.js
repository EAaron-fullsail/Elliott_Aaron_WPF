//Celsius to Fahrenheit converter

//set variable for celsius

var celsius;

//set variable for Fahrenheit

var farhrenheit;

var givensC = [];  // Array of acceptable Celsius Inputs

givensC[0] = "c";
givensC[1] = "C";
givensC[2] = "Cel";
givensC[3] = "Celsius";
givensC[4] = "cel";
givensC[5] = "celsius";


var givensF = [];  // Array of acceptable Farhrenheit Inputs

givensF[0] = "f";
givensF[1] = "F";
givensF[2] = "Far";
givensF[3] = "Farhrenheit";
givensF[4] = "far";
givensF[5] = "farhrenheit";



//var input = prompt("Enter in the temp in Far or Celsius");//get user input

var result = input; // load input in varaiable

var integer = parseInt(input);// extract the number

var integer = integer.toString(); // convert number to string


var string = input.substr(integer.length, result.length); // find the place the number ends and get unit of measurement

string = string.split(' ').join(''); // remove the white spaces

//Function to check if user is converting from far to cel
function checkForFar(){

	//Loop through all of the acceptable inputs
	for(var i=0; i<givensF.length; i++){

		//console.log(givensF[i]);

		if(string == givensF[i]){ // if input is equal to acceptable UOM 

			//console.log("User entered : " + givensF[i] );

			farhrenheit = true; // the user is converting from Far to Cel

			//console.log(farhrenheit);

		}else{

			//console.log("Did not enter : " + givensF[i]);	

			//Do nothing		
		}

	}// If the user entered in Far then we run the far to cel calculation

	if(farhrenheit == true){ 

		//console.log("do Celsius calc");

		var calc = (integer - 32) * 5/9; // convert far to cel

		calc = Math.round(100 * calc)/100;// round answer

		console.log("The temperature is " + calc + " degrees Celsius.");//print results

	}else{

		//If the user did not enter a Far UOM

		function checkForCel(){

			//Loop through all of the acceptable Cel inputs

			for(var i=0; i<givensC.length; i++){

				//console.log(givensC[i]);

				if(string == givensC[i]){ // if one of the inputs is a match

					//console.log("User entered : " + givensC[i] );

					celsius = true; // set celsius to true

				}else{

					//console.log("Did not enter : " + givensC[i]);			

					//Do nothing

				}

			}if(celsius == true){ // if celsius is = to true

				//console.log("do Farhrenheit calc");

				var calc = (integer * 9/5 ) + 32 ; // convert celsius to Far

				calc = Math.round(100 * calc)/100;// round answer

				console.log("The temperature is " + calc + " degrees Farhrenheit."); // print result

			}else{

				console.log("Enter an Approraite unit of measurement\n"+"type f or c after the number!"); // The user did not enter an acceptable input

			}

		}

		checkForCel(); // call checkForCel() method

	}

}

checkForFar(); // call checkForFar() method
