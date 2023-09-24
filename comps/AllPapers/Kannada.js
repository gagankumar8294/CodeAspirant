import { useState } from 'react';
import styles from "./english.module.css" ; // Assuming you have a CSS module for styles

import KannadaPrabhaDatesComponent from './KannadaDates/Kannada_Prabha';
import PrajavaniDatesComponent from './KannadaDates/Prajavani';
import UdayavaniDatesComponent from './KannadaDates/Udayavani';
import VijayaKarnatakaDatesComponent from './KannadaDates/Vijaya_Karnataka';

const Kannadacomponent = () => {

  const [selectedPaper, setSelectedPaper] = useState(null);

  const toggleContent = (paper) => {
    setSelectedPaper(prevPaper => (prevPaper === paper ? null : paper));
  };

  const renderContent = (paper) => {
    if (selectedPaper === paper) {
      return (
        <div>
          {/* Content for selected paper */}
        </div>
      );
    }
    return null;
  };

  return (
    <>
    <div className={styles.kannada_prabha}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('kannada_prabha')}>
            Kannada Prabha
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "kannada_prabha" && (
            <div>
                <KannadaPrabhaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.prajavani}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('prajavani')}>
            Prajavani
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "prajavani" && (
            <div>
                <PrajavaniDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.udayavani}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('udayavani')}>
            Udayavani
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "udayavani" && (
            <div>
               < UdayavaniDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.vijaya_karnataka}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('vijaya_karnataka')}>
            Vijaya karnataka
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "vijaya_karnataka" && (
            <div>
                <VijayaKarnatakaDatesComponent />
            </div>
        )}
      </div>
    </>
  );
};

export default Kannadacomponent;