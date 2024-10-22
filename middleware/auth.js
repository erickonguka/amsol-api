const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    // Extract token from cookies
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token is not valid" });
    }
};

// // Middleware to check role
// const checkRole = (roles) => (req, res, next) => {
//     console.log("User role:", req.user.role);
//     const userRole = req.user.role;
//     if (!roles.includes(userRole)) {
//         return res.status(403).json({ message: "Forbidden: You do not have access to this resource." });
//     }
//     next();
// };

module.exports = { auth };
