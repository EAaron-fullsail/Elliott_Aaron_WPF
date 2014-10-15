var grade = parseInt(prompt("What is your percentage in class?"));

var gradeScale = [];

gradeScale[0] = 90;
gradeScale[1] = 80;
gradeScale[2] = 70;
gradeScale[3] = 60;
gradeScale[4] = 50;

var letterGrade = [];

letterGrade[0] = "A";
letterGrade[1] = "B";
letterGrade[2] = "C";
letterGrade[3] = "D";
letterGrade[4] = "F";

if (grade >= gradeScale[0] ){
	console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[0]+" in the class!");
} else if (grade >= gradeScale[1] && grade < gradeScale[0]){
		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[1]+" in the class!");
}else if (grade >= gradeScale[2] && grade < gradeScale[1]){
		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[2]+" in the class!");
}else if (grade >= gradeScale[3] && grade < gradeScale[2]){
		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[3]+" in the class!");
}else if (grade >= gradeScale[4] && grade < gradeScale[3]){
		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[4]+" in the class!");
}else if (grade <= gradeScale[4] ){
		console.log("You have a "+grade+"%, which means you have earned a(n) "+letterGrade[4]+" in the class!");
}