// Learning

// In this lab, we will be practicing writing functions, conditional logic, Boolean values and the Remainder % operator, which is also called the modulo operator.

// Topics

//     % Remainder operator
//     if...else statements
//     Boolean values true and false

// Achieving

// In this lab, we will achieve a piece of software which takes two numbers and returns the Boolean true if the first number is evenly divisible by the second, and false if they are not evenly divisible.

// Your work will result in:

//     A file named divisible.js
//     Within divisible.js, a function named divisible which takes two arguments and handles our logic.
//     Within the divisible function, the remainder, dividend and divisor variables to store our values.
//     Within the divisible function, if...else conditional logic to return true or false
//     A program that correctly identifies whether or not one number is evenly divisible by the other.




// Procedure
// Create a divisible.js file

//     Navigate to your code folder in the command line.

// cd ~/path/to/your/folder/code

//     Use the command mkdir to create a new subfolder named divisible.

// # from within the code folder
// mkdir divisible

//     cd into the divisible directory.

// cd divisible

//     Use the terminal command touch to create a new file named divisible.js

// touch divisible.js

//     Open divisible.js in your editor.

// code .

// Create a divisible function
//     Declare a function named divisible passing in dividend and divisor as its two arguments.



function divisible(num1, num2) {

    let remainder = num1 % num2;

    console.log(`${remainder}`);

    if (remainder % 2 === 0) {
        console.log('true');
    } else {
        console.log('false');
    }
}
divisible(66, 60);












//     Within the divisible code block, initialize a remainder variable and assign it the value of the remainder of your dividend and divisor arguments. Do this by utilizing the modulus % operator.

//     Within the divisible code block, print the value of your remainder variable to make sure it is what you expect.
//     Within the divisible code block, write an if statement to check if the value of remainder is equal to 0 and if it is then return true.
//     Within the divisible code block, write an else statement which returns false.
// Call the divisible function

//     Outside of the divisible function, call divisible() and pass two numbers as arguments.
//     Print the result of calling divisible() to the terminal.

// Review

// In this lab, we have practiced writing functions, using if...else conditional logic and utilizing the Remainder % operator. The software should:

//     Take in two numbers and return the Boolean true if the first number is evenly divisible by the second, and false if they are not evenly divisible.

// Going Further

//     How many different ways can you solve this?
//     Try using the following approaches
//         Equality operator and remainder
//         Remainder operator only
//         Ternary operator








// let y = 7;
// let x = 9;

// function maxNumber() {
//    if (x > y || y > x) {
//       console.log(x);
//    } else {
//       console.log(y);
//    }
// } maxNumber();



// let number = max(12, 8);
// console.log(number);
// function max(a, b) {
//    // if (a > b) return a; // use an if statement 
//    // return b;
//    return (a > b) ? a : b;  // or use a conditional ternary 


// } 