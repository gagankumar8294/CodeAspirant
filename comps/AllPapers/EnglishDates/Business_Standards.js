import React, { useState } from 'react';
import styles from "../english.module.css";
import BusinessStandardsDay3 from './EnglishDay/BusinessStandards/25-09-23';

const BusinessStandardsDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {/* {date === '26_09_23' && <AsianAgeDay4 />} */}
          {date === '25_09_23' && <BusinessStandardsDay3 />}
          
        </div>
      );
    }
    return null;
  };

  return (
    <>
      {/* <div className={styles.daily_date} onClick={() => toggleContent('24_09_23')}>
        <h2>24-09-23</h2>
        {renderContent('24_09_23')}
      </div> */}
      <div className={styles.daily_date} onClick={() => toggleContent('25_09_23')}>
        <h2>25-09-23</h2>
        {renderContent('25_09_23')}
      </div>
      {/* <div className={styles.daily_date} onClick={() => toggleContent('23_09_23')}>
        <h2>23-09-23</h2>
        {renderContent('23_09_23')}
      </div>
      <div className={styles.daily_date} onClick={() => toggleContent('22_09_23')}>
        <h2>22-09-23</h2>
        <div className="pdf-container">
          {renderContent('22_09_23')}
        </div>
      </div> */}
    </>
  );
};

export default BusinessStandardsDatesComponent;