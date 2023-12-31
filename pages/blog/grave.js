import React from 'react';
import styles from "../../styles/Blog.module.css";
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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


      <section className={styles.so_sec}>
        <div className={styles.social}>
          <ul>
            <li>
              <a href="https://www.facebook.com/sharer/sharer.php?u=[Blog URL]">
                  <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                  </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/intent/tweet?url=[Blog URL]&text=[Blog Title]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/share/url?url=[Blog URL]&text=[Blog Title]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="whatsapp://send?text=Check out this amazing blog post: [Blog Title] [Blog URL]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:?subject=[Email Subject]&body=Check out this amazing blog post: [Blog Title] [Blog URL]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section>




      {/* <p className={styles.paragraph}>
        Google is no stranger to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>
      <p className={styles.paragraph}>
        Google is no stranger to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>
      <p className={styles.paragraph}>
        Google is no stranger to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p> */}
      
      
      
      
      <div className={styles.image_border}>
        <Image className={styles.image_wh}
          src="/blog_images/google/google.jpg"
          alt="Example Image"
          width={100}
          height={100}
        />
      </div>
      
      


      <div>
        <p className={styles.blog_audio_text}>listen to this story</p>
        <audio className={styles.blog_audio} controls>
          <source src="/blog_audio/google/This Feeling.mp3" type="audio/mp3" />
          <source src="/blog_audio/google/This Feeling.ogg" type="audio/ogg" />
        </audio>
      </div>





      <p className={styles.paragraph}>
        Google is no 
        <a className={styles.paragraph_link}
         href="codeaspirant.app/blog/first-post" 
         alt="first-post"> Stranger </a> 
         to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>
      <p className={styles.paragraph}>
        Google is no stranger to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>
      
      <h2 className={styles.h2_heading}>
        Dishonourable mentions: Products Google killed
      </h2>

      <p className={styles.paragraph}>
        Google is no stranger to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>

      <p className={styles.paragraph}>
        Google is no stranger to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>

      <p className={styles.paragraph}>
        The reason behind this pattern boils down to Google’s company culture. The tech giant is well known for hoarding the best talent in the world, paying them above and beyond competing organisations and offering some of the best work cultures in the world. However, along with this atmosphere also comes the 
        <a 
        className={styles.paragraph_link}
        href="codeaspirant.app/blog/first-post"
        alt="paragrah link">
        &nbsp;  push to ideate</a>, create, and launch new services for the company.  
      </p>

      <p className={styles.paragraph}>
        Google is no <strong>LPA</strong> in the company<strong>—Launch, Promo,</strong> and <strong>Abandon</strong>. to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>
      
      
      
      <div className={styles.yt_vid_border}>
        <iframe  className={styles.yt_vid}
          // width="560" height="315" 
          src="https://www.youtube.com/embed/xA-jy5B9_K0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
        </iframe>
      </div>
      

      <p className={styles.paragraph}>
        Google is no <strong>LPA</strong> in the company<strong>—Launch, Promo,</strong> and <strong>Abandon</strong>. to consigning its projects to the digital graveyard. From Google Inbox to Google+, to Stadia—the tech giant has a long and infamous history of shuttering loved apps and services. Today, another one bites the dust. 
      </p>
      
      
      <section className={styles.so_sec}>
        <div className={styles.social}>
          <ul>
            <li>
              <a href="https://www.facebook.com/sharer/sharer.php?u=[Blog URL]">
                  <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <path d="M29 0h-26c-1.65 0-3 1.35-3 3v26c0 1.65 1.35 3 3 3h13v-14h-4v-4h4v-2c0-3.306 2.694-6 6-6h4v4h-4c-1.1 0-2 0.9-2 2v2h6l-1 4h-5v14h9c1.65 0 3-1.35 3-3v-26c0-1.65-1.35-3-3-3z"></path>
                  </svg>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/intent/tweet?url=[Blog URL]&text=[Blog Title]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="https://t.me/share/url?url=[Blog URL]&text=[Blog Title]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.838 0-16 7.162-16 16s7.162 16 16 16 16-7.163 16-16-7.163-16-16-16zM23.863 10.969l-2.625 12.369c-0.181 0.881-0.712 1.087-1.45 0.681l-4-2.956-1.919 1.869c-0.225 0.219-0.4 0.4-0.8 0.4-0.519 0-0.431-0.194-0.606-0.688l-1.363-4.475-3.956-1.231c-0.856-0.262-0.862-0.85 0.194-1.269l15.412-5.95c0.7-0.319 1.381 0.169 1.113 1.25z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="whatsapp://send?text=Check out this amazing blog post: [Blog Title] [Blog URL]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M27.281 4.65c-2.994-3-6.975-4.65-11.219-4.65-8.738 0-15.85 7.112-15.85 15.856 0 2.794 0.731 5.525 2.119 7.925l-2.25 8.219 8.406-2.206c2.319 1.262 4.925 1.931 7.575 1.931h0.006c0 0 0 0 0 0 8.738 0 15.856-7.113 15.856-15.856 0-4.238-1.65-8.219-4.644-11.219zM16.069 29.050v0c-2.369 0-4.688-0.637-6.713-1.837l-0.481-0.288-4.987 1.306 1.331-4.863-0.313-0.5c-1.325-2.094-2.019-4.519-2.019-7.012 0-7.269 5.912-13.181 13.188-13.181 3.519 0 6.831 1.375 9.319 3.862 2.488 2.494 3.856 5.8 3.856 9.325-0.006 7.275-5.919 13.188-13.181 13.188zM23.294 19.175c-0.394-0.2-2.344-1.156-2.706-1.288s-0.625-0.2-0.894 0.2c-0.262 0.394-1.025 1.288-1.256 1.556-0.231 0.262-0.462 0.3-0.856 0.1s-1.675-0.619-3.188-1.969c-1.175-1.050-1.975-2.35-2.206-2.744s-0.025-0.613 0.175-0.806c0.181-0.175 0.394-0.463 0.594-0.694s0.262-0.394 0.394-0.662c0.131-0.262 0.069-0.494-0.031-0.694s-0.894-2.15-1.219-2.944c-0.319-0.775-0.65-0.669-0.894-0.681-0.231-0.012-0.494-0.012-0.756-0.012s-0.694 0.1-1.056 0.494c-0.363 0.394-1.387 1.356-1.387 3.306s1.419 3.831 1.619 4.1c0.2 0.262 2.794 4.269 6.769 5.981 0.944 0.406 1.681 0.65 2.256 0.837 0.95 0.3 1.813 0.256 2.494 0.156 0.762-0.113 2.344-0.956 2.675-1.881s0.331-1.719 0.231-1.881c-0.094-0.175-0.356-0.275-0.756-0.475z"></path>
                </svg>
              </a>
            </li>
            <li>
              <a href="mailto:?subject=[Email Subject]&body=Check out this amazing blog post: [Blog Title] [Blog URL]">
                <svg className={styles.svg} version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zM8 8h16c0.286 0 0.563 0.061 0.817 0.177l-8.817 10.286-8.817-10.287c0.254-0.116 0.531-0.177 0.817-0.177zM6 22v-12c0-0.042 0.002-0.084 0.004-0.125l5.864 6.842-5.8 5.8c-0.045-0.167-0.069-0.34-0.069-0.517zM24 24h-16c-0.177 0-0.35-0.024-0.517-0.069l5.691-5.691 2.826 3.297 2.826-3.297 5.691 5.691c-0.167 0.045-0.34 0.069-0.517 0.069zM26 22c0 0.177-0.024 0.35-0.069 0.517l-5.8-5.8 5.865-6.842c0.003 0.041 0.004 0.083 0.004 0.125v12z"></path>
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </section> 
      
      
      <section>
        <div className={styles.download_our_app}>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
      </section>


      
      <section className={styles.community}>
        

        <h4>3 Ways to Join Our Community</h4>
        
        <div className={styles.download_our_app}>
          <h3>Telegram Group</h3>
          <p>Discover special offers, top stories, upcoming events, and more.</p>
          <h5>Join Telegram</h5>
        </div>

        <div className={styles.download_our_app}>
          <h3>Discord Server</h3>
          <p>Stay Connected with a larger ecosystem of data science and ML Professionals</p>
        </div>

        <div className={styles.download_our_app}>
          <h3>Subscribe to our Daily newsletter</h3>
          <p>Join our editors every weekday evening as they steer you through the most significant news of the day.</p>
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