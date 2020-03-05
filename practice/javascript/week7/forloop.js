var counter = 0

while (counter < 10) {
    //code to run per loop.
    counter = counter + 1;
    console.log(counter);

    //the ++ will add a one to the existing variable value;
    //counter++;

    //The -- will substract one to the existing variable value;
    //counter--;
}

// Inside the parentheses we have three parts: counter, conditon, and code that changes the cunter. The third part only runs after the code block.
for (var counter = 0; 10 > counter; counter = counter + 1) {console.log(counter);
}

//shorthand loop code

var special = 1;
//outer loop will run for 10 times, for each time we are excuting another loop that will itself, run 10 times. 
for (var i = 0; i < 10; i++) {

    for (var e = 0; e < 10; e++) {
        console.log("running! " + special);
        special++;
        
    }
}

/*Write a for loop that console.log every even number up to 48. Bonus, start from 12.*/

//my code in class
var special = 12;
for (var i = 12; i <= 48; i = i + 2) {
    console.log("running " + special);
    special++;
}

//roberto's code
for (var counter = 12; 49 > counter; counter = counter + 2) {
    console.log(counter);
}