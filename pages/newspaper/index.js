import Head from 'next/head';
import { useState } from 'react';
import styles from "./newspaper.module.css" ; // Assuming you have a CSS module for styles
import Englishcomponent from '../../comps/AllPapers/English';
import Kannadacomponent from '../../comps/AllPapers/Kannada';
import Telugucomponent from '../../comps/AllPapers/telugu';

const NewspaperComponent = () => {
  const [showEnglishContent, setShowEnglishContent] = useState(false);
  const [showKannadaContent, setShowKannadaContent] = useState(false);
  const [showHindiContent, setShowHindiContent] = useState(false);

  const toggleContent = (language) => {
    switch (language) {
      case 'english':
        setShowEnglishContent(prevState => !prevState);
        setShowKannadaContent(false);
        setShowHindiContent(false);
        break;
      case 'kannada':
        setShowEnglishContent(false);
        setShowKannadaContent(prevState => !prevState);
        setShowHindiContent(false);
        break;
      case 'hindi':
        setShowEnglishContent(false);
        setShowKannadaContent(false);
        setShowHindiContent(prevState => !prevState);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Head>
        <title>CodeAspirant | NEWSPAPERS</title>
        <meta name='keywords' contents="codeaspirant" />
      </Head>
      <p className={styles.everyday}>EveryDay After 8:30</p>
      <div className={styles.papers_border}>
        <div className={styles.language_papers}>
          <h1 className={styles.english_paper_title} onClick={() => toggleContent('english')}>English Newspapers</h1>
            {showEnglishContent && (
              <div className={styles.english_papers}>
                <Englishcomponent />
              </div>
            )}
        </div>
        <div className={styles.language_papers}>
          <h1  className={styles.kannada_paper_title} onClick={() => toggleContent('kannada')}>Kannada Newspapers</h1>
            {showKannadaContent && (
              <div className={styles.kannada_papers}>
                {/* <Kannadacomponent /> */}
                <p>comming soon</p>
              </div>
            )}
        </div>
        <div className={styles.language_papers}>
          <h1 className={styles.telugu_paper_title} onClick={() => toggleContent('hindi')}>Telugu Newspapers</h1>
            {showHindiContent && (
            <div className={styles.telugu_papers}>
              {/* <Telugucomponent /> */}
              <p>comming soon</p>
            </div>
            )}
        </div>
    </div>
    </>
    
  );
};

export default NewspaperComponent;







// import { useEffect } from 'react';

// const Pdf1 = () => {
//     return (
//       <div style={{paddingTop:"150px"}}>
//         {/* <embed src={ pdf } width="1000px" height="500px" /> */
//         }
//         <iframe src="https://drive.google.com/file/d/1Fq1Yc9Zmw1EviGZy3VyWHMjL-3quskGC/view?usp=sharing/preview" width="1000" height="400"/>
//       </div>
//     );
//   };
  
//   export default Pdf1;

// const Paper = () => {
//     useEffect(() => {
//       const script = document.createElement('script');
//       script.type = 'text/javascript';
//       script.src = 'https://cloudpdf.io/viewer.min.js';
//       script.async = true;
  
//       script.onload = () => {
//         const config = {
//           documentId: '783a7ced-dbce-40bd-9354-e01587de09cd',
//           darkMode: true,
//         };
//         CloudPDF(config, document.getElementById('viewer')).then((instance) => {});
//       };
  
//       document.body.appendChild(script);
  
//       return () => {
//         document.body.removeChild(script);
//       };
//     }, []);
  
//     return <div id="viewer" style={{ width: '100%', height: '500px' }}></div>;
//   };
  
//   export default Paper;

// const Paper = () => {
//     return (
//         <>
//         <h1>Free Daily News Papers</h1>
//         <div className={styles.viewpapers}>
//             <div>
//                 <h1>
//                     English NewsPapers
//                 </h1>
//             </div>
//             <div>
//                 <h1>
//                     Kannada NewsPapers
//                 </h1>
//             </div>
//             <div>
//                 <h1>
//                     Hindi NewsPapers
//                 </h1>
//             </div>
//         </div>
//         </>
//     );
// };


// Import React and any other necessary modules
// import styles from '../../styles/Home.module.css'

// import React, { useState } from 'react';
// import styles from './YourComponent.module.css';  Assuming you have a CSS module

// const NewsPapers = () => {
//   const [selectedPaper, setSelectedPaper] = useState(null);

//   const handlePaperClick = (paper) => {
//     setSelectedPaper(paper);
//   };

//   return (
//     <>
//         <div className={styles.papers_border}>
//             <div className={styles.language_papers}>
//                 <h1>English NewsPapers</h1>
//             </div>
//             <div className={styles.language_papers}>
//                 <h1>Kannada NewsPapers</h1>
//             </div>
//             <div className={styles.language_papers}>
//                 <h1>Hindi NewsPapers</h1>
//             </div>
//         </div>
//     </>
//   );
// };

// export default NewsPapers;


// import { useState } from 'react';
// import styles from '../../styles/Home.module.css'; // Assuming you have a CSS module for styles

// const NewspaperComponent = () => {
//   const [showContent, setShowContent] = useState(true);

//   const toggleContent = () => {
//     setShowContent(prevState => !prevState);
//   };

//   return (
//     <div className={styles.papers_border}>
//       <div className={styles.language_papers}>
//         <h1 onClick={toggleContent}>English NewsPapers</h1>
//         {showContent && (
//           <div className={styles.english_papers}>
//             {/* Content for English Newspapers */}
//             <h1>yeas this is the one</h1>
//             <h2>rhis is anothe one</h2>
//           </div>
//         )}
//       </div>
//       <div className={styles.language_papers}>
//         <h1 onClick={toggleContent}>Kannada NewsPapers</h1>
//         {showContent && (
        //   <div className={styles.kannada_papers}>
        //     {/* Content for Kannada Newspapers */}
        //     <h1>yeas this is the one</h1>
        //     <h2>rhis is anothe one</h2>
        //   </div>
//         )}
//       </div>
//       <div className={styles.language_papers}>
//         <h1 onClick={toggleContent}>Hindi NewsPapers</h1>
//         {showContent && (
//           <div className={styles.hindi_papers}>
//             {/* Content for Hindi Newspapers */}
//             <h1>yeas this is the one</h1>
//             <h2>rhis is anothe one</h2>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default NewspaperComponent;