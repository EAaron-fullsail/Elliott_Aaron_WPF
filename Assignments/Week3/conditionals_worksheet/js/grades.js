var grade = parseInt(prompt("What is your grade percentage in class?"));// get user's grade 

var gradeScale = []; // create array for grading scale

//list of possible grades
gradeScale[0] = 90; 
gradeScale[1] = 80;
gradeScale[2] = 70;
gradeScale[3] = 60;
gradeScale[4] = 50;

var letterGrade = [];// array for letter grades 

// list of letter grades
letterGrade[0] = "A";
letterGrade[1] = "B";
letterGrade[2] = "C";
letterGrade[3] = "D";
letterGrade[4] = "F";

//if the user has 90 or above
if (grade >= gradeScale[0] ){

	
	console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[0]+" in the class!"); // print this message

} else if (grade >= gradeScale[1] && grade < gradeScale[0]){//if the user has 80 to 90
	
		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[1]+" in the class!");// print this message

}else if (grade >= gradeScale[2] && grade < gradeScale[1]){//if the user has 70 to 80

		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[2]+" in the class!");// print this message

}else if (grade >= gradeScale[3] && grade < gradeScale[2]){//if the user has 60 to 70

		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[3]+" in the class!");// print this message

}else if (grade >= gradeScale[4] && grade < gradeScale[3]){//if the user has 50 to 60

		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[4]+" in the class!");// print this message

}else if (grade <= gradeScale[4] ){//if the user has less than 50

		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[4]+" in the class!");// print this message

	}