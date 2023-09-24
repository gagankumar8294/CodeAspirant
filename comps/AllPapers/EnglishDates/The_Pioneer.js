import React, { useState } from 'react';
import styles from "../english.module.css";

import ThePioneer0 from './EnglishDay/ThePioneerDate/22-09-23';
import ThePioneer1 from './EnglishDay/ThePioneerDate/23-09-23';
import ThePioneer2 from './EnglishDay/ThePioneerDate/24-09-23';


const ThePioneerDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <ThePioneer2 />}
          {date === '23_09_23' && <ThePioneer1 />}
          {date === '22_09_23' && <ThePioneer0 />}
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

export default ThePioneerDatesComponent;