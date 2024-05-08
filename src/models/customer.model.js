import mongoose , {Schema} from "mongoose";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
const customerSchema = new Schema({
    customerId:{
        type: Number,
        required: true,
        unique: true,
        index: true
    },
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
        trim: true
    }
    password:{
        type: String,
        required: [true, 'Password is required'],
        trim: true
    },
    firstName:{
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        trim: true
    }
},
{
    timestamps: true
})

customerSchema.pre("save", async function(next) {
    if(!this.isModified("password")) return next;

    this.password = bcrypt.hash(this.password,10)
    next()
})

customerSchema.methods.isPasswordCorrect = async function(password){
    return await bcrypt.compare(password,this.password)
}

customerSchema.methods.generateAccessToken = function(){
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
    }
)
}

customerSchema.methids.generateRefreshToken = function(){
    return jwt.sign({
        _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
    }
)
}

export const Customer = mongoose.model("Customer",customerSchema)