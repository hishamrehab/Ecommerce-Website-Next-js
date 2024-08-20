import styles from "./footer.module.css"
import { socialmedia } from "./data"

const Footer = () => {
    return (
        <div className={styles.footer} sr>

            <div>
                ©2024 Hexashop. All rights reserved.
            </div>
            <div className={styles.social}>

                {socialmedia.map((media) => (
                    <span key={media.id} className={styles.icon}>{media.icon}</span>
                ))}
                {/* <FaFacebook className={styles.icon} />
                <FaInstagram className={styles.icon} /> */}
            </div>


        </div>


    )
}

export default Footer
