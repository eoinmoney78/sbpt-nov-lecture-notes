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

// let list = ['milk', 'bread', 'chicken'];

// console.log(list[2]);

// console.log(list[list.length - 2]);
// list[0] = 'chocolate milk';
// console.log(list);


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

// for (item of food) {
//     console.log(item);
// }


// food.push('pizza');
// console.log('push: ', food); // adds to the end of array

let food = [
    'pecan pie', 'Shrimp', 'Quesadilla', 'cheese cake', 'hot dog'
];

// // ? .slice()
food.splice(1, 1, 'Tacos'); // splice (where , how to remove,what to replace)
console.log('Splice: ', food);

food.splice(1, 0, 'Steak');
console.log('Splice 2:', food);


// //? .pop 


food.pop();           // removes value from the end of array.
console.log('pop: ', food);

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

let fruits = [
    'apple', 'pear', 'mango', 'orange', 'pineapple'
];

let filteredFruit = fruits.filter(fruit => {
    let result = fruit !== 'mango';
    console.log('Result:', result);
    return result;
});
console.log(filteredFruit);



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

// How can I use a filter to remove the mango?

// let filteredFruit = fruits.filter(fruit => {
//     let result = fruit !== 'mango';
//     console.log('Result: ', result);
//     return result;
// });

// console.log(filteredFruit);

// How can I remove any fruit that has the word "apple" in it?
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


// newFoodList.forEach((item, i) => console.log('For each w index: ', item, i));


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



//* map vs forEach
let mainArr = [1, 2, 3, 4];

let forEachSample = mainArr.forEach(i => i);
console.log(forEachSample);

let mapSample = mainArr.map(i => i);
console.log(mapSample);


//? .find()

let tmnt = [
    'Mikey', 'Donnie', 'Leo', 'Raph', 'Splinter', 'Shredder', 'Baxter'
];
let character = 'Leo';
console.log('Find: ', tmnt.find(c => c === character));

character = 'April';
console.log('Find: ', tmnt.find(c => c === character));

character = 'Splinter';
tmnt.find((c, i) => console.log("character: ", c === character, "index", i));
