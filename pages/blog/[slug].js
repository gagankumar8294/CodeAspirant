// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";
import styles from '../../styles/Blog.module.css'
// import SingleBlogPost from "@/comps/SingleBlogPost";
// export async function getStaticPaths() {
//   try {
//     const res = await fetch("http://localhost:3000/api/getBlogs");
//     const data = await res.json();

//     const paths = data.blogs.map((blog) => ({
//       params: { slug: blog.slug },
//     }));

//     return { paths, fallback: false }; // No need for fallback since we're pre-generating all paths
//   } catch (error) {
//     console.error("Error fetching blogs:", error);
//     return { paths: [], fallback: false };
//   }
// }

// export async function getStaticProps({ params }) {
//   try {
//     console.log("Fetching blog for slug:", params.slug); // Add this log for debugging
//     const res = await fetch(`http://localhost:3000/api/getBlog/${params.slug}`);
    
//     if (!res.ok) {
//       throw new Error(`Failed to fetch blog post: ${res.status}`);
//     }

//     const data = await res.json();

//     if (!data.blogPost) {
//       return { notFound: true };
//     }

//     return { props: { blogPost: data.blogPost } };
//   } catch (error) {
//     console.error("Error fetching blog post:", error);
//     return { notFound: true };
//   }
// }

// const SingleBlogPage = ({ blogPost }) => {
//   const router = useRouter();

//   // Handle case where blogPost is null (e.g., if fetching fails)
//   if (!blogPost) {
//     return (
//       <div>
//         <p>Blog post not found.</p>
//         <button onClick={() => router.push("/blog")}>Back to Blog List</button>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <h1>{blogPost.title}</h1>
//       <p>{blogPost.createdAt}</p>
//       <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
//     </div>
//   );
// };

// export default SingleBlogPage;

// pages/blog/[slug].js
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function BlogPost() {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (slug) {
      async function fetchBlog() {
        const response = await fetch(`/api/getblogposts`);
        const data = await response.json();
        const selectedBlog = data.find((post) => post.slug === slug);
        setBlog(selectedBlog);
      }

      fetchBlog();
    }
  }, [slug]);

  if (!blog) {
    return <p>Loading...</p>;
  }

  return (
    <div  className={styles.container}>
      <h1>{blog.title}</h1>
      <p>{blog.content}</p>
      <p><strong>Created at:</strong> {new Date(blog.createdAt).toLocaleString()}</p>
    </div>
  );
}
