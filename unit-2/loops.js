//! loops


/*


for takes in 3 parameters 
--initial expression
-condition
-increment


Structure:
  for (initial expression ; condition; increment expression) {
    ...code block
  }

  */


// for (i = 0; i < 10; i++) {
//   console.log(i);
// }
// console.log('out of loop');

// for (i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// // 
// for (i = 10; i > 0; i--) {
//   console.log(i);
// }

let firstName = 'eoin noonan';

for (let i = 0; i < firstName.length; i++) {
  console.log(firstName[i], i);
}


let lastName = "goandeatsomecake";
for (i = 0; i < lastName.length; i++) {
  console.log(lastName[i], i);
}


let sum = 10;
for (let i = 1; i <= 50; i++) {
  sum += i;
  console.log(sum);
}
console.log(sum);

//! For in

let student = {
  name: "peter",
  awesome: true,
  degree: 'javaScript',
  week: 1
}
console.log(student["name"]);
for (item in student) {
  console.log(item);
  console.log(student[item]);
}


let dogShit = {
  smell: "nasty",
  whereat: "living-room",
  temp: 90,
  level: "pissed"
}
console.log(dogShit["smell"]);
for (item in dogShit) {
  console.log(item);
  console.log(dogShit[item]);
}



let catArray = [
  'tabby', 'british short hair', 'burmese', 'maine coon', 'rag doll'
];

for (cat in catArray) {
  console.log(catArray[cat]);
}

//! For of

/*



Structure

*/

// for (item of student) {
//   console.log(item);
// }

for (cat of catArray) {
  console.log('FOR OF: ', cat);
}

for (cat of catArray) {
  if (cat === 'tabby') {
    console.log(cat);

  } else {
    console.log("not tabby");

  }
}



let text = "This is a text"

for (i of text) {

  console.log(i)

}
