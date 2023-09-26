import React, { useState } from 'react';
import styles from "../english.module.css";

import Statesman0 from './EnglishDay/StatesmanDate/22-09-23';
import Statesman1 from './EnglishDay/StatesmanDate/23-09-23';
import Statesman2 from './EnglishDay/StatesmanDate/24-09-23';
import Statesman3 from './EnglishDay/StatesmanDate/25-09-23';
import Statesman4 from './EnglishDay/StatesmanDate/26-09-23';

const TheStatesmanDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '26_09_23' && <Statesman4 />}
           {date === '25_09_23' && <Statesman3 />}
          {date === '24_09_23' && <Statesman2 />}
          {date === '23_09_23' && <Statesman1 />}
          {date === '22_09_23' && <Statesman0 />}
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <div className={styles.daily_date} onClick={() => toggleContent('26_09_23')}>
        <h2>26-09-23</h2>
        {renderContent('26_09_23')}
      </div>
    <div className={styles.daily_date} onClick={() => toggleContent('25_09_23')}>
        <h2>25-09-23</h2>
        {renderContent('25_09_23')}
      </div>
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

export default TheStatesmanDatesComponent;