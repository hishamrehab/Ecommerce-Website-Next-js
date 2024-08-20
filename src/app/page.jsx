import Image from "next/image";
import styles from "./page.module.css";
import Hero from "../../public/undraw_experience_design_re_dmqq.svg"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your One commerce destination</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos quia temporibus quis suscipit repellendus, ex dolores quam consectetur fugit beatae, dignissimos magni dolorem pariatur aliquam neque! Illo, quasi. Reiciendis labore modi odit, ut facere corporis provident voluptates tempora at, aliquam, ad veritatis architecto eveniet natus dolores quibusdam? Doloremque, labore iste.</p>
        <button className={styles.button}>Shop Now</button>
      </div>
      <div className={styles.col}>
        <Image src={Hero} alt="Hexa Shop" className={styles.img} />
      </div>

    </div>
  )
}
