/*

- use a loop, conditional, and console.log() to print all the numbers from 1 to 30.

    - Numbers evenly divisible by 3, print "Fizz" instead of the number.

    - Number evenly divisible by 5, not 3, print "Buzz" instead of the number.
    
    - Numbers that are evenly divisible by BOTH 3 and 5, print "Fizz Buzz" instead of the number.
    
    - Any number that is not divisible by either, print the number.
    */



for (i = 0; i <= 30; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzBuzz")

    } else if (i % 3 == 0) {
        console.log("fizz")
    } else if (i % 5 == 0) {
        console.log("Buzz")
    } else {
        console.log(i);
    }
}



   // const fizzBuzz();
   // let i = 'num';
// for (i = 0; i < 30; i++) {
//     console.log(i)
// }
// while ((num % 3 === 0) && (num % 5 === 0)) {
//     return "fizzbuzz";
// }
// fizzBuzz();
// let firstName = 'eoin noonan';

// for (let i = 0; i < firstName.length; i++) {
//     console.log(firstName[i], i);
// }


// for (i = 0; i <= 30; i++) {
//     console.log(i);
//     if (i % 3 === 0) {
//         console.log([i.fizz]);

//     } else if (i % 5 === 0) {
//         console.log([i.Buzz]);
//     }
// }