import React, { useState } from "react";
import servicestyles from './Services.module.css';
import brandingwebsite from './branding-website.gif'
import Image from 'next/image';
import SEO from './seo.png';
import PortfolioWebsite from './portfolio-website-service-banglore.png'
import BloggingWebsite from './HurdleFreeBloging.png'

function Services() {

  const [selectedService, setSelectedService] = useState('branding');

  const handleButtonClick = (service) => {
    setSelectedService(service);
  }

    return (
        <>
        <section className={servicestyles.services_section}>
        <div>
          <h2 className={servicestyles.service_heading}>Our Services</h2>
          <div className={servicestyles.services}>
            <div className={servicestyles.serviceOne}>
              <div className={servicestyles.service_leftDiv}>
              <Image
                  src={SEO}
                  alt='banglore seo website codeaspitant seo service'
                />
                </div>
              <div className={servicestyles.service_rightDiv }>
                <h3 className={servicestyles.seo}>SEO OPTIMIZATION</h3>
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
            <h1 className={servicestyles.webdev}>WEBSITE SERVICES</h1>
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
              <Image 
                src={PortfolioWebsite}
                alt='Portfolio Website service in banglore'
              /></a>
            )}
            {selectedService === 'branding' && (
              <Image src={brandingwebsite} alt='Branding Website service in banglore' />
              )}
            {selectedService === 'blogging' && (
              <Image
              src={BloggingWebsite}
              alt='Blogging Website service in banglore'
            />
            )}
          </div>
        </div>
      </section>

        </>
    )
}

export default Services;