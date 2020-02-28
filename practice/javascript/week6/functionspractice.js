// Concatenation example 
"a word" + "gabe";
"a number" + 100;
console.log("hello" + true);
console.log(100 + "a number");
console.log(100 + 100 + 100 + "hello");
console.log("hello" + 100 + 100 + 100);



function sentenceBuilder() {
    var firstPart = "went to ";
    var secondPart = "and ";
    var thirdPart = "but there was a problem, ";
    var forthPart = "did not work.";

    var completeSentence = person + firstPart + place + secondPart + action + thirdPart +  item + forthPart;
    
    console.log(completeSentence);
}

//"_____went to the_____, and did_____but there was a problem,____did not work.";



sentenceBuilder("Jon", "Happy Cat", "fought with the store manager", "the fists");

sentenceBuilder("David" + "Six Flags", "took a ride on the Ferris Wheel", "the hydraulics")

function getNumber() {
    return 42;

}

console.log(getNumber() );


var newNumber = getNUmber() + 100;

console.log(getNUmber);

var results = getNumber() / 50;

console.log(results);

// Another example below




function getName() {
    var firstName = "Ed";


    return firstName;
}
getName() + "is a person.";