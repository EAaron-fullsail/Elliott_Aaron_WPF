var user = {"Name": "Aaron", "Pass": "Apples1234"}; // user information


getName = prompt("Enter your Username"); // get username

getName = getName.substr(0, getName.length);// exract username string

getPass = prompt("Enter Your Password"); // get password

getPass = getPass.substr(0, getPass.length); // 

console.log(getPass);

if (getName == user.Name && getPass == user.Pass){

	console.log("Welcome, " + user.Name);

}else if (getName == user.Name && getPass != user.Pass ){

	console.log("Password does not match our records");

}else{

	console.log("User not found. Try again.");

}