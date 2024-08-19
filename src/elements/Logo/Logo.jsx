import Link from "next/link"
import styles from "./logo.module.css"
import { Montserrat } from "next/font/google";








const bodyFont = Montserrat({
    subsets: ["latin"],
    weight: ['400']
});



export default function Logo() {
    return (
        <Link href="/" className={`${styles.logo}  ${bodyFont.className}`}>HEXASHOP</Link>
    )
}
