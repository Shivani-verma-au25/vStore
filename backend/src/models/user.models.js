import mongoose, {Schema} from 'mongoose'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        trim : true
    },
    email :{
        type :String,
        required : true,
        trim : true
    },
    password : {
        type : String,
        // required : true
    },
    phoneNo : { 
        type : String,
    },
    role : {
        type : String,
        enum : ['user','owner','deliveryPerson']
    },
    resetOpt : {
        type : String
    },
    isOtpVerified : {
        type : Boolean,
        default : false
    },
    optExpires : {
        type : Date
    }
}, {timestamps : true} )



// methos for user

UserSchema.pre("save", async function(next) {
    // if password is not modified return next()
    if(!this.isModified('password')) return next();

    // if password is modified hashed the password
    this.password = await bcrypt.hash(this.password , 10)
    next()
})


// methos for compare password

UserSchema.methods.camparePassword = async function (password) {
    //  if password is not given or empty
    if (!password) {
        console.log("Password is required!");
        return;
    }

    // if password is given than compare it with the stored password
    return bcrypt.compare(password , this.password)
}



// generate token by user's ccredentials

UserSchema.methods.generateToken = async function () {
    return jwt.sign({
        _id : this._id,
        role : this.role,
        email : this.email
    } , process.env.ACCESS_TOKEN , {expiresIn : process.env.ACCESSC_TOKEN_EXPIRE})
    
}

export const User = mongoose.model("User" , UserSchema)