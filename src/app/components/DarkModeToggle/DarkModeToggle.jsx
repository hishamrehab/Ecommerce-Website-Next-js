import React from 'react'
import styles from "./DarkModeToggle.module.css"

const DarkModeToggle = () => {
    const mode = "dark"

    return (
        <div className={styles.switch}>
            <div className={styles.icon}>🌙</div>
            <div className={styles.icon}>🌕</div>
            <div
                style={
                    mode === "dark" ? { left: "2px" } : { right: "2px" }
                }
                className={styles.switcher} />
        </div>
    )
}

export default DarkModeToggle