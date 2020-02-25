//Equal sign, everything on the right side always happens first.

var sum = 1000 + 50;

var product = 50 * 50;

var dividend = 20 / 10;

var difference = 100 - 10;

//when using variable names on the right side of the equal sign, you are calling for value and then you are running the operators, and finally you are storing the final value into the variable total.
var total = sum + product;

console.log (total);


// Looked at the built-in Math Library of JavaScript.
var radius = 40;

var diameterOfCircle = 2 * radius;
var preimeterOfCircle = Math.PI * diameterOfCircle;

console.log("The diameter of the circle with a radius of " + radius + " is " + diameterOfCircle + ". The perimeter of the circle is " + preimeterOfCircle);

//Rounds to the nearest whole number.
var rounded = Math.round(3.14);
console.log(rounded);

//round up
var roundUp = Math.ceil(45.1);

//Round down
var roundDown = Math.floor(45.9);

//Math.random() returns a value between 0 and .9infinity
//we added 1 so mininum is now 1 , and we multiply 1000 so maximum is 100.9
var someNumber = (Math.random() * 10) + 1;

//We floor the random number so decimals are removed.
var roundedRandomNumber = Math.floor(someNumber);
// or use the existing variable:
// someNumber = Math.floor(someNumner);

//Print random number
console.log(roundedRandomNumber);
