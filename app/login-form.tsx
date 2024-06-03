"use client"
import {useRouter } from 'next/navigation';
import React from 'react'
import {Button, Input} from "@nextui-org/react";
import axios from "axios"
export default function LoginForm() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email:"",
    password:"",
  })
  const onLogin = async()=>{
    try {
      const response = await axios.post("api/users/login", user)
      console.log("Login Success", response.data);
      router.push("/dashboard")
    }catch(error:any){
      console.log("Login failed", error.message);
    }
  }
  return (
    <form className='flex flex-col items-center w-3/4'>
      <Input type="email" label = "Email" value = {user.email} onChange={(e) => setUser({...user, email: e.target.value})} isRequired = {true}/>
      <Input type="password" label = "Password" className='pt-5' value = {user.password} onChange={(e) => setUser({...user, password: e.target.value})} isRequired = {true} />
      <Button color="primary" variant="shadow" size="lg" className='mt-3'fullWidth = {true} onClick = {onLogin}>Login</Button>
    </form>
  )
}