"use client"
import {useRouter } from 'next/navigation';
import React from 'react'
import {Button, Input} from "@nextui-org/react";
import axios from "axios"

export default function SignUpForm() {
  const router = useRouter();
  const [user, setUser] = React.useState({  
    email:"",
    password:"",
    checkmarks:[],
  })
  const onSignUp = async()=>{
    try{
      const response =  await axios.post("/api/users/signup", user);
      console.log("Sign up success", response.data);
      router.push("/dashboard");
    }catch(error:any){
      console.log("Sign Up Failed", error.message);
    }
  }
  return (
    <form className='flex flex-col items-center w-3/4'>
      <Input type="email" label = "Email" value = {user.email} onChange={(e) => setUser({...user, email: e.target.value})}/>
      <Input type="password" label = "Password" className='pt-5' value = {user.password} onChange={(e) => setUser({...user, password: e.target.value})} onKeyDown={(e) => {if (e.key === 'Enter') {onSignUp()}}}/>
      <Button color="primary" variant="shadow" size="lg" className='mt-3' fullWidth = {true} onClick = {onSignUp}>Register</Button>
    </form>
  )
}