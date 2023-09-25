import React, { useState } from 'react';
import styles from "../english.module.css";

import FreePressJournal3 from './EnglishDay/FreeDay/25-09-23';
import FreePressJournal2 from './EnglishDay/FreeDay/24-09-23';
import FreePressJournal1 from './EnglishDay/FreeDay/23-09-23';
import FreePressJournal0 from './EnglishDay/FreeDay/22-09-23';


const FreePressJournalDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '25_09_23' && <FreePressJournal3 />}
          {date === '24_09_23' && <FreePressJournal2 />}
          {date === '23_09_23' && <FreePressJournal1 />}
          {date === '22_09_23' && <FreePressJournal0 />}
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

export default FreePressJournalDatesComponent;