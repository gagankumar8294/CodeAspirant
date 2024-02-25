import Head from "next/head"
import styles from '../styles/gagan.module.css'

const gagankumar = () => {
    return (
        <>
            <Head>
                <title>CodeAspirant | Gagan Kumar | web developer</title>
                <meta name='keywords' content="codeaspirant | web developer" />
            </Head>
            <div className={styles.container}>
                    <div className={styles.imageContainer}>
                        <img src="/gagan2.jpeg" alt="Gagan Kumar" className={styles.roundImage} />
                    </div>
                    <h1 className={styles.title}>About</h1>
                    <p className={styles.text}>As a web developer, I bring creativity and functionality together.</p>
                    <p className={styles.text}>I strive to create engaging and user-friendly web experiences.</p>
            </div>
        </>
    )
}

export default gagankumar; 