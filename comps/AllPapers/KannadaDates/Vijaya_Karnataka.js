import React, { useState } from 'react';
import styles from "../english.module.css";

import VijayaKarnataka1 from './VijayaKarnatakaDate/23-09-23';
import VijayaKarnataka2 from './VijayaKarnatakaDate/24-09-23';

const VijayaKarnatakaDatesComponent = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {date === '24_09_23' && <VijayaKarnataka2 />}
          {date === '23_09_23' && <VijayaKarnataka1 />}
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

export default VijayaKarnatakaDatesComponent;