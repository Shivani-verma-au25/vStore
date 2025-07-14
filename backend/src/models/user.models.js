import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    userImage:{
        type:String,
        default : ''
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    phone: {
      type: String,
      default: "",
    },
    wishlist: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
      },
    ],
  },
  { timestamps: true }
);


userSchema.pre('save', async function (next){
    if(!this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password,10);
    next();
 
} )

// ,ethod to check if password is correct
userSchema.methods.isPasswordCorrect = async function(password) {
    return await bcrypt.compare(password , this.password)
}

// generate a jwt token

userSchema.methods.generateAccessToken =  function(){
  console.log("accessToken",process.env.ACCESS_TOKEN);
    return jwt.sign({
        _id : this._id,
        role:this.role,
        } ,
         process.env.ACCESS_TOKEN , 
         {expiresIn:process.env.ACCESSC_TOKEN_EXPIRE}
    )};

export const User = mongoose.model("User",userSchema)
