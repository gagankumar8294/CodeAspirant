import { useState } from 'react';
import styles from "../english.module.css" ; // Assuming you have a CSS module for styles

import DeccanDay0 from './EnglishDay/DeccanDate/22-09-23';
import DeccanDay1 from './EnglishDay/DeccanDate/23-09-23';
import DeccanDay2 from './EnglishDay/DeccanDate/24-09-23';

const DeccenChronicleOfIndiaDatesComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {/* Content for selected date */}
          {date === '24_09_23' && <DeccanDay2 />}
          {date === '23_09_23' && <DeccanDay1 />}
          {date === '22_09_23' && <DeccanDay0 />}
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

export default DeccenChronicleOfIndiaDatesComponent;