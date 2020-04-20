const fs = require("fs");//make sure you create a file call "file to test.txt" inside the same file as preader.


// We grab the values that were typed in the terminal and store them in the arguments variable.
var arguements = process.argv;

//console.log("Contents of process.argv: ", arguements);


function wordCount(testText) {
var textArray = testText.split(" ");

//console.log(textArray);

console.log("The text: " + testText + "has a total of " + textArray.length + " words in it.");
}


function charCount(testText) {
    var textArray = testText.split("");    
    console.log("The text has a total of " + textArray.length + " charcters in it.");
    }

    var textToTest = process.argv[4];
    var mode = process.argv[2];
    var type = process.argv[3];


if (type == "text" || type == "txt") {

    if (mode == "words" || mode == "word" || mode == "Word" || "Words") {
        wordCount(textToTest);
    }
    else if (mode == "charcters"){
        charCount(textToTest);
    }
    else {
        console.log("the only options for this program is 'words' or 'charcters' for the second arguement.");
    }
}
else if (type == "file") {
    //Node function to read files
    // This function returns a string of the contents of the file you read.
    //fs.readFileSync ("filepath to file", "utf8");
    
    var text = fs.readFileSync("textToTest.txt", "utf8");
    if (mode == "words" || mode == "word" || mode == "Words" || "Word") {
        wordCount(text);
    } else {
        console.log("The only options for this program is 'words' or 'charcters' for the second argument.");
    } 

}        
else {
    console.log ("the type of data can only be 'text' or 'file' ");
}                                     







if (mode == "words" || mode == "word" || mode == "Words") {
    wordCount(textToTest);
}
else if (mode == "charcters") {
    charCount(textToTest);
}
else{
    console.log("Some paragraph with spaces or breaks.");
}


