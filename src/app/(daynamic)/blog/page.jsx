import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css"



async function getData() {
    const res = await fetch('https://dummyjson.com/products')
    if (!res.ok) {

        throw new Error('Fail to fetch data ')
    }
    return res.json();
}


export default async function Blog() {

    const data = await getData();
    const products = data.products;




    return (
        <div className={styles.mainContainer}>


            {products.map((product) => (
                <Link href={`blog/${product.id}`} className={styles.post} key={product.id}>
                    <div className={styles.imageContainer}>
                        <Image className={styles.Image} src={product.images[0]} width={350} height={250} alt="post image" />
                    </div>
                    <div className={styles.content}>
                        <h1 className={styles.title}>{product.title}</h1>
                        <p className={styles.text}>{product.description}</p>
                    </div>
                </Link>
            ))}




        </div >
    )
}