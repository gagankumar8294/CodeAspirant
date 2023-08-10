import React from 'react';
import FacebookComments from '../../comps/comments/FacebookComments';
import { useState, useEffect } from 'react';

const FirstPost = () => {
  const [isClient, setIsClient] = useState(false);
  

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Render nothing on the server-side
  }
  return (
    <div style={{paddingTop:"150px"}}>
      <div>
        <h1>My First Blog Post</h1>
        <p>The facebook comments enabled for legal users to comment</p>
      </div>


      <div className='interact_section'>
        <div className='left_ad_posts'>
            <h4>Left Secion</h4>
        </div>
        <div className='just_type_it'>
          <FacebookComments href="http://localhost:3000/blog/first-post" />
        </div>
        <div className='right_ad_posts'>
            <h4>right Secion</h4>
        </div>
      </div> 
       


    </div>
  );
};

export default FirstPost;