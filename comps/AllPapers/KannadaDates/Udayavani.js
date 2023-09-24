import React, { useState } from 'react';
import styles from "../english.module.css";

import UdayavaniDay1 from './UdayavaniDate/23-09-23';
import UdayavaniDay2 from './UdayavaniDate/24-09-23';


const UdayavaniDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <UdayavaniDay2 />}
          {date === '23_09_23' && <UdayavaniDay1 />}
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

export default UdayavaniDatesComponent;