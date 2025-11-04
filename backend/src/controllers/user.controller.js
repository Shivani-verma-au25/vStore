import { User } from '../models/user.models.js';
import {asyncHandler} from '../utils/asyncHandler.js'

// user registered 
export const regiterUser = asyncHandler( async (req , res) => {
    try {
        const {name ,email ,password,phone,secretCode } = req.body;
        
        //check if all fileds are provided
        if([name ,email ,password].some((field) => field.trim() === '' )){
            return res.status(401).json({
                success :false,
                message :"Please provide all fields!"
            })
        }

        if(password.length <6){
            return res.status(401).json({
                success : false,
                message :"Please provide password with minimum 6 characters!"
            })
        }

        //check if user already exists
        const existedUser = await User.findOne({email}).select('password');

        if(existedUser ){
            return res.status(400).json({
                success: false,
                message : "User is already registerd with this email!"
            })
        }

        // register as a role
        const role = secretCode === process.env.ADMIN_SECRET_CODE ? 'admin' : 'user';

        //create user
        const user = await User.create({
            name,
            email,
            password,
            phone,
            role 
        })

        // check user created or not
        const createdUser = await User.findById(user._id).select('-password');
        if(!createdUser){
            return res.status(400).json({
                success :false,
                message :'Failed to create user!'
            })
        }
        // send response with created user
        return res.status(200).json({
            success :true,
            message :`${name} registered successfully`,
            createdUser
        })

    } catch (error) {
        console.log("error in register user controller" , error);;
        return res.status(500).json({
            success : false,
            message :"Failed to register !"
        })
        
    }
})

// user login

export const loginUser = asyncHandler ( async (req, res) => {
    try {
        const {email ,password} = req.body;
        
        if ([email , password].some((field) => field.trim() === '' )){
            return res.status(400).json({
                success : false,
                message : "All fields are required !"
            })
        }

        const user = await User.findOne({email})

        if (!user) {
            return res.status(401).json({
                success : false,
                message : "User not find!"
            })
        }       

        const isPasswordValid = await user.isPasswordCorrect(password)
        if (!isPasswordValid) {
            return res.status(404).json({
                success : false,
                message : "Email or password is incorrect"
            })
        }

        // send cookies
        const token = await user.generateAccessToken()
        const options = {
            httpOnly : true,
            secure : true
        }

        return res.status(200)
        .cookie('vStore' , token , options)
        .json({
            success :true,
            message : `Welcome back ${user.name}`,
            user
        })
        

    } catch (error) {
        console.log("Error in login user" ,error);
        return res.status(500).json({
            success : false,
            message : "Failed to login !"
        })
        
    }
}) 

// logout user

export const logoutUser = asyncHandler( async (req, res) => {
    try {
        res.clearCookie('vStore' ,{
            httpOnly : true,
            secure : true
        })

        return res.status(200).json({
            success :true,
            message : 'User logged out'
        })
        
    } catch (error) {
        console.log("error in logout controller" ,error);
        return res.status(500).json({
            success :false,
            message :"Failed to logout"
        })
        
    }
})


// get users profile

export const getProfile = asyncHandler( async (req, res) =>{
    try {
        const {_id} = req.user;
        
        const user = await User.findOne(_id).select('-password');
        if (!user) {
            return res.status(301).json({
                success : false,
                message : 'User not found !'
            })
        }

        return res.status(200).json({
            success : true,
            message : "User profile found ",
            user
        })

    } catch (error) {
        console.log("Error in getting profile" ,error);
        return res.status(500).json({
            success : false ,
            message : "Error to get Profile"
        })
        
    }
} )

// update profile

export const updateUserProfile = asyncHandler( async (req, res) => {
    try {
        const userid = req.user._id;
        const {name,phone } = req.body;

        if ([name,phone].some((field) => field.trim()=== '')) {
            return res.status(400).json({
                success : true,
                message : "All fields are rquired !"
            })   
        }

        const user = await User.findById(userid).select('-password')
        console.log("user",user);
        if (!user) {
            return res.status(300).json({
                success:  false,
                message:"User not Found"
            })
        }

        user.name = name ?? user.name,
        user.phone = phone ??  user.phone

        const updateUser = await user.save();

        return res.status(200).json({
            success : true,
            message : 'Profile updated',
            updateUser
        })
        
    
        





    } catch (error) {
        console.log("error in update user's profile",error);
        return res.status(400).json({
            success: false ,
            message :"Failed to update profile!"
        })
        
    }
})