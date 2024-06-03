import Image from "next/image";
import styles from "../login.module.css"
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
          width={7680}
          height={4320}
          className='z-0'
          style={{objectFit: "cover"}}
        />
      </div>
      <div className={styles.form}>
        <h1>DewFish</h1>
        <br/>
        <SignUpForm/>
        <Link href='/dashboard' className="w-3/4">
          <Button color="primary" variant="shadow" size="lg" className='mt-3' fullWidth = {true}>Continue As Guest</Button>
        </Link>   
      </div>
    </main>
  );
}