import React from "react";
import styles from "./page.module.css"
import Image from "next/image"
import blogIamge from "/public/pexels-photo-261579.jpeg"



async function getData(id) {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json();
}




export default async function Post({ params }) {

    const product = await getData(params.id);

    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.desc}>{product.description}</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={product.thumbnail} alt={product.title} fill={true} className={styles.postImage} />
                    <span className={styles.author}>Hisham Rehab</span>
                </div>

            </header>
            <div className={styles.content}>
                <div className={styles.gallery}>
                    {product.images.map((image) => (
                        <Image key={product.id} src={image} width={100} height={100} alt={product.title} />
                    )
                    )}
                </div>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum, voluptates ea, eveniet corrupti beatae dolorum sapiente fuga quisquam doloremque ex, enim error maiores? Molestias id quo quasi laborum qui dolore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, nostrum recusandae? Harum dolor non neque ipsum tempora voluptates eos eaque, fugit sit quisquam, magnam dolorum enim. Atque dignissimos molestiae quisquam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis fugit expedita, quod perspiciatis velit delectus voluptatibus natus at. Obcaecati maxime officiis beatae neque dolor illum quae atque accusantium aliquid voluptatum. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non aspernatur optio, minus repudiandae eius porro, saepe corrupti ipsam voluptates odio quibusdam. Repellat error sint ipsam nemo alias! Alias, rem beatae. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi architecto in vitae atque dolore voluptatibus, commodi placeat voluptas quod earum sapiente harum aliquid dignissimos, quas officiis ipsam modi fugit veniam?    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, veniam at amet error architecto est fuga molestias repellendus ex ipsum quas vel in omnis, obcaecati asperiores doloremque necessitatibus deserunt corrupti. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa consequatur ipsum, totam asperiores mollitia officiis voluptate ratione dolorum veritatis suscipit voluptatum nulla expedita eligendi id, cupiditate quod amet similique minus? Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi accusantium illo perferendis reiciendis, beatae, ea consectetur laboriosam repellendus placeat nisi in quidem qui dicta dolor, culpa laborum maiores nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit. Error veniam aut unde minima eaque similique voluptatum dolorum, praesentium voluptas ab laudantium porro voluptatem eligendi, eius impedit alias necessitatibus expedita labore?
                </p>
            </div>
        </div>
    )
}