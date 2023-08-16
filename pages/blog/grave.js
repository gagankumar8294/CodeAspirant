import React from 'react';
import styles from "../../styles/Blog.module.css";
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';

const Grave = () => {
  const [isClient, setIsClient] = useState(false);
  

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }
  return (
    <div style={{paddingTop:"150px"}}>
      <div>
        <p className={styles.publish}>Published on December 5, 2022 In Endless Origins</p>
        <h1 className={styles.main_heading}>Another Product Joins the Google Graveyard</h1>
        <p className={styles.paragraph}>More apps have joined the Google Graveyard, what’s the reason?</p>
      </div>
      <div style={{textAlign:"center",marginTop:"20px",marginBottom:"20px"}}>
        <p>social icons here</p>
      </div>
      <section>
        <div className={styles.social}>
          <ul>
            <li>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
              <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
            </svg>
            </li>
            <li>twitter</li>
            <li>linkedin</li>
            <li>what's app</li>
            <li>email</li>
          </ul>
        </div>
      </section>


      <div className='interact_section'>
        <div className='left_ad_posts'>
            <h4>Left Secion</h4>
        </div>
        <div className='just_type_it'>
          <FacebookComments href="https://codeaspirant.vercel.app/blog/grave" />
        </div>
        <div className='right_ad_posts'>
            <h4>right Secion</h4>
        </div>
      </div> 
       


    </div>
  );
};

export default Grave;