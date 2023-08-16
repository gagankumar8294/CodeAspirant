import React from 'react';
import styles from "../../styles/Blog.module.css";
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';
import SVGIcons from '../../comps/SVGIcons'; // Adjust the path


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
            <li style={{backgroundColor:"red"}}>
              {/* <svg className={styles.facebook_icon}>
                <use xlink:href="/symbol-defs.svg#icon-facebook2"></use>
              </svg> */}
              <svg className={styles.facebook_icon}>
              <use xlinkHref="#icon-facebook2"></use>
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