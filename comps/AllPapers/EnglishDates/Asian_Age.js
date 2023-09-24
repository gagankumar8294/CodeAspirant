import React, { useState } from 'react';
import styles from "../english.module.css";
import AsianAgeDay0 from "./EnglishDay/AsianAgeDate/22-09-23";
import AsianAgeDay1 from './EnglishDay/AsianAgeDate/23-09-23';
import AsianAgeDay2 from './EnglishDay/AsianAgeDate/24-09-23';

const AsianAgeDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <AsianAgeDay2 />}
          {date === '23_09_23' && <AsianAgeDay1 />}
          {date === '22_09_23' && <AsianAgeDay0 />}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className={styles.daily_date} onClick={() => toggleContent('24_09_23')}>
        <h2>24-09-23</h2>
        {renderContent('24_09_23')}
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

export default AsianAgeDatesComponent;