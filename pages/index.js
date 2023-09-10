import Head from 'next/head'
// import Navbar from '../comps/Navbar'
// import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Subscribe from '../comps/subscribe/Subscribe'
import AutoTypingText from '../comps/AutoTypingText';
import Image from 'next/image';
import c from ".././public/homepage/c.gif";


const textList = ['Learn Web Development', 'Learn Essential Tech Tricks', 'We Provide Website Services',]


export default function Home() {
  return (
    <>
      <Head>
        <title>CodeAspirant | Home</title>
        <meta name='keywords' contents="codeaspirant" />
      </Head>
      <div style={{paddingTop:"150px"}} className={styles.container}>  
        <div className={styles.leftDiv}>
          <p className={styles.dynamic_text} ><span  style={{color: "#f2f2f2", fontWeight: "bold",}}></span>Welcome to Code Aspirant</p>
          <p className={styles.dynamic_text2} >
            <span className={styles.text_bar_pulse}style={{ color: "#f2f2f2", fontWeight: "bold" }}>|</span> <AutoTypingText textList={textList} typingDelay={100} erasingDelay={30} pauseDelay={1500} />
          </p>
          <div className={styles.main_link}>
            <Link className={styles.button_1} href="/blog">Explore Blog</Link>
            <Link className={styles.button_2} href="/videos">Get Started</Link>
          </div>
        </div>
        <div className={styles.rightDiv} style={{width:"50%"}}>
          <Image src={c} width={300} height={400} alt="CodeAspirant" />
        </div>  
      </div>
      <div>
        <Subscribe />
      </div>
    </>
  )
}
