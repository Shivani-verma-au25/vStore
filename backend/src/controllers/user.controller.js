import { User } from "../models/user.models.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// signUP  controller
export const userSignUp = asyncHandler(async (req, res) => {
  try {
    const { name, email, password, phoneNo, role } = req.body;

    // check the fields is field is not be empty
    if (
      [name, email, password, phoneNo, role].some(
        (field) => typeof field !== "string" || field.trim() === ""
      )
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required!",
      });
    }

    // Name: only alphabets and spaces are valid
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(name)) {
      return res.status(400).json({
        success: false,
        message: "Name should contain only letters and spaces!",
      });
    }

    // Email: basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please enter a valid email address!",
      });
    }

    // Phone: only digits and between 10–15 characters
    const phoneRegex = /^\d{10,15}$/;
    if (!phoneRegex.test(phoneNo)) {
      return res.status(400).json({
        success: false,
        message: "Phone number must be between 10 to 15 digits!",
      });
    }

    // check if user is already exist
    const existedUser = await User.findOne({ email });

    if (existedUser) {
      return res.status(404).json({
        success: false,
        message: "User is already Exist!",
      });
    }

    // if there is no exsited user check password
    if (password.length < 6) {
      return res.status(404).json({
        success: false,
        message: "Password should not be less than 6 character!",
      });
    }

    // creating new user
    const user = await User.create({
      name,
      email,
      password,
      role,
    });

    // check recent user is created or not
    const createdUser = await User.findById(user._id).select("-password");
    if (!createdUser) {
      return res.status(400).json({
        success: false,
        message: "User is not created!",
      });
    }

    // if user created create and set the token
    const Dtoken = await user.generateToken();
    console.log("token", Dtoken);

    const options = {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000, // fot 7 days
    };

    // if user created successfully send the response

    return res.status(200).cookie("Dtoken", Dtoken, options).json({
      success: true,
      message: "You SignUp successfully!",
      createdUser,
    });
  } catch (error) {
    console.log("Error in sign up controller", error);
    return res.status(500).json({
      success: false,
      message: "Failed to Sign up!",
    });
  }
});

// signIn controller

export const userSignIn = asyncHandler(
  asyncHandler(async (req, res) => {
    try {
      const { email, password } = req.body;
      // check fields are not empty

      if ([email, password].some((f) => typeof f !== "string" || f.trim() === "")) {
        return res.status(303).json({
          success: false,
          message: "All fields are required!",
        });
      }

      // Email: basic email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({
          success: false,
          message: "Please enter a valid email address!",
        });
      }


    const existUser = await User.findOne({email});
    if (!existUser) {
        return res.status(400).json({
            success : false,
            message : "This user is not available! Please Signup First... "
        })
    } 


    // compare password if user is there
    const comparedPass = await existUser.camparePassword(password)
    if (!comparedPass) {
        return res.status(400).json({
            success : false,
            message : "Invalid password !"
        })
    } 

    // generate token 
    const Dtoken = await existUser.generateToken()

    const options = {
        httpOnly : true ,
        secure : true,
        sameSite : 'strict',
        maxAge  : 7*24*60*60*1000 // for 7 days
    }

    //  send response if evreything is clear or clear
    return res.status(201)
    .cookie('Dtoken',Dtoken , options)
    .json({
        success : true,
        message : ` ${existUser.name} Welcome Back !`,
        existUser
    })

    } catch (error) {
      console.log("Error in signin controller", error);
      return res.status(500).json({
        success: false,
        message: "Failed to signin user!",
      });
    }
  })
);


// sign out controller

export const userSignOut = asyncHandler( async (req, res) => {
    try {
        // creat token from cookies given in res
        res.clearCookie('Dtoken');
        return res.status(202).json({
            success : true,
            message : "Signed out!"
        })
    } catch (error) {
        console.log("Error signing out in signout controller",error);
        return res.status(500).json({
            success : false ,
            message :"Failed to signout!"
        })
        
    }
})