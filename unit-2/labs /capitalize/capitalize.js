// Learning

// In this lab we will be practicing string manipulation, initializing variables and writing functions. We will also learn the utility of console.log()

// Topics

//     .slice()
//     .toUpperCase()
//     .toLowerCase()
//     Variables
//     Functions
//     console.log()

// Achieving

// In this lab, we will be achieving a piece of software that takes a word or phrase as an argument and returns a capitalized version of that string.

// Your work will result in:

//     A file named capitalize.js.
//     Within capitalize.js, a function named capitalize to handle our capitalize logic.
//     Within the capitalize function, the firstLetter, restOfWord, and fullWord variables and the logic to manipulate our string and return its capitalized version.

// Procedure
// Create a capitalize.js file

//     Navigate to your code folder in the command line.

// cd ~/path/to/your/folder/code

//     Use the command mkdir to create a new subfolder named capitalize.

// # from within the code folder
// mkdir divisible

//     cd into capitalize.

// cd divisible

//     Use the command touch to create a new file named capitalize.js.

// touch divisible.js

//     Open capitalize.js in your editor.

// code .

// Create a capitalize function

//     Declare a function named capitalize passing in string as it's argument.

//     Within the capitalize code block, initialize a firstLetter variable and assign it the value of our string's first index.



//     Within the capitalize code block, initialize a restOfWord variable and assign it the value of the rest of our strings indexes.



//     Within the capitalize code block, make the firstLetter variable uppercase, make the restOfWord variable lowercase, concatenate the resulting strings and assign them to a fullWord variable.


//     Print the fullWord variable.



// function shouter(someString) {
//     let loudString = someString.toUpperCase;
//     console.log(loudString);
// }
// shouter('monkey');


function shouter(someString) {

    let firstLetter = someString.charAt(0).toUpperCase();

    let restOfWord = someString.toLowerCase().slice(1);
    let lunch = someString.charAt(0).slice(1).toUpperCase();



    let fullWord = `${firstLetter}${restOfWord}${lunch}`;

    return fullWord;
}
console.log(shouter('over and over and over again.!!!'));
console.log(shouter('tomato bacon lettuce and mayonnaise'));


function stop(gang) {
    let firstLetter = gang.charAt();
    
}



// function sing(song) {
//     console.log(song);
//     console.log()
// } sing("U are the greatest");
// sing("what just happened!");





// Call the capitalize function

//     Below our capitalize code block, call capitalize() and pass in a word or phrase as an argument that you want to capitalize

// Review

// In this lab, we have built a piece of software that takes a string as an argument and returns a capitalized version of that string.
// Going Further

// To take your software further:

//     Try to chain methods together to reduce the total lines of code

// someWord.slice(0, 1).toUpperCase()