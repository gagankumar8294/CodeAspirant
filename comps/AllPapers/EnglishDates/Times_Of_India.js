import React, { useState } from 'react';
import styles from "../english.module.css";

import TheTimesOfIndiaDay0 from './EnglishDay/TimesOfIndiaDate/22-09-23';
import TheTimesOfIndiaDay1 from './EnglishDay/TimesOfIndiaDate/23-09-23';
import TheTimesOfIndiaDay2 from './EnglishDay/TimesOfIndiaDate/24-09-23';
import TheTimesOfIndiaDay3 from './EnglishDay/TimesOfIndiaDate/25-09-23';

const TheTimesOfIndiaComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '25_09_23' && <TheTimesOfIndiaDay3 />}
          {date === '24_09_23' && <TheTimesOfIndiaDay2 />}
          {date === '23_09_23' && <TheTimesOfIndiaDay1 />}
          {date === '22_09_23' && <TheTimesOfIndiaDay0 />}
        </div>
      );
    }
    return null;
  };

  return (
    <>
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

export default TheTimesOfIndiaComponent;