// const firstCart = [
//     4.50, 3.25, 14.99, 25.99, 42.99
// ];

// const secondCart = [
//     1.99, 13.50, 22.99, 129.00
// ];





// let salesTax = 0.06;


// function shop(arr) {
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i];

//         subTotal = total += arr[i] * salesTax;

//     }
//     console.log(`Total: ${total.toFixed(2)}`);

// }
// console.log(shop(firstCart));
// console.log(shop(secondCart));





const firstCart = [
    4.50, 3.25, 14.99, 25.99, 42.99
];
const secondCart = [
    1.99, 13.50, 22.99, 129.00
];

let salesTax = .075;
let total;

let calcShoppingCart = (cartArray) => {
    // console.log(cartArray);
    let subtotal = 0;

    for (cost of cartArray) {
        // console.log(cost);
        subtotal += cost;
    }

    // console.log(subtotal);

    let tax = subtotal * salesTax;
    total = subtotal + tax;
}

calcShoppingCart(firstCart);
console.log(`Total: ${total}`);

calcShoppingCart(secondCart);
console.log(`Total: ${total}`);







// let salesTax = 10;

// function newArr(arr) {
//     let subTotal = 0;
//     for (let i = 0; i < arr.length; i++) {
//         subTotal += arr[i];
//     }
//     let total = subTotal += (1 + salesTax);
//     total = "$" + total.toFixed(2);
//     return total;

// }

// console.log(`Total: ${newArr(firstCart)} `);
// console.log(`Total: ${newArr(secondCart)}`);

/*  
! Challenge
    Provided are two arrays of item expenses held within an "online cart". 

    - Create a variable that represents sales tax. This will need to hold a number. *can be sales tax in your area or a made-up value.

    - Create a variable that will hold the total of this online cart.

    - Create a function that accepts an array as a parameter.
        - generate a subtotal of all the items provided through the array.
        - Update your total variable with the subtotal and sales tax.

    - Invoke your function by passing in the individual arrays provided.

    - Using string interpolation, console log "Total: [cart total]"
        - hint: https://www.w3schools.com/jsref/jsref_tofixed.asp
*/