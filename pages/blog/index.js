// // pages/blog.js
// import Link from 'next/link';
// import styles from '../../styles/Blog.module.css';

// export async function getServerSideProps() {
//   try {
//     const res = await fetch('http://localhost:3000/api/getBlogs');
//     const data = await res.json();

//     // Ensure blogs array is valid
//     if (!data.blogs || !Array.isArray(data.blogs)) {
//       return { props: { blogs: [] } };
//     }

//     return { props: { blogs: data.blogs } };
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return { props: { blogs: [] } };
//   }
// }

// const BlogPage = ({ blogs }) => {
//   return (
//     <div className={styles.container}>
//       <h1>Blog Posts</h1>
//       {blogs.length > 0 ? (
//         blogs.map((blog) => (
//           <div key={blog.id} style={{ marginBottom: "20px" }}> {/* Add key prop here */}
//             <h2>{blog.title}</h2>
//             <p>{blog.content.substring(0, 150)}...</p>
//             <Link href={`/blog/${blog.slug}`}>
//               <button>Read More</button>
//             </Link>
//           </div>
//         ))
//       ) : (
//         <p>No blogs available</p>
//       )}
//     </div>
//   );
// };
// export default BlogPage;

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from '../../styles/Blog.module.css';

export default function BlogIndex() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchBlogs() {
      const response = await fetch('/api/getblogposts');
      const data = await response.json();
      setBlogs(data);
    }

    fetchBlogs();
  }, []);

  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content.substring(0, 150)}...</p>
          <p><strong>ID:</strong> {blog._id}</p>
          <Link href={`/blog/${blog.slug}`}>
            Read More
          </Link>
        </div>
      ))}
    </div>
  );
}
