import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Help from '@/comps/WhoWeHelp/Help';
import serstyles from '../styles/HomePage/servicesSection.module.css';
import Link from "next/link"
import Subscribe from '../comps/subscribe/Subscribe'
import AutoTypingText from '../comps/AutoTypingText';
import Image from 'next/image';
import c from ".././public/homepage/c.gif";
import Services from '@/comps/Services/Services';
import Wave from '@/comps/Wave/Wave';
// import PopupForm from '../comps/Animation/PopupForm';
const textList = ['Learn Web Development', 'Learn Essential Tech Tricks', 'We Provide Website Services',]

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeAspirant - Professional Web Developer in Bangalore | Web Design & Website Services</title>
        <meta name='keywords' content='CodeAspirant, web developer in Bangalore,web designer in Bangalore, web designer, website creator, web design services, website development' />
        <meta name='description' content='CodeAspirant offers professional web development and design services in Bangalore. Learn web development, explore tech tricks, and avail our website creation services.' />
      </Head>
      <div style={{paddingTop:"150px"}} className={styles.container}>  
      {/* <PopupForm /> */}
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
          <Image src={c} width={300} height={400} alt="Web Development and Design by CodeAspirant" />
        </div>  
      </div>
      {/* Wave SVG */}
      <Wave />
      <Services />
      {/* Who we help section */}
      <Help/>
      <div  className={serstyles.subscribe} style={{marginTop:"100px"}}>
        <Subscribe />
      </div>
    </>
  )
}
