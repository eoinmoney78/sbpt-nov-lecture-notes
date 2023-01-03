// ! Promise 
/* 

   3 States:
          - Pending;
           - Fulfilled:
            - Rejected:
    Is an object that may produce a singular value in the future.
    - Always returns an object


Takes in two parameters
                   -Resolve
                   -Reject
            
- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises

*/



// * Mock Internet send


// function getData() {
//     setTimeout(() => {
//         return "some data";
//     }, 3000)
// }
// let data = getData(); // the value comes "late" - 3 seconds
// console.log('Data: ', data); // We get an undefined because the information is delayed when it is compiled.

// function getData(cb) {

//     setTimeout(() => {
//         cb("some Data from CB")
//     }, 3000);

// }
// getData(data => console.log(data));
// console.log("hello world");





/* 
* A promise is an object that may produce a singular value in the future
*/

function returnData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (true) {
                resolve('some data from Promise');
            } else {
                reject('This is a rejection');
            }
        }, 3000);
    })
}
// console.log(returnData());



/* 
!  Resolvers

    
    - When returned, the returnData() func. will return a Promise instead of a given string.
      

    - Chained with a resolver
      - Keywords : 
      - .then()
             If success
             can be chained together
                - .catch()
                    If error
            - Takes in a callback function
            - only put the semicolon (;) after the last resolver
promiseResults.then().then().then().catch();
            
*/

returnData()
    .then(data => console.log('From response: ', data))
    .then(() => {
        let x = 10;
        let y = 20;
        console.log(x + y);
    })
    .catch(function (err) {
        console.error(err);
    });