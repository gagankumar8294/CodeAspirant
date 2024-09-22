// pages/blog.js
import styles from '../styles/Blog.module.css'
import React from 'react';

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/getBlogs');
  const data = await res.json();

  return {
    props: {
      blogs: data.blogs
    }
  };
}

const BlogPage = ({ blogs }) => {
  return (
    <div className={styles.container}>
      <h1>Blog Posts</h1>
      {blogs.map((blog) => (
        <div key={blog._id}>
          <h2>{blog.title}</h2>
          <p>{blog.content}</p>
          <small>{new Date(blog.createdAt).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
