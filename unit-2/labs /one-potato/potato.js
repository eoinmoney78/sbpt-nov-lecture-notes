// Create the potatoPoem function

//     Declare a function named potatoPoem
//     Within potatoPoem's code block, create a count variable that starts at 0.
//     Within potatoPoems code block, create a while loop whose conditional statement tells the loop to run while count is less than 8.

function potatoPoem() {
    let count = 0;


    while (count < 60) {
        count++;
        if (count == 8) {
            console.log('More!');

        } else if (count == 4) {
            console.log('4!');

        } else if (count % 14 == 0) {
            console.log('Yummy cheese Potatoes')
        } else {

            console.log(count + '', 'potato');
        }
    }

}
potatoPoem();


















// Compose the while (count < 8) loop

//     Within our while loop's code block, reassign count to be count incremented by one.
//     Within our while loop's code block, set up an if statement whose conditional statement checks if count is equal to 8.
//     Within the if's code block, print "More!" to the console.
//     Attach an else if to the end of our if block. This else if should have a conditional statement that checks if count is equal to 4.
//     Within the else if block, print "4!" to the console.
//     Attach an else to the end of our else if block.
//     Within the else block, log the concatenation of count and "potato,".

// Invoke potatoPoem

//     Below the potatoPoem code block, call potatoPoem().
//     Run your program in the terminal and determine if the output is as expected.

// Review

// In this lab, we have built a piece of software that prints a counting poem to the terminal. The poem should:

//     Print "More!" when count is 8and stop looping.
//     Print "4!" when count is 4.
//     Otherwise, print the current value of count and "potato,".

// Going Further

// To take your software further:

//     Extend the poem by changing while's conditional statement to a higher number.
//     Add additional logs to print on more numbers.
//     Using potatoPoem as a reference, create your own counting poem within the same file.
//     Create the poem without the while loop.