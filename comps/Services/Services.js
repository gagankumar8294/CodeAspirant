import React, { useState } from "react";
import servicestyles from './Services.module.css';
import brandingwebsite from './branding-website.gif'
import Image from 'next/image';

function Services() {

  const [selectedService, setSelectedService] = useState('portfolio');

  const handleButtonClick = (service) => {
    setSelectedService(service);
  }

    return (
        <>
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
        </p>zzzs

        <div className={serstyles.ctaSection}>
          <h2>Ready to Start Your Project?</h2>
          <p>
            Contact CodeAspirant today to discuss your web development needs. Whether you need a brand-new website or want to revamp an existing one, we’re here to help.
          </p>
          <Link href="/contact" className={serstyles.contactLink}>Get in Touch</Link>
        </div>
      </div> */}
        <section className={servicestyles.services_section}>
        <div>
          <h2 className={servicestyles.service_heading}>Our Services</h2>
          <div className={servicestyles.services}>
            {/* <div className={servicestyles.serviceOne}>
              <div className={servicestyles.leftDiv}>
                <img src='
                  https://res.cloudinary.com/https-www-facebook-com-justbeingpotterhood/image/upload/v1724287106/codeaspirant/services/code%20aspirant%20seo%20service%20white-bg.png' 
                  alt='banglore seo website codeaspitant seo service' />
              </div>
              <div className={servicestyles.rightDiv}>
                <h3>Seo</h3>
                <p>seo to Optimize</p>
              </div>
            </div> */}
            <div className={servicestyles.serviceOne}>
              <div className={servicestyles.service_leftDiv}>
                <img src='
                  https://res.cloudinary.com/https-www-facebook-com-justbeingpotterhood/image/upload/v1724287106/codeaspirant/services/code%20aspirant%20seo%20service%20website%20blak.png'
                  alt='banglore seo website codeaspitant seo service' />
              </div>
              <div className={servicestyles.service_rightDiv }>
                <h3 className={servicestyles.seo}>SEO Optimization</h3>
                <ul className={servicestyles.ul}>
                    <li><span className={servicestyles.li_keypoints}><strong>Optimized Content Strategy: </strong></span>Tailored, keyword-rich content for higher search rankings.</li>
                    <li><span className={servicestyles.li_keypoints}><strong>Custom Meta Tags & Descriptions: </strong></span>Improve visibility with compelling meta content.</li>
                    <li><span className={servicestyles.li_keypoints}><strong>Mobile-First Optimization: </strong></span>Enhance user experience and search rankings on mobile devices.</li>
                    <li><span className={servicestyles.li_keypoints}><strong>Speed & Performance Enhancements: </strong></span>Boost load times for better user retention and SEO.</li>
                    <li><span className={servicestyles.li_keypoints}><strong>Local SEO Integration: </strong></span>Increase local search visibility with targeted optimization.</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>
      <section className={servicestyles.webdevSection}>
        <div className={servicestyles.webdevContainer}>
          <div className={servicestyles.webdevleftDiv}>
            <h1 className={servicestyles.webdev}>Website Services</h1>
            <ul className={servicestyles.webdevButtons}>
            <li>
                <button
                  className={`${servicestyles.webdevButton} ${selectedService === 'portfolio' ? servicestyles.active : ''}`}
                  onClick={() => handleButtonClick('portfolio')}
                >
                  Portfolio Website
                </button>
              </li>
              <li>
                <button
                  className={`${servicestyles.webdevButton} ${selectedService === 'branding' ? servicestyles.active : ''}`}
                  onClick={() => handleButtonClick('branding')}
                >
                  Branding Website
                </button>
              </li>
              <li>
                <button
                  className={`${servicestyles.webdevButton} ${selectedService === 'blogging' ? servicestyles.active : ''}`}
                  onClick={() => handleButtonClick('blogging')}
                >
                  Blogging Website
                </button>
              </li>
            </ul>
          </div>
          <div className={servicestyles.webdevrightDiv}>
            {selectedService === 'portfolio' && (
               <a href="https://syedmujahid.vercel.app/" target="_blank" rel="noopener noreferrer">
              <img src='https://res.cloudinary.com/https-www-facebook-com-justbeingpotterhood/image/upload/v1724306139/codeaspirant/services/web%20dev/code%20aspirant%20portfolio%20website%20service%20in%20banglore.png' alt='Portfolio Website service in banglore' /></a>
            )}
            {selectedService === 'branding' && (
              <Image src={brandingwebsite} alt='Branding Website service in banglore' />
            )}
            {selectedService === 'blogging' && (
              <img src='https://res.cloudinary.com/https-www-facebook-com-justbeingpotterhood/image/upload/v1724310803/codeaspirant/services/web%20dev/bloging%20website%20in%20banglore.png'
              alt='Blogging Website service in banglore' />
            )}
          </div>
        </div>
      </section>

        </>
    )
}

export default Services;