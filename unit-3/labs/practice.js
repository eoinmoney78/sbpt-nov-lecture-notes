// !count Loop
// function numbers() {
//     for (i = 0; i <= 10; i++) {
//         console.log(i);
//     }

// } console.log(numbers());


// let arr = ['this', 'is', 'really', 'cool'];



// //!list out individual values of array.
// function newArray() {
//     // for (i = 0; i < arr.length; i++) {
//     //     console.log(arr[i]);
//     // }

//     for (a of arr) {
//         console.log(a);
//     }
// } newArray();


// let arr = ['ham', 'cheese', 'turkey', 'bacon'];
// function newArray() {
//     for (a of arr) {
//         console.log(a);
//     }
//     for (a in arr) {
//         console.log(arr.join(" "));
//     }



// } newArray();







// let pound = ['money', 'loot', 'cash', 'moola'];
// function newPound() {

//     console.log(pound.join(" "));
//     for (pound of pound) {
//         console.log(pound);
//     }
// } newPound();


// let catArray = ['tabby', 'randy', 'burmese', 'maine coon', 'rag doll'];
// for (cat in catArray) {
//     console.log(catArray[cat]);
// }
// for (cat of catArray) {
//     if (cat === 'tabby') {
//         console.log(cat);
//     } else {
//         console.log('Not Tabby');
//     }

// }


// !     function with parameters.....
// function music(song, year) {
//     console.log(`ChestNuts roasting on an open fire ${song}:From the ${year} release`)
// } music('love ya', 1989);



// function order(ticket) {
//     console.log(`I exchanged my ticket fo a ${ticket}.`)
// }
// order('cheese pizza');


// ! expression function 


// let volume = function (l, w, h) {
//     let total = l * w * h;
//     return total;
// }

// let recOne = volume(3, 5, 7);
// let recTwo = volume(7, 2, 5);


// console.log("rec One:", recOne);
// console.log("Rec Two:", recTwo);



// let size = function (l, w, h) {
//     let total = l + w + h;
//     return total;
// }
// let sideOne = volume(4, 4, 6);
// let sideTwo = volume(3, 7, 9);
// console.log("Side One:", sideOne);
// console.log("sideTwo:", sideTwo);


// function coffeeMaker(filter) {
//     return `A full pot of ${filter}!`;
// }
// let mon = coffeeMaker('coffee');
// let tues = coffeeMaker('tea');
// let weds = coffeeMaker('green tea');
// let thurs = coffeeMaker('OrangeJuice');

// console.log(tues);
// console.log(mon);
// console.log(weds);
// console.log(thurs);


// ! Arrow function

// concise body


// let total = () => 2 + 2;
// let isFour = total();
// console.log(isFour)


//  block body

// let apples = qty => {
//     return `there ar ${qty} apples.`
// }
// let appleCount = apples(4);
// console.log(appleCount);


// concise 

// let apples2 = qty => `There are ${qty} apples`;
// let newAppleCount = apples2(isFour);
// console.log(newAppleCount);



// let calc = (x, y) => x + y;
// console.log(calc(3, 4));

// // block
// let calc2 = (x, y) => {
//     return x + y;
// }
// console.log(calc2(5, 5));



// let grade = (a) => {
//     if (a >= 70) {
//         console.log('P');
//     } else {
//         console.log('F');
//     }
// }




// grade(80);



// ! DO WHILE LOOP

// let conditions = ['sunny', 'rain', 'snow', 'humid', 'rain', 'snow', 'humid', 'windy', 'rain', 'snow', 'humid', 'windy'];
// let number = 0;
// // let weather = 'sunny';


// do {
//     console.log(conditions[number]);
//     number++;
//     if (conditions[number] === "snow") {
//         number++;
//         continue;
//     }
// } while (number < conditions.length);
// console.log(number);



// !       Challenge  online cart..........

// const firstCart = [4.50, 3.25, 14.99, 25.99, 42.99];


// const secondCart = [1.99, 13.50, 22.99, 129.00];

// let salesTax = 0.06;

// let total;

// let calcShoppingCart = (cartArray) => {
//     let subTotal = 0;
//     // console.log(cartArray);
//     for (cost of cartArray) {
//         subTotal += cost;
//     }
//     console.log(subTotal);
//     let tax = subTotal * salesTax;
//     total = subTotal + tax;


// }
// calcShoppingCart(firstCart);
// console.log(`Total: $ ${total.toFixed(2)}`)
// calcShoppingCart(secondCart);
// console.log(`Total: $${total.toFixed(2)}`);

// !               Factory Functions

// const circle = {
//     radius: 1,
//     location: {
//         x: 1,
//         y: 1
//     },
//     isVisible: true,
//     draw: function () {
//         console.log('draw');
//     }


// };


function createCircle(radius) {
    return {
        radius,

        draw() {

            console.log('draw');
        }

    };
}

const myCircle = createCircle(1);

//   Constructor Function

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}
const circle = new Circle(1);