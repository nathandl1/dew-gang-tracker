import {connect} from "@/dbConfig/dbConfig"; 
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel"

connect()

export async function POST(request: NextRequest){
    try{
        const reqBody = await request.json()
        const{id, checkmarks} = reqBody
        console.log(reqBody)
        await User.updateOne({_id:id}, {
            $set:{
                checkmarks:checkmarks
            }
        })
        console.log(User)
        return NextResponse.json({message:"Userdata saved successfully", success:true, User})
    }catch(error:any){
        return NextResponse.json({error:error.message}, {status:503})
    }
}