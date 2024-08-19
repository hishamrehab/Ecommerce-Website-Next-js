import Link from "next/link"
import styles from "./Navbar.module.css"
import { links } from "./data"
const Navbar = () => {
    return (
        <div className={styles.container}>
            <Link href="/" className={styles.logo}>HEXASHOP</Link>
            <div className={styles.links}>
                {links.map((link) => {
                    return (
                        <Link key={link.id} href={link.url} className={styles.link}>{link.title}</Link>
                    )
                })}


            </div>
        </div>
    )
}

export default Navbar
