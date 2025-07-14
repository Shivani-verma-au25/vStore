import {asyncHandler} from '../utils/asyncHandler.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../models/user.models.js';


export const ProtectedRoute = asyncHandler( async (req , res ,next ) => {
        const token = req.cookies.vStore || req.header("Authorization")?.replace('Bearer ' ,"");
        if (!token) {
            return res.status(401).json({
                success : false,
                message : "You are not authorized to access this resource. Please login ! "
            })
        }

        //  if token is there

        try {
            // verify token
            const decodedToken = await jwt.verify( token , process.env.ACCESS_TOKEN);
            if (!decodedToken || !decodedToken._id) {
                return res.status(404).json({
                    success : false ,
                    message : "Invalid token Please login!"
                })
            }


            // token valid find user

            const existUser = await User.findById(decodedToken._id).select('-password')
            if (!existUser) {
                return res.status(303).jsons({
                    success : false,
                    message : "User not found"
                })
            }

            req.user = existUser;
            next()
            
            
        } catch (error) {
            console.log("Error in protecte routes" ,error);
            return res.status(500).json({
                success : false,
                message : "Internal server error "
            })
            next()  
        }
})