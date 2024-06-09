import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true, "Please provide an email"],
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Please provide a password"]
    },
    checkmarks:{
        type: [String],
        default: [],
    },
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model("users", userSchema);
export default User;