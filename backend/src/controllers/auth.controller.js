import { asyncHandler } from "../utils/asyncHandler.js";

export const getCurrentUser = asyncHandler(async(req ,res) => {
    try {
        // Assumed that req.user is set byt the isAuth middleware
        const user = req.user;
        if (!user) {
            return res.status(400).json({
                success : false,
                message : "User not Found!"
            })
        } 

        return res.status(201).json({
            success : true,
            message :   `Here is the details of ${user.name}`,
            user
        })

    } catch (error) {
        console.log("Error in getcurrent user in auth controller" , error);
        return res.status(500).json({
            success : false,
            message : "Failed  to get current user!"
        })
        
    }
} )