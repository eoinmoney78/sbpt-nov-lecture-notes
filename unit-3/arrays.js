/*

! Data Structures
           -How we organize our data
           - Utilize Arrays and objects and use functions to interact with them;


           Array -
           Denoted with square brackets[]
           -Indicies start at zero
           indicies do not reflect the length'
           using a property "length", we can find the sum of data stored.
*/


// let avengers = [
//     //*    0     1    2      3        4          
//     'Nick', 2, false, 'Steve', 'Bruce', [
//         //*     5
//         //?    0    1   2  
//         'Tony', 8, true
//     ]
// ];

// console.log(typeof avengers);
// console.log(avengers instanceof Array);

// console.log(avengers[4]);
// console.log(avengers[5]);
// console.log(avengers[5][2]);

//!   Methods

// // ? .push() 

// let food = ['milk', 'bread', 'chicken'];

// console.log(food[2]);

// console.log(food[food.length - 2]);
// food[0] = 'chocolate milk';
// console.log(list);

// for (item of food) {
//     console.log(item);
// }


// food.push('pizza');
// console.log('push: ', food); // adds to the end of array

// let food = [
//     'pecan pie', 'Shrimp', 'Quesadilla', 'cheese cake', 'hot dog'
// ];

// // // ? .slice()
// food.splice(3, 1, 'Tacos'); // splice (where , how to remove,what to replace)
// console.log('Splice: ', food);

// food.splice(1, 0, 'Steak');
// console.log('Splice 2:', food);




// let food2 = ['rice', 'noodles', 'chicken', 'hotdogs'];
// food2.slice(1, 1, "peppers")
// console.log('splice: ', food2);
// food2.pop();
// food2.pop();
// console.log(food2);
// food2.push();
// console.log('push: ', food2);
// food2.push("cookie");
// console.log("String: ", food2.toString());



// //? .pop 


// food.pop();           // removes value from the end of array.
// console.log('pop: ', food);

// //? .shift()
// food.shift();
// console.log('Shift: ', food); // removes value at the first position.

// //? .unshift()

// food.unshift('Hamburger', 'salad');
// console.log('Unshift:', food); // adds to the front of the array
// //      can include multiple items.


// //? .length
// console.log("length: ", food.length);

// //? .toString
// let rgb = ['red', 'green', 'blue'];
// console.log(rgb.toString());

//!   Iteration Methods 

/*
     ?    .filter() & .includes()
             - does not destroy the original array
             -Typically store the filter array in a new var
             -takes a callback function that returns either true / false
             -must have a return


*/

// let fruits = [
//     'apple', 'pear', 'mango', 'orange', 'pineapple'
// ];

// let filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango';
//     console.log('Result:', result);
//     return result;
// });
// console.log(filteredFruit);


// let jam = [
//     'apple', 'pear', 'gooseberry', 'strawberry'
// ];

// let filteredJam = jam.filter(jam => {
//     let result = jam !== 'mango';
//     console.log('Result: ', result);
//     return result;
// })



// How can i remove any fruit that has teh word "apple" in it?


// //? .toString()
// let rgb = ['red', 'green', 'blue'];
// console.log(rgb.toString());

//! Iteration Methods
/*
?   .filter() & .includes()
        - does not destroy the original array
        - typically store the filter array in a new variable
        - takes a callback function that returns either true/false
        - loops through array
        - MUST have a return
*/

// let fruits = [
//     'apple', 'pear', 'mango', 'orange', 'pineapple'
// ];

// How can I use a filter to remove the mango ?

// let filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango';
//     console.log('Result: ', result);
//     return result;
// });

// console.log(filteredFruit);

// How can I remove any fruit that has the word "apple" in it ?
// let fruit1 = 'pineapple';
// console.log('Includes: ', fruit1.includes('apple'));

// const filterFruit1 = fruits.filter(fruit => !fruit.includes('apple'));
// console.log(filterFruit1);

// const filteredFruitFunctionExample = fruits.filter(removeMango);

// function removeMango(fruit) {
//     return fruit !== 'mango';
// }


// console.log('Function Example: ', filteredFruitFunctionExample);


//* -------- map of a callback Function-------------
// function callbackFunctionBuilder(testFunction) {
//     // console.log('Inside callback Builder', testFunction)
//     testFunction('Hello There!');
// }

// function sampleCB(info) {
//     console.log(info);
// }

// console.log(callbackFunctionBuilder(sampleCB));
// 

//? .forEach() 

/*
    Runs 3 arguments
                 - The Value
                 - The Index
                 - The Array object itself

*/

// let newFoodList = [
//     'apple', 'pear', 'mushroom', 'cheese', 'peach',
// ];

// for (let i = 0; i < newFoodList.length; i++) {
//     console.log(newFoodList[i]);
// }
// newFoodList.forEach(item => console.log('For each: ', item));


// let honeyBooBoo = [
//     'june-bug', 'BooBoo', 'snake', 'rat-face'
// ];
// for (let i = 0; i < honeyBooBoo.length; i++) {
//     console.log(honeyBooBoo);
// }
// honeyBooBoo.forEach(item => console.log(('For Each: ', item)));
// honeyBooBoo.forEach((item, i) => console.log('For each w index: ', item, i));


// newFoodList.forEach(function (item) {
//     console.log('declaration sample', item);
// });

// newFoodList.forEach(infoDisplay);

// function infoDisplay(item) {
//     console.log("outside of forEach: ", item);
// };

//? .map() 

// let numArray = [];
// let fizzBuzzArray = [];

// for (let i = 0; i < 101; i++) {
//     numArray.push(i);
// };

// console.log(numArray);


// numArray.map(x => {
//     if (x % 15 === 0) {
//         fizzBuzzArray.push(x);
//     } else if (x % 3 === 0) {
//         fizzBuzzArray.push('Fizz');
//     } else if (x % 5 === 0) {
//         fizzBuzzArray.push('Buzz');
//     }

// })

// console.log(fizzBuzzArray);


// let sumArray = [];
// let jackAssArray = [];
// for (let i = 0; i < 101; i++) {
//     sumArray.push(i);
// };
// console.log(sumArray);

// sumArray.map(x => {
//     if (x % 15 === 0) {
//         jackAssArray.push(x);
//     } else if (x % 3 === 0) {
//         jackAssArray.push('jack');
//     } else if (x % 5 === 0) {
//         jackAssArray.push('Ass');
//     }
// })
// console.log(jackAssArray);

//* map vs forEach
// let mainArr = [1, 2, 3, 4];

// let forEachSample = mainArr.forEach(i => i);
// console.log(forEachSample);

// let mapSample = mainArr.map(i => i);
// console.log(mapSample);


//? .find()

// let tmnt = [
//     'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
// ];
// let character = 'Leo';
// console.log('Find: ', tmnt.find(c => c === character));

// character = 'April';
// console.log('Find: ', tmnt.find(c => c === character));

// character = 'Splinter';
// tmnt.find((c, i) => console.log("character: ", c === character, "index", i));

// let metallica = [
//     'James', 'Lars', 'Kirk', 'Robert'
// ];

// let bandMember = 'James';
// console.log('Find: ', metallica.find(m => m === bandMember));
// bandMember = 'Lars';
// console.log('Find : ', metallica.find(m => m === bandMember));
// bandMember = 'Kirk';
// metallica.find((m, i) => console.log('Band Member: ', m === bandMember, 'index', i));



// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 40);

// console.log(found);


// const array2 = ['spider', 'snake', 'frog', 'bat'];
// const found2 = array2.find(element => element);
// console.log(found2);

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// function isCherries(fruit) {
//     return fruit.name === "cherries";
// }

// console.log(inventory.find(isCherries));

// const inventory = [
//     { name: "apples", quantity: 2 },
//     { name: "bananas", quantity: 0 },
//     { name: "cherries", quantity: 5 },
// ];

// const result = inventory.find(({ name }) => name === "bananas");

// console.log(result); // { name: 'cherries', quantity: 5 };




// ! Array Destructuring
/*
    - Allows us to unpack values from arrays into distinct variables.
    - Similar syntax as array literals, but the square brackets are on the left of the assignment operator (=)
    - Great way to pull info from array and assign to own variable.
*/

// const fullName = ['Eoin', 'Noonan'];
// // // const firstName = fullName[0];
// // // const lastName = fullName[1];
// // // console.log(firstName, lastName);

// let [firstName, lastName] = fullName;
// console.log(firstName);
// console.log(lastName);

// firstName = "John";
// console.log(firstName);


// ! Spread Operator
/*
?   Concept of the Spread Operator - NOT the syntax:

    const fullName = ['Rocket', 'Racoon'];

    ...fullName  // 'Rocket', 'Racoon'
    const elements = ...fullName;
    const elements = "Rocket", 'Racoon
*/
// const fullName = ['Jane', 'Doe'];

// const copiedFullName = [...fullName];
// console.log('Copied: ', copiedFullName);
// const copiedFullName2 = [fullName];
// console.log('Copied 2: ', copiedFullName2);

// let numArray = [1, 4, 5, 7]

// for (i = 0; i < 20; i++) {
//     numArray.push(i);
// };

// console.log(numArray);


// let [ firstName, lastName ] = fullName;
// console.log(firstName);
// console.log(lastName);

// firstName = "John";
// console.log(firstName);

//* Spread Operator
/*
?   Concept of the Spread Operator - NOT the syntax:

    const fullName = ['Rocket', 'Racoon'];

    ...fullName  // 'Rocket', 'Racoon'
    const elements = ...fullName;           <---
    const elements = 'Rocket', 'Racoon' // is this

* Denoted by three consecutive periods: ...ARRAY
*/

// const fullName = ['Jane', 'Doe'];

// const copiedFullName = [...fullName];
// // console.log('Copied: ', copiedFullName);
// const copiedFullName2 = [fullName];
// console.log('Copied 2: ', copiedFullName2);

// let numberArray = []

// for (i = 0; i < 20; i++) {
//     numberArray.push(i);
// };

// console.log(numberArray);
// let newNumberArray = [...numberArray];
// console.log(newNumberArray);

// fullName.push('Mrs.');
// console.log('Full Name: ', fullName);
// console.log('Copied Name: ', copiedFullName);

// //* with Numbers
// console.log(Math.min(1, 5, -3));

// const prices = [10.99, 5.99, 3.99, 5.59];
// // // console.log(Math.min(prices));
// console.log(Math.min(...prices));

//* Changing both the Original and Copied Array
const persons = [
    {
        name: 'Jane',
        age: 28
    },
    {
        name: 'John',
        age: 35
    }
];


const copiedPersons = [...persons];
persons.push({ name: 'Anna', age: 29 });
copiedPersons[0].name = "Sue";

console.log('Persons: ', persons);
console.log('Copied Persons: ', copiedPersons);


// //* Variables within Memory

// let x = 10;
// let y = 'abc';
// let z = null;


// let a = x;
// let b = y;

// a = 5;
// b = 'def';
// console.log(x, y, a, b);


// let arr = [];
// arr.push(1);

// let reference = [1];
// let refCopy = reference;


// *  Rest Syntax
/*

-- looks exactly like spread syntax
--spread -> 'expands' an array
-rest -> "condenses" an array



*/


// const fullNameAgain = ['Jane', 'Doe', "Mrs.", {
//     month: 03, date: 22, year: 1973
// }, 2, 'test', '4', true, false];

// const [newFirst, newLast, ...moreInfo] = fullNameAgain;
// console.log(newFirst);
// console.log(newLast);
// console.log(moreInfo);

// newFirst = "alex"; // reassigned
// console.log(newFirst);
// moreInfo[1] = 5;
// console.log('updated rest:', moreInfo);