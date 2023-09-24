import React, { useState } from 'react';
import styles from "../english.module.css";

import FinancialExpress0 from './EnglishDay/financialDate/22-09-23 copy 2';
import FinancialExpress1 from './EnglishDay/financialDate/23-09-23';
import FinancialExpress2 from './EnglishDay/financialDate/24-09-23';

const TheHinduDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <FinancialExpress2 />}
          {date === '23_09_23' && <FinancialExpress1 />}
          {date === '22_09_23' && <FinancialExpress0 />}
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

export default TheHinduDatesComponent;