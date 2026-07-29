import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config()

function AuthenticateToken(req,res,next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({
             message: 'Unauthorized. No token provided.'
        })
    }

try {
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_KEY);
        req.user = decoded; // Save user info in the request

    next(); // Continue to the next middleware or route
    
} catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
    
}


}

export default AuthenticateToken