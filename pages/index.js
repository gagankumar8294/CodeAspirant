import Head from 'next/head'
// import Navbar from '../comps/Navbar'
// import Footer from "../comps/Footer"
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Subscribe from '../comps/subscribe/Subscribe'

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeAspirant | Home</title>
        <meta name='keywords' contents="codeaspirant" />
      </Head>
      <div style={{paddingTop:"150px"}}>
        <h1>Welcome to code Aspirant</h1>
      </div>
      <div>
        <Subscribe />
      </div>
    </>
  )
}
