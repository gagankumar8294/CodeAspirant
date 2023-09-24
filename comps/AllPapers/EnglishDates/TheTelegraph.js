import React, { useState } from 'react';
import styles from "../english.module.css";

import Telegraph0 from './EnglishDay/telegraphDate/22-09-23';
import Telegraph1 from './EnglishDay/telegraphDate/23-09-23';
import Telegraph2 from './EnglishDay/telegraphDate/24-09-23';

const TheTelegraphDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <Telegraph2 />}
          {date === '23_09_23' && <Telegraph1 />}
          {date === '22_09_23' && <Telegraph0 />}
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
        {renderContent('22_09_23')}
      </div> */}
    </>
  );
};

export default TheTelegraphDatesComponent;