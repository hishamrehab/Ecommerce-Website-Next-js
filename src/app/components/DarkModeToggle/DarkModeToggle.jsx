"use client"
import React, { useContext } from 'react'
import styles from "./DarkModeToggle.module.css"
import { ThemeContext } from '@/context/ThemeContext'

const DarkModeToggle = () => {
    const { mode, toggle } = useContext(ThemeContext);
    return (
        <div className={styles.switch} onClick={toggle}>
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