// let globalVariable = true;


// function checkGlobalVariable() {
//     console.log(globalVariable);
// } checkGlobalVariable();


// let x = 12;
// function scope() {
//     let x = 33;
//     console.log(x);
// }
// scope();
// console.log(x);

// let y = 12;
// function newScope() {
//     y = 33;
//     console.log(y);
// } newScope();
// console.log(y);


//! Var vs Let

/*
    Variable keywords: \
    --const : can not be reassigned
    ---var scoped to nearest function block
    --let  scope to the nearest enclosing block


*/

// var Example scoped to function block
// var a = 12;
// function varTest() {
//     if (true) {
//         var a = 13;
//         console.log(`Var - within if: ${(a)}`);
//     }

//     console.log(`Var - outside of  if: ${(a)}`);
// }
// varTest();
// console.log(`var - Outside function: ${(a)}`);


// let scoped to enclosing=block

// let b = 12;
// function letTest() {
//     let b = 45;
//     console.log(`let - within if:${(b)}`);
// }
// letTest();
// console.log(`let - Outside function: ${(b)}`);

//! Hoisting 

/*

  - J.S reads from top to bottom in two passes

    1st pass:
    - made by the compiler . this is where hoisting is initiated.
    -compiled for execution
    2ns pass: 
    -variables assigned
       -Execution phase
       -runs any hoisted code.
       */


let personName = "Everly";
// console.log(personName);


b();  // doesn't break because function has been hoisted to the top.


function b() {
    console.log("i have been hoisted");
}



newFunction();

let newFunction = () => {
    console.log("hoisted")
}