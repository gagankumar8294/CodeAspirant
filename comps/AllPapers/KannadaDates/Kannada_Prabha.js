import { useState } from 'react';
import styles from "../english.module.css" ; // Assuming you have a CSS module for styles

import KannadaPrabhaDay0 from './KannadaPrabhaDate/22-09-23';
import KannadaPrabhaDay1 from './KannadaPrabhaDate/23-09-23';



const KannadaPrabhaDatesComponent = () => {
    const [selectedDate, setSelectedDate] = useState(null);

  const toggleContent = (date) => {
    setSelectedDate(prevDate => (prevDate === date ? null : date));
  };

  const renderContent = (date) => {
    if (selectedDate !== null && selectedDate === date) {
      return (
        <div>
          {/* Content for selected date */}
          {date === '22_09_23' && <KannadaPrabhaDay0 />}
          {date === '23_09_23' && <KannadaPrabhaDay1 />}
        </div>
      );
    }
    return null;
  };

  return (
    <>
      <div className={styles.daily_date} onClick={() => toggleContent('22_09_23')}>
        <h2>22-09-23</h2>
         {renderContent('22_09_23')}
      </div>
      <div className={styles.daily_date} onClick={() => toggleContent('23_09_23')}>
        <h2>24-09-23</h2>
        {renderContent('23_09_23')}
      </div>



     


      </>
  );
};

export default KannadaPrabhaDatesComponent;