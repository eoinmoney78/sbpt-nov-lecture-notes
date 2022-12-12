/*
  !  Functions
           - Block of code than preforms a particular task
           -simplified programs that run a task when invoked,


           Two main Types:
           --- Declaration
           --Expression



*/

//* Declaration


//    Structure :
//   1     2
// function hi() {
//         ...code block
// }
//    1.Key word
//    2.Name of the function and parenthesis






// * Expression


/*
  Structure:
  */
// let hey = function hi() {
//     console.log()
// }


// let hello = function hey() {
//     console.log('hey');
//     return 'hey';
// }
// hello();   


// hi();     // invoking our function hi
// Expression variable name is required to run function



// function numbers() {
//     for (i = 1; i <= 10; i++) {
//         console.log(i);
//     }
// }
// numbers();


// let arr = ['This', 'can', 'be ', 'really', 'cool']
// function newArray() {
//     for (i = 0; i < 4; i++) {
//         console.log(arr);
//     }
// }
// newArray();









//!  parameters 
/*
  Structure :
    function fncName(parameter )[
        console.log(`hi ${parameter}`);

    ]
fncName("paul");


1. The parameter(s) that the function is accepting or holding.
2.Using string interpolation we can refer to the parameter gave to the function.
3> This is where we define what that para values will be
 */

function order(ticket, total) {
    console.log(`i exchanged my ticket for a ${ticket}. it cost ${total} dollars.`);
}
order('cheese pizza', 20);
order('soup', 3);
order('salad', 8);




order()

function  shouter (someString) {
let firstLetter = someString.charAt(0);
// console.log(firstLetter);
return firstLetter + '!!';
} 
console.log(shouter("ratty wen to town"));







//!   return


/*  structure



1 Keyword: return brings our data out of the function
2. new var to hold the returned value.
3.when called , the function becomes the value of the return
*/


// let hi = function( ){
//     return "hi";

// };
// let greeting = hi();
// console.log(greeting);






// function fName() {
//     return 'Steve';
// }
// let myName = fName();
// console.log(myName);


// let volume = function (l, w, h) {
//     let total = l * w * h;
//     return total;
// }
// let recOne = volume(3, 5, 6);
// let recTwo = volume(7, 5, 8);
// console.log("rec One:", recOne);
// console.log("rec Two:", recTwo);


// function coffeeMaker(filter) {
//     return `a full pot of ${filter}!`;
// }
// let mon = coffeeMaker('coffee');
// let tues = coffeeMaker('tea');
// let thurs = coffeeMaker('milk');
// console.log(mon);

// console.log(tues);
// console.log(thurs);

// mon = 'new value in monday'
// console.log(mon);

//! Arrow Functions

/*
  Structure:


       let hi = ( ) =>
{
    console.log('hi)
}
1 we need to set the arrow function to a var
2. we use the "fat arrow" to signify its a function

more concise way of writing a function
Not declarations


2 diff styles:
--concise body
-- Block body



*/

//* concise Body

// let goodBye = () => console.log('goodBye');
// goodBye();

// let total = () => 2 + 2;
// let isFour = total();
// console.log(isFour);

//* Block Body

// let apples = qty => {
//     return `there are ${qty} apples.`
// };
// let appleCount = apples(4);
// console.log(appleCount);


// same function as concise body 

// let apples2 = qty => `there are ${qty} apples`;
// let newAppleCount = apples2(isFour);
// console.log(newAppleCount);

// multiple prams

// let calc = (x, y) => x + y;
// console.log(calc(3, 4));
// let calc2 = (x, y) => {
//     return x + y;
// }
// console.log(calc(3, 4));

//* IIFE

/*
   Immediately invoked function expression
   -helps allocating space in memory for anonymous functions
   -fires our function as soon as it is read.


*/
// (function () {
//     console.log('IIFE fired')
// })();







// - use a loop, conditional, and console.log() to print all the numbers from 1 to 30.

//     - Numbers evenly divisible by 3, print "Fizz" instead of the number.

//     - Number evenly divisible by 5, not 3, print "Buzz" instead of the number.
    
//     - Numbers that are evenly divisible by BOTH 3 and 5, print "Fizz Buzz" instead of the number.
    
//     - Any number that is not divisible by either, print the number.
//     */