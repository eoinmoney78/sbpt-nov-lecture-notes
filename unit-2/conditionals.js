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


let grade = 88;
grade = 73;
grade = 0;

if (grade > 75) {
    console.log('passing');

} else if (grade >= 69) {
    console.log('please see the teacher');
} else {
    console.log('failing');
}
