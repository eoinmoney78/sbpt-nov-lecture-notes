const jwt = require('jsonwebtoken');

const User = require('../models/user.model');
const validateSession = async (req, res, next) => {

    try {


        // Middleware still has access to the req, res, and requires the next() function to move passed



        // 1. token provided by request object (headers.authorization)

        const token = req.headers.authorization;
        // if (token) {
        //     console.log(`token: ${token} `);
        // } else {
        //     console.log('Authorization header not found');
        // }


        //     // 2. Check the status of the token. (expired?)
        const decoded = await jwt.verify(token, process.env.JWT);
        console.log(decoded);


        const user = await User.findById(decoded.id);
        if (!user) throw new Error("User not found!");
        // console.log(user);

        req.user = user;
        // 3. Provide response - if valid , generate a variable that holds user info

        //     // 4. Move past  middleware and onto our routes.

        return next();

    } catch (err) {
        res.join({ message: err.message });
    }

}
module.exports = validateSession;