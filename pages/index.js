import Head from 'next/head'
// import Navbar from '../comps/Navbar'
// import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import serstyles from '../styles/HomePage/servicesSection.module.css';
import Link from "next/link"
import Subscribe from '../comps/subscribe/Subscribe'
import AutoTypingText from '../comps/AutoTypingText';
import Image from 'next/image';
import c from ".././public/homepage/c.gif";

import PopupForm from '../comps/Animation/PopupForm';
const textList = ['Learn Web Development', 'Learn Essential Tech Tricks', 'We Provide Website Services',]


export default function Home() {
  return (
    <>
      <Head>
        <title>CodeAspirant - Professional Web Developer in Bangalore | Web Design & Website Services</title>
        <meta name='keywords' content='CodeAspirant, web developer in Bangalore, web designer, website creator, web design services, website development' />
        <meta name='description' content='CodeAspirant offers professional web development and design services in Bangalore. Learn web development, explore tech tricks, and avail our website creation services.' />
      </Head>
      <div style={{paddingTop:"150px"}} className={styles.container}>  
      <PopupForm />
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
    <div className={serstyles.waveContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className={serstyles.wave}
      >
        <path
          fill="#FFFF00" // Adjust to your branding color
          d="M0,64L80,85.3C160,107,320,149,480,160C640,171,800,149,960,133.3C1120,117,1280,107,1360,101.3L1440,96V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0V64Z"
        ></path>
      </svg>
    </div>


      {/* New Section for SEO-Optimized Content */}
      {/* <div className={serstyles.servicesSection}>
        <h2>Our Services</h2>
        <p>
          At CodeAspirant, we specialize in creating modern, responsive websites tailored to your needs. Whether you need a portfolio, business website, or an e-commerce platform, we have the expertise to bring your vision to life.
        </p>
        <ul>
          <li><strong>Website Design:</strong> Custom designs that reflect your brand’s identity.</li>
          <li><strong>Web Development:</strong> Developing websites with clean, efficient code.</li>
          <li><strong>SEO Optimization:</strong> Ensuring your website ranks well on search engines.</li>
          <li><strong>Website Maintenance:</strong> Keeping your website up-to-date and running smoothly.</li>
        </ul>
        <h3>Why Choose Us?</h3>
        <p>
          Based in Bangalore, we offer personalized web development and design services that cater to local businesses. Our commitment to quality and customer satisfaction sets us apart.
        </p>

        <div className={serstyles.ctaSection}>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact CodeAspirant today to discuss your web development needs. Whether you need a brand-new website or want to revamp an existing one, we’re here to help.
          </p>
          <Link href="/contact" className={serstyles.contactLink}>Get in Touch</Link>
        </div>
      </div> */}
      <div  className={serstyles.subscribe} style={{marginTop:"100px"}}>
        <Subscribe />
      </div>
    </>
  )
}
