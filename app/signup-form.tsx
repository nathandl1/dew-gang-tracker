"use client"
import { redirect } from 'next/navigation';
import React from 'react'
import {Button, Input} from "@nextui-org/react";
import Link from 'next/link';
export default function SignUpForm() {
    function authenticate(formData: { get: (arg0: string) => any; }){
        const username = formData.get('username');
        const password = formData.get('password');
        console.log(`Login attempted with ${username} and ${password}`)
        if (username == 'username' && password == 'password'){
          redirect('/User');
        }
    }

  return (
    <form action={authenticate} className='flex flex-col'>
      <h2 className='text-center'>Email</h2>
      <Input type="email"/>
      <h2 className='text-center'>Password</h2>
      <Input type="password"/>
      <Link href='/dashboard'>
        <Button color="primary" variant="shadow" size="lg" className='mt-3'>Continue As Guest</Button>
      </Link>   
    </form>
  )
}