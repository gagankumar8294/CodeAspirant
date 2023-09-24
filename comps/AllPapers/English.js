





import { useState } from 'react';
import styles from "./english.module.css" ; // Assuming you have a CSS module for styles
import HinduDatesComponent from './EnglishDates/The_Hindu_';
import TimeOfIndiaDatesComponent from './EnglishDates/Times_Of_India';
import FinancialExpressOfIndiaDatesComponent from './EnglishDates/Financial_express';
import DeccenChronicleOfIndiaDatesComponent from './EnglishDates/Deccan_Chronicle';
import TheTribuneOfIndiaDatesComponent from './EnglishDates/The_Tribune';
import ThePioneerOfIndiaDatesComponent from './EnglishDates/The_Pioneer';
import HinduAnalysisOfIndiaDatesComponent from './EnglishDates/Hindu_Analysis';
import EconomicsTimesOfIndiaDatesComponent from './EnglishDates/Economics_Times';
import TheTelegraphDatesComponent from './EnglishDates/TheTelegraph';
import TheStatesmanDatesComponent from './EnglishDates/The_Statesman';
import AsianAgeDatesComponent from './EnglishDates/Asian_Age';
import FreePressJournalDatesComponent from './EnglishDates/Free_Press_journal';

const Englishcomponent = () => {
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
      <div className={styles.the_hindu}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('the_hindu')}>
          The Hindu
        </h2>
        {/* {renderContent('the_hindu')} */}
        {selectedPaper == "the_hindu" && (
            <div>
                <HinduDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.times_of_india}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('times_of_india')}>
          Times of India
        </h2>
        {/* {renderContent('times_of_india')} */}
        {selectedPaper == "times_of_india" && (
            <div>
                <TimeOfIndiaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.financial_express}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('financial_express')}>
          Financial Express
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "financial_express" && (
            <div>
                <FinancialExpressOfIndiaDatesComponent />
            </div>
        )}
      </div>
      {/* Add similar code for the remaining divs */}
      <div className={styles.deccan_chronicle}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('deccan_chronicle')}>
          Deccan chronicle
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "deccan_chronicle" && (
            <div>
                <DeccenChronicleOfIndiaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.the_tribune}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('the_tribune')}>
          The Tribune
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "the_tribune" && (
            <div>
                <TheTribuneOfIndiaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.the_pioneer}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('the_pioneer')}>
          The Pioneer
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "the_pioneer" && (
            <div>
                <ThePioneerOfIndiaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.hindu_analysis}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('hindu_analysis')}>
          hindu Analusis
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "hindu_analysis" && (
            <div>
                <HinduAnalysisOfIndiaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.economics_times}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('economics_times')}>
          Economics Times
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "economics_times" && (
            <div>
                <EconomicsTimesOfIndiaDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.the_telegraph}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('the_telegraph')}>
          Telegraph
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "the_telegraph" && (
            <div>
                <TheTelegraphDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.the_statesman}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('the_statesman')}>
          Statesman
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "the_statesman" && (
            <div>
                <TheStatesmanDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.asian_age}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('asian_age')}>
          Asian age
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "asian_age" && (
            <div>
                <AsianAgeDatesComponent />
            </div>
        )}
      </div>
      <div className={styles.free_press_journal}>
        <h2 className={styles.individual_paper} onClick={() => toggleContent('free_press_journal')}>
          Free Press Journal
        </h2>
        {/* {renderContent('financial_express')} */}
        {selectedPaper == "free_press_journal" && (
            <div>
                <FreePressJournalDatesComponent />
            </div>
        )}
      </div>
    </>
  );
};

export default Englishcomponent;




// import { useState } from 'react';
// import styles from "./english.module.css" ; // Assuming you have a CSS module for styles

// const Englishcomponent = () => {


//   return (
//     <>
//       <div className={styles.the_hindu}>
//         <h2 className={styles.individual_paper}>
//             The Hindu
//         </h2>
//       </div>
//       <div className={styles.times_of_india}>
//         <h2 className={styles.individual_paper}>
//             Times of india
//         </h2>
//       </div>
//       <div className={styles.financial_express}>
//         <h2 className={styles.individual_paper}>
//             Financial Express
//         </h2>
//       </div>
//       <div className={styles.deccan_chronicle}>
//         <h2 className={styles.individual_paper}>
//             Deccan Chronicle
//         </h2>
//       </div>
//       <div className={styles.the_tribune}>
//         <h2 className={styles.individual_paper}>
//             The Tribune
//         </h2>
//       </div>
//       <div className={styles.the_pioneer}>
//         <h2 className={styles.individual_paper}>
//             The Pioneer
//         </h2>
//       </div>
//       <div className={styles.hindu_analysis}>
//         <h2 className={styles.individual_paper}>
//             Hindu Analysis
//         </h2>
//       </div>
//       <div className={styles.economics_times}>
//         <h2 className={styles.individual_paper}>
//             Economics Times
//         </h2>
//       </div>
//       <div className={styles.the_telegraph}>
//         <h2 className={styles.individual_paper}>
//             The Telegraph
//         </h2>
//       </div>
//       <div className={styles.the_statesman}>
//         <h2 className={styles.individual_paper}>
//             The Statesman
//         </h2>
//       </div>
//       <div className={styles.asian_age}>
//         <h2 className={styles.individual_paper}>
//             The Asian Age
//         </h2>
//       </div>
//       <div className={styles.free_press_journal}>
//         <h2 className={styles.individual_paper}>
//             Free Press Journal
//         </h2>
//       </div>
//     </>
//   );
// };

// export default Englishcomponent;
