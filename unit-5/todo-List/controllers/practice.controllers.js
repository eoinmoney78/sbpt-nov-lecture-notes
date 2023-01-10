const router = require('express').Router();// create a variable  -> import Router engine fro express.


router.get('/hello-world', (req, res) => {
    /* 
        - the pathway noted as a string
        - a callback function to handle the request and response
            - req, res
    */
    res.send("hello World");
});


/* 
    - Request Type: POST
    - Endpoint: "greeting"
    - Send: "Good Afternoon!"
    - Test: Postman
        *hint: 
*/
router.post('/greeting', (req, res) => {
    res.send('Good Afternoon!');
});
module.exports = router; // don't Forget to export the define route.