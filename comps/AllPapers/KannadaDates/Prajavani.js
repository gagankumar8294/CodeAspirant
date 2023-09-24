import React, { useState } from 'react';
import styles from "../english.module.css";

import PrajavaniDay1 from './PrajavaniDate/23-09-23';
import PrajavaniDay2 from './PrajavaniDate/24-09-23';


const PrajavaniDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <PrajavaniDay2 />}
          {date === '23_09_23' && <PrajavaniDay1 />}
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
      <div className={styles.daily_date} onClick={() => toggleContent('23_09_23')}>
        <h2>23-09-23</h2>
        {renderContent('23_09_23')}
      </div>
    </>
  );
};

export default PrajavaniDatesComponent;