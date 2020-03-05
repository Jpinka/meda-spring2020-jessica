var myVar = "One Item";
var firstDay = "monday";
var secondDay = "tuesday";

// Array Syntax,  a collection of data that ios surrounded by square brackets.

var daysOfWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];


//requesting a specific value inside the array
//Use square brackets after calling the variable  with the array.
//Put the index number inside of square brackets
//Example myArray[7];


console.log(daysOfWeek[6]);

daysOfWeek[6] = "funday";

console.log(daysOfWeek[6]);

daysOfWeek[12] = "superday";

console.log(daysOfWeek);


//You can mix datatypes in an array.
//[100, true, "hello"];