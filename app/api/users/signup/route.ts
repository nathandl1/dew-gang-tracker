import {connect} from "@/dbConfig/dbConfig"; 
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel"

connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const{username, password} = reqBody
        console.log(reqBody)

        const user = await User.findOne({username})
        if(user){
            return NextResponse.json({error:"User already exists"}, {status:402})
        }

        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password,salt)
        
        const newUser = new User({
            username,
            password: hashedPassword,
            checkmarks: [],
        })

       const savedUser = await newUser.save()
       console.log(savedUser);
       
       return NextResponse.json({message:"User created successfully", success:true, savedUser})
    }catch(error:any){
        return NextResponse.json({error:error.message}, {status:502})
    }
}