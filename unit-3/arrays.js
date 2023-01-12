/*

! Data Structures
           -How we organize our data
           - Utilize Arrays and objects and use functions to interact with them;


           Array -
           Denoted with square brackets[]
           -Indices start at zero
           indices do not reflect the length'
           using a property "length", we can find the sum of data stored.
*/


// let avengers = [

//     'Nick', 2, false, 'Steve', 'Bruce', [


//         'Tony', 8, true
//     ]
// ];
// console.log(avengers.length);
// avengers.push('superman');
// avengers.splice(2, 1, "spiderman");
// avengers.pop();
// avengers.shift();
// avengers.unshift(8);
// avengers.toString();

// console.log(avengers.length);

// console.log(typeof avengers[5][1]);
// console.log(avengers instanceof Array);
// console.log(avengers[5][2]);

// console.log(avengers[4]);
// console.log(avengers[5]);

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

// let string = [
//     'heavy', 'medium', 'light', 'extra-light'
// ];

// let newStrings = string.includes(string => {
//     let result = string == 'light';
//     console.log('Result: ', result);
//     return result;
// })


// How can i remove any fruit that has the word "apple" in it?


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



// let filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango';
//     console.log('Result: ', result);
//     return result;
// });

// console.log(filteredFruit);

// How can I remove any fruit that has the word "apple" in it ?
// let fruit1 = 'pineapple';
// console.log('Includes: ', fruit1.includes('apple'));
// let fruits = ['dingle', ' apple', 'kiwi']
// const filterFruit1 = fruits.filter(fruit => !fruit.includes('apple'));
// console.log(filterFruit1);

// const filteredFruitFunctionExample = fruits.filter(removeMango);

// function removeMango(fruit) {
//     return fruit !== 'mango';
// }

// let fruit = ['apple', 'kiwi', 'orange', 'banana'];
// const fruit1 = fruit.filter(fruit => !fruit.includes('apple'));
// console.log(fruit1);


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


// let hogs = [
//     'fatty', 'chub-rub', 'porky', 'Mutton head'
// ];

// for (let i = 0; i < hogs.length; i++) {
//     console.log(hogs[i]);
// }
// hogs.forEach(item => console.log('For each: ', item));






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
//         jackAssArray.push('my');
//     } else if (x % 5 === 0) {
//         jackAssArray.push('goodness');
//     } else if (x % 8 === 0) {
//         jackAssArray.push('my guinness')
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
//     'Mikey', 'Donnie', 'Leo', 'Raplh', 'Splinter', 'Shredder', 'Baxter'
// ];
// let character = 'Leo';
// console.log('Find: ', tmnt.find(c => c === character));



// const array1 = [5, 6, 8, 230, 44];
// const found = array1.find(element => element > 10);
// console.log(found);
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

// let monkey = [
//     'Mike', 'tom', 'jane', 'sally'
// ];

// const monkey1 = monkey.find(element => element === 'tom');
// console.log(`'Find;  ${monkey1}`);


// const array1 = [5, 6, 9, 12];

// const found = array1.find(element => element < 40);

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

const inventory = [
    { name: "apples", quantity: 2 },
    { name: "bananas", quantity: 0 },
    { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "bananas");

console.log(result); // { name: 'cherries', quantity: 5 };




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


// const bingo = ['lunch-box', 'jim'];

// let [firstName, lastName] = bingo;
// console.log(bingo);

// let a, b, rest;
// [a, b] = [10, 20];
// console.log(a);


// const obj = { a: 1, b: 2 };
// const { a, b } = obj;
// console.log(a, b);

// ! Spread Operator
/*
?   Concept of the Spread Operator - NOT the syntax:

    const fullName = ['Rocket', 'Racoon'];

    ...fullName  // 'Rocket', 'Racoon'
    const elements = ...fullName;
    const elements = "Rocket", 'Racoon
*/
const fullName = ['Jane', 'Doe'];

const copiedFullName = [...fullName];
console.log('Copied: ', copiedFullName);
const copiedFullName2 = [fullName];
console.log('Copied 2: ', copiedFullName2);


const looser = ['tommy', 'janet'];
const copiedLooser = [...looser];

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
// const persons = [
//     {
//         name: 'Jane',
//         age: 28
//     },
//     {
//         name: 'John',
//         age: 35
//     }
// ];


// const copiedPersons = [...persons];
// persons.push({ name: 'Anna', age: 29 });
// copiedPersons[0].name = "Sue";

// console.log('Persons: ', persons);
// console.log('Copied Persons: ', copiedPersons);


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

// let arr = [3, 4, 5, 6];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 3;
// }
// console.log(arr);

//  ! or use .map over array.

// let arr2 = [3, 4, 5, 9];
// let modarr2 = arr2.map(function (element) {
//     return element * 3;
// })
// console.log(modarr2);


// let guys = ['jim', 'randy', 'tom', 'bevis'];
// guys.push('rane');
// let newGuys = guys.map(function (element) {

//     return element;
// });
// console.log(newGuys);

// let mad = [56, 78, 91, 34];
// let newMad = mad.map(function (element) {
//     return element * 4;
// })
// console.log(newMad);

// let user = [
//     { firstName: 'Eoin', lastName: 'Noonan' },
//     { firstName: 'John', lastName: 'Noonan' },
//     { firstName: 'Mabel', lastName: 'Noonan' }

// ];

// let userFullNames = user.map(function (element) {
//     return `${element.firstName} ${element.lastName}`
// })

// console.log(userFullNames);
