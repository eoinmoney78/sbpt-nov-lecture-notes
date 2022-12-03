/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/
// let age = 24;


// if (age >= 25) {
//     console.log('You can rent a car');
// } else if (age >= 18) {
//     console.log("you can vote");

// } else if (age >= 21) {
//     console.log('you can drink and You can vote');
// } else {
//     console.log('sorry u too young')
// }

// !Switch

/* 

Keyword :

   -Switch 
   - Case 
   -break
     -Takes us out of our code block
   -default
       --runs if no cases match



       Structure (expression) {
          case.. : 
            return;
            break;

          case..:
             return;
             break;

          default:
              return;
       }
       */


let officeCharacter = "Michael";

switch (officeCharacter) {
    case "Michael":
        console.log("My mind is going a mile an hour.");
        break;
    case "Dwight":
        console.log("My mind is going a mile an hour.");
        break;
    case "Jim":
        console.log("My mind is going a mile an hour.");
        break;
    default: console.log(`i'm sorry, ${officeCharacter}, but do i know you?`);
}

let num = -5;
switch (true) {
    case (num < 0 && num > -10):
        console.log('case 1 ran');
        break;
    case (num > 0):
        console.log('case 2 ran');
        break;
    default:
        console.log('did not work');
        break;


}





// !Ternary 
/*
  Always a If/Else condition at minimum 


  Structure:

  Expression ? true: false
*/


let expression = false;
// if (true) {
//     console.loh('Runs true')
// } else {
//     console.log('runs false');
// }


expression ? console.log('runs true') : console.log('runs false');


let newNum = 6;


newNum > 0 ? console.log('yes') : console.log('no');

// as an if/else 
if (num > 0) {
    console.loh('yes');

} else {
    console.log('no');
}

// * Else / if 

if (newNum == 0) {
    console.log('hello');

} else if (newNum < 0) {
    console.log('hi');

} else {
    console.log('goodbye');
}

(newNum == 0) ?
    console.log('Hello') :
    (newNum < 0) ? console.log('hi') :
        console.log('goodbye again');



let numOne = 1;
let numTwo = 2;
let value = ((numOne + numTwo) > 1) ? (numOne + numTwo) : 0;
console.log(value);
