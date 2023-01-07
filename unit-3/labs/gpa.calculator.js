


let grades = {
  midterm: [
    {
      grade: 3.3,
      weight: 1,
    },
  ],
  project: [
    {
      grade: 4.0,
      weight: 1,
    },
  ],
  final: [
    {
      grade: 3.2,
      weight: 2,
    },
  ],




}






let gradeSum = 0;
let weightSum = 0;

function gpa(object) {
  let gradesToWeight = Object.values(object);
  gradesToWeight.forEach(key);
  weightedGrade = gradeSum / weightSum;
  console.log(weightedGrade);
  console.log(gradesToWeight);
  return weightedGrade;

};

function key(grades) {
  console.log("key Function : ", grades[0].grade)
  let project = grades[0];
  gradeSum = (project.grade * project.weight) + gradeSum;
  weightSum = (project.weight + weightSum);
};

console.log('The final GPA is ' + gpa(grades));