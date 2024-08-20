import Link from "next/link";
import BlogImage from "/public/pexels-photo-261579.jpeg";
import Image from "next/image";
import styles from "./page.module.css"
export default function Blog() {
    return (
        <div className={styles.mainContainer}>

            <Link href="blog/id" className={styles.post}>
                <div className={styles.container}>
                    <Image src={BlogImage} width={350} height={250} alt="post image" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Post Title</h1>
                    <p className={styles.text}>Post Text</p>
                </div>
            </Link>


            <Link href="/id" className={styles.post}>
                <div className={styles.container}>
                    <Image src={BlogImage} width={350} height={250} alt="post image" />
                </div>
                <div className={styles.content}>
                    <h1 className={styles.title}>Post Title</h1>
                    <p className={styles.text}>Post Text</p>
                </div>
            </Link>

        </div >
    )
}