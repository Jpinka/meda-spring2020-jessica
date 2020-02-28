// Intro to functions, in general
// We are passing data around (in these notes)

// Global variables can be used anywhere.

// Example of functions we have used so far.
// log is a function, console is a class.
console.log();

Math.round();
Math.floor();
Math.ceil();
Math.random();

// If you ever want to get the current time (in milliseconds since 1970)
var currentTime
var currentTime = Date.now()

// A method is a function that belongs to a class.

console.log (currentTime);
// A function that belongs to a class ("library") is called a "Method".
// A variable that belongs to a class ("Library") is called a "Property".

// WET code
console.log("Hello");
console.log("Hello");
console.log("Hello");

// The Syntax Strcture of a Function definition.
function nameOfFunction () {
    console.log("Hello");
    console.log("Hello");   
    console.log("Hello");

}

nameOfFunction();
nameOfFunction();
// Runs the above code, <console.log("Hello");> a total of 6 times

/*Similar to CSS Rulesets.

selector {
    property: value;
    property: value;
}
*/

nameOfFunction();

function catKitten() {
    console.log(100);
    console.log("Hello  Kitty");
    console.log(true);

}

dataTypePrinter();

function takeDataIn() {
    console.log();

}

// Arguments and Parameters.
// Arguements are the value you give to the functions

// "hello" is the argument
console.log("hello", 100, true);

// text is the prameter (variable) that will accept any data that is given to this function.

function takeDataIn(text){

    console.log(text);
}

takeDataIn("How are you doing?");
takeDataIn("Goodbye");




function adder(number1, number2){
    var sum = number1, number2;

    console.log("The sum of " + number1 + "and" + number2 + " is " + sum );
}

adder(4000, 19); 