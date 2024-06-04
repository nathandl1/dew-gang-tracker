import styles from "./login.module.css"
import LoginForm from './login-form'
import { Button } from "@nextui-org/button";
import Link from "next/link";
export default function Home() {
  return (
    <main className="flex h-100vh flex-col">
      <div className={styles.Background}>
      </div>
      <div className={styles.form}>
        <h1>DewFish</h1>
        <br/>
        <LoginForm/>
        <Link href='/signup' className="w-3/4">
          <Button color="primary" variant="shadow" size="lg" className='mt-3' fullWidth = {true}>Sign Up</Button>
        </Link> 
        <Link href='/guest-dashboard' className = "w-3/4">
          <Button color="primary" variant="shadow" size="lg" className='mt-3' fullWidth = {true}>Continue As Guest</Button>
        </Link>   
      </div>
    </main>
  );
}
