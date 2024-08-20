import React from "react";
import styles from "./page.module.css"
import Image from "next/image"
import blogIamge from "/public/pexels-photo-261579.jpeg"

export default function Post() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <div className={styles.info}>
                    <h1 className={styles.title}>Hello Next JS</h1>
                    <p className={styles.desc}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti non, esse reprehenderit delectus culpa repellat provident labore vero enim, officiis ab, earum accusamus mollitia dicta voluptatum consequuntur perferendis accusantium rerum.</p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={blogIamge} alt="post image" fill={true} className={styles.postImage} />
                    <span className={styles.author}>Hisham Rehab</span>
                </div>

            </header>
            <div className={styles.content}>
                <p className={styles.text}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae corrupti, unde commodi, eaque itaque animi natus dolorum dolores placeat reprehenderit sunt fugit non sapiente quia deleniti nulla possimus assumenda repellendus!   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum ipsa adipisci sapiente nesciunt repudiandae quo, in minima ad praesentium eius ullam laboriosam maiores quasi totam possimus sunt dolor deleniti provident.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis rem cupiditate tempora porro soluta labore perspiciatis odio expedita itaque animi ut, quam sint architecto laboriosam aspernatur, nesciunt excepturi nam mollitia!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem explicabo, minima cumque voluptas maxime facere laborum debitis! Ratione velit adipisci laboriosam accusamus tenetur? Exercitationem non iure quam et nobis minus.   Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque aperiam aut voluptates, accusantium eius, ab corporis quia sit autem vero aliquam quo recusandae aspernatur veritatis porro corrupti facilis vel ipsam.  </p>
            </div>
        </div>
    )
}