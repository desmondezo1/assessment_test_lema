const jwt = require('jsonwebtoken');
const ApiResponse = require('../utils/apiResponse');

const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json(ApiResponse.error('No token provided', 401));
        }

        const token = authHeader.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded; 
        next();
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json(ApiResponse.error('Token expired', 401));
        }
        if (err.name === 'JsonWebTokenError') {
            return res.status(401).json(ApiResponse.error('Invalid token', 401));
        }
        next(err); 
    }
};

module.exports = authenticate;
