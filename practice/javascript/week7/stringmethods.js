//Manually replace the questions Mark.

var myString = "Hello there how are you";

console.log(myString.length)

var myStringAray = myString.split("");

console.log(myStringAray);

myStringAray[23] = ".";

console.log(myStringAray);

myStringAray.pop();
myStringAray.pop();
myStringAray.shift();
myStringAray.shift();

var finishedString = myStringAray.join("");

console.log(finishedString);