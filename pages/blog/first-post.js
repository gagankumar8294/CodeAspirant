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
    <div>
      <h1>My First Blog Post</h1>
      <p>The facebook comments enabled for legal users to comment</p>
      <FacebookComments href="http://localhost:3000/blog/first-post" />
    </div>
  );
};

export default FirstPost;