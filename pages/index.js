import Head from 'next/head'
// import Navbar from '../comps/Navbar'
// import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeAspirant | Home</title>
        <meta name='keywords' contents="codeaspirant" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>started server on 0.0.0.0:3000 url httplocalhos3000</p>
        <p className={styles.text}>event  compiled client and server successfully in 3.4s 164 modules</p>
        <p className={styles.text}>wait compiling client and server event compiled client and server successf</p>
        <Link className={styles.btn} href="/blog">CodeAspirant just get started</Link>
      </div>
    </>
  )
}
