/*const jwt = require("jsonwebtoken");

function auth(req, res, next) {
    try {
        const token = req.cookies.token;

        if(!token) return res.status(401).json({errorMessage: "Unauthorized"});    
    
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified.user;

        next();
    
    }catch (err){
        console.error(err);
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth; */

const jwt = require("jsonwebtoken");
function auth(req, res, next) {
    try {
        const token = req.cookies.token;
        console.log("Token:", token); // Log token

        if(!token) return res.status(401).json({errorMessage: "Unauthorized"});    
    
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Verified user:", verified.user); // Log verified user
        req.user = verified.user;
        res.locals.user = req.user;

        next();
    
    }catch (err){
        console.error(err);
        res.status(401).json({errorMessage: "Unauthorized"});
    }
}

module.exports = auth;

