import React, { useState } from 'react';
import styles from "../english.module.css";

import EconomicTimesDay0 from './EnglishDay/EconomicDate/22-09-23';
import EconomicTimesDay1 from './EnglishDay/EconomicDate/23-09-23';
import EconomicTimesDay2 from './EnglishDay/EconomicDate/24-09-23';
import EconomicTimesDay3 from './EnglishDay/EconomicDate/25-09-23';

const EconomicTimesDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '25_09_23' && <EconomicTimesDay3 />}
          {date === '24_09_23' && <EconomicTimesDay2 />}
          {date === '23_09_23' && <EconomicTimesDay1 />}
          {date === '22_09_23' && <EconomicTimesDay0 />}
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

export default EconomicTimesDatesComponent;