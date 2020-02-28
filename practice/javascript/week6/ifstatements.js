//If-Else Statments, AKA conditional statemnets
// if (condition) {}


if (false) {

    console.log("This code ran if the if statements was true.");
}

console.log("End of script");


var age = 14;

if (age >= 21) {
    console.log("Congratz, go get drunk");
}


var password = "123";

if(password == "123") {
    console.log ("welcome to your profile!");
}


var isSleeply = false;

if (isSleeply) {
    console.log ("go home and");
}

var test = "1000";
if (test == 1000) {
    console.log("test!");
}

//Type coercin: Forces a datatype to be another datatype.
// follow allow type coercin: == >= <= !=
//these do not allow type coercion: === >== <== !==
var sayHello;
if (sayHello) {
    console.log("hello");
}
else {
    console.log("goodbye");
}


//truthy and falsy values.
//if a variable is holding any of the following it will become a false boolean:
/*
list of most common falsys
Falsy
undefined
null
0
""
NaN
list of most common truthys
"0"
-1
*/
var checkIfTrue = "";
if (checkIfTrue) {
    console.log("the " + checkifTrue + " value is truthy");
} else {
    console.log("the " + checkIfTrue + " value is falsy");
}


//logical operators: &&,||,!
// && || !=
var firstBool = true;
var secondBool = false;
if (firstBool && secondBool) {
    console.log("true");
}