import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import AutoTypingText from '../comps/AutoTypingText';
import Image from 'next/image';
import c from ".././public/homepage/c.gif";
import Services from '../comps/Services/Services.js';
import Help from '@/comps/WhoWeHelp/Help';
import Project from '@/comps/Projects/Projects';

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
          <h4 className={styles.dynamic_text} >Welcome to<span className={styles.main_title}>Code Aspirant</span></h4>
          <h2>Code Aspirant</h2>
          <p className={styles.dynamic_text2} >
            <span className={styles.text_bar_pulse}style={{ color: "#f2f2f2", fontWeight: "bold" }}>|</span> <AutoTypingText textList={textList} typingDelay={100} erasingDelay={30} pauseDelay={1500} />
          </p>
          <div className={styles.intro_para}>
            <p>
              With 3 years of expertise in Web Design & Development, we teach you everything from scratch and share essential tech tricks to make your life easier and more efficient
            </p>
            <h4 className={styles.services}>
              We are Open for<span style={{color:'yellow'}}> Website Design Services</span>
            </h4>
          </div>
          <div className={styles.main_link}>
            <Link className={styles.button_1} href="/blog">Explore Blog</Link>
            <Link className={styles.button_2} href="/videos">Get Started</Link>
          </div>
        </div>
        <div className={styles.rightDiv} style={{width:"50%"}}>
          <Image src={c} width={300} height={400} alt="CodeAspirant" />
        </div>  
      </div>
      {/* <div  className={styles.subscribe} style={{marginTop:"100px"}}>
        <Subscribe />
      </div> */}
      <Services />
      <Help />
      <Project />
    </>
  )
}
