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
    forgotPasswordToken: String,
    forgotPasswordTokenExpiry: Date,
    verifyToken: String,
    verifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model("User", userSchema);

export default User;