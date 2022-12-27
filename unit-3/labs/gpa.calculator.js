


let grades = {

  midterm:
  {
    grade: 3.3,
    weight: 1
  }
  ,
  project:
  {
    grade: 4.0,
    weight: 1
  }
  ,
  final:
  {
    grade: 3.2,
    weight: 1
  }

}
// should print: 'The final GPA is 3.425'

console.log(grades[0]);



let gradeSum = 0;
let weightSum = 0;

function gpa(object) {    //  1.  gpa function
  // write your code here
  let gradesToWeight = Object.values(object);  // 2.

  // console.log(object.key);
  gradesToWeight.forEach(value);
  gradeSum = [Object.value(object)];
  console.log(gradeSum);












}

console.log('The final GPA is ' + gpa(grades));