import dotenv from 'dotenv'
import { User } from "../models/user.models.js";
import jwt from 'jsonwebtoken';
import { asyncHandler } from "../utils/asyncHandler.js";

dotenv.config()

export const isAuth = asyncHandler(async (req,res,next) =>{
    try {
        const token = req.cookies.Dtoken || req.header('Authorization')?.replace("Bearer ","");

        // if there is no token 
        if(!token){
            return res.status(400).json({
                success : false,
                message : "You are not authorized to access this resource. Please login ! "
            })
        }

        // there is a token then decode the token and verify it.
        const decoded = await jwt.verify(token ,process.env.ACCESS_TOKEN);
        if (!decoded) {
            return res.status(303).json({
                success : false,
                message : "Token is invalid or expired. Please login again"
            })
        }

        //if token is valid then get the user form token

        const user = await User.findById(decoded._id).select('-password');
        if (!user) {
            return res.status(400).json({
                success : false,
                message  : "User not found!"
            })
        }

        // if user is there create variable and reurn the user to next middlware

        req.user = user;
        next()
        
    } catch (error) {
        console.log("Error in middlerware",error);
        return res.status(500).json({
            success:false,
            message : "Varification faled!"
        })
    }
} )