import Image from "next/image";
import styles from "./login.module.css"
import Card from "@nextui-org/react"
import SignUpForm from './signup-form'
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-100vh flex-col">
      <div className={styles.Background}>
        <Image 
          src={'/Images/Background.png'} 
          alt={''}
          width={2000}
          height={1920}
          className='z-0'
          style={{objectFit: "cover"}}
        />
      </div>
      <div className={styles.rightside}>
        <h1 className = "text-lg md:text-4xl">PlaceHolder</h1>
        <br/>
        <SignUpForm />
      </div>
    </main>
  );
}
