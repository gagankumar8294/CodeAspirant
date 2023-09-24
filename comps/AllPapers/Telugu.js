
import { useState } from 'react';
import styles from "./english.module.css" ; // Assuming you have a CSS module for styles
import AndhraBhoomiDatesComponent from './TeluguDates/AndhraBhoomi';
import AndhraPrabhaDatesComponent from './TeluguDates/Andhra_Prabha';
import NavaTelanganaDatesComponent from './TeluguDates/Nava_Telangana';
import VaarthaDatesComponent from './TeluguDates/Vaartha';
import AndraJyothiDatesComponent from './TeluguDates/AndraJyothi';
import EenaduDatesComponent from './TeluguDates/Eenadu';
import SakshiDatesComponent from './TeluguDates/Sakshi';

const Telugucomponent = () => {

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
    <div className={styles.andhra_bhoomi}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('andhra-bhoomi')}>
            Andhra Bhoomi
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "andhra-bhoomi" && (
            <div>
                <AndhraBhoomiDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.andhra_prabha}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('andhra_prabha')}>
            Andhra Prabha
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "andhra_prabha" && (
            <div>
                <AndhraPrabhaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.nava_telangana}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('nava_telangana')}>
            Nava telengana
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "nava_telangana" && (
            <div>
                <NavaTelanganaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.vaartha}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('vaartha')}>
            Vaartha
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "vaartha" && (
            <div>
                <VaarthaDatesComponent/>
            </div>
        )}
      </div>
      <div className={styles.andra_jyoti}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('andra_jyoti')}>
            Andhra Jyoti
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "andra_jyoti" && (
            <div>
                <AndraJyothiDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.eenadu}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('eenadu')}>
            Eenadu
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "eenadu" && (
            <div>
                <EenaduDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.sakshi}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('sakshi')}>
           Sakshi
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "sakshi" && (
            <div>
                <SakshiDatesComponent />
            </div>
        )}
      </div>
    </>
    
  );
};

export default Telugucomponent;