import Nav from "../components/guestsidenav";
import styles from "../login.module.css"
export default function Layout({children}: {children:React.ReactNode}){
    return (
        <div className={styles.Background}>
            <div className='flex h-screen flex-col md:flex-row'>
                <div className="w-full">
                    <Nav/>
                    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
                </div>
            </div>
        </div>
    );
}