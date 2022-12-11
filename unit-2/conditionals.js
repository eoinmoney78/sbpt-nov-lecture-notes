/*

conditionals
-    Evaluates an expression and responds if it is true
-Falsy
  - false
    -0
    -  " "  , ' '  Empty strings
    -null
    - undefined
    -NaN (not a number)
*/
// let isOn = true;
// console.log(isOn);

// if (isOn == true) {
//     console.log('the light is on!');
// }
/*
  Structure:

  If (expression evaluated) {
    ...code that runs if expression is true
  }

 */
// String interpolation
// let newString = `2 + 2 is ${2 + 2}`;
// console.log(newString);
// console.log(typeof newString);
// let firstName = 'sam';

// let lastName = 'Jones';
// console.log(`${firstName} ${lastName}`);

/*


*/
// isOn = false;
// if (isOn == false) {
//     console.log('the light is off');
// }


// let grade = 88;
// grade = 73;
// grade = 0;

// if (grade > 75) {
//   console.log('passing');

// } else if (grade >= 69) {
//   console.log('please see the teacher');
// } else {
//   console.log('failing');
// }


// let officeCharacter = "pam";
// switch (officeCharacter) {
//   case "michael":
//     console.log("my mind is going a mile an hour");
//     break;
//   case " Dwight":
//     console.log("perfectenslag");
//     break;
//   case "pam":
//     console.log("hello pam, Nice to see ")

// }

// let num = 40;

// switch (true) {
//   case (num < 0 && num > -10):
//     console.log("case 1 ran");
//     break;
//   case (num > 0):
//     console.log('case 2 ran');
//     break;
//   default:
//     console.log("did not work");

// }

//! Ternary
/* always an if else condition at minimum.
Structure: expression ? true : false
*/

let expression = false;
if (expression) {
  console.log('runs true')

} else {
  console.log('runs False');
}

let numOne = -5;
let numTwo = 2;
let value = ((numOne + numTwo) > 1) ? (numOne +
  numTwo) : 0;
console.log(value);

//!Loops
/*
   For
    Takes in 3 parameters
           -- initial expression
           -condition
           -increment

           structure:
           for (initial expression; condition;
            increment expression) {
              code block
            }



*/

// let i = 'potato';
// for (i = 0; i > 100; i++) {
//   console.log(i), i;
// }
// for (i = 0; i <= 20; i += 2) {
//   console.log(i);
// }
// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

// let firstName = "eoin";
// for (let i = 0; i < firstName.length; i++) {
//   console.log(firstName[i]);
// }

// let firstName = "eoin";
// for (let i = 0; i < 0; i++) {
//   console.log(firstName[i]);
// }



// let song = 'potato';
// let count = 0;
// while (count > 0) {
//   console.log(count + 'song')
//   count = count + 1

// } if (count = 0) {
//   console.log(song)
// }








