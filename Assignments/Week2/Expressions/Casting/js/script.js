// Casting 

// Treat a string as a number value
var stringVar = "76";
var result = 7 + Number(stringVar);

console.log("String as Number : " + result);

var areaCode = 317;
var firstPart = 433;
var secondPart = 4554;

// Treat number values as strings

var phoneNo = "1" + "(" +  String(areaCode) + ")" + String(firstPart) + "-" + String(secondPart);

console.log("Area Code " + areaCode);
console.log("First Set of Numbers " + firstPart);
console.log("Second Set of Numbers " + secondPart);
console.log("All Together Now : " + phoneNo);