import styles from "./about.module.css"

export default function AboutSection() {
    return(
        <div className={styles.aboutSection}>
            <h2 className={styles.aboutTitle}>About Me</h2>
            <p className={styles.aboutText}>I am a passionate software engineer with a strong background in full-stack web development. I love building
            innovative and user-friendly applications that solve real-world problems. In my free time, I enjoy exploring
            new technologies, contributing to open-source projects, and staying up-to-date with the latest industry
            trends.</p>
        </div>
    )
}