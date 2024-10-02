// pages/blog/[slug].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
// import styles from '../../comps/Blogs/Blogs.module.css'
import styles from '../../styles/Blog.module.css';

const BlogDetail = () => {
    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        if (slug) {
            const fetchBlogBySlug = async () => {
                // Query the collection "blogs" where the field "slug" matches the slug from the URL
                const q = query(collection(db, "blogs"), where("slug", "==", slug));
                const querySnapshot = await getDocs(q);
                if (!querySnapshot.empty) {
                    const blogData = querySnapshot.docs[0].data();
                    setBlog(blogData);
                }
            };
            fetchBlogBySlug();
        }
    }, [slug]);

    if (!blog) {
        return <p>Loading...</p>;
    }

    return (
        <div style={{paddingTop:"150px"}}>
          <div>
            <h1 className={styles.h1_heading}>
                {/* {blog.sections.find(section => section.type === "title").value} */}
            </h1>
            {blog.sections.map((section, index) => {
                switch (section.type) {
                    case 'title':
                      return (
                        <h1 className={styles.main_heading} key={index} >
                          {section.value}
                        </h1>
                      );
                    case 'h1':
                      return (
                        <h1 key={index} className={styles.h1}>
                          {section.value}
                        </h1>
                      );
                    case 'h2':
                      return (
                        <h2 key={index} className={styles.h2}>
                          {section.value}
                        </h2>
                      );
                    case 'h3':
                      return (
                        <h3 key={index} className={styles.h3}>
                          {section.value}
                        </h3>
                      );
                    case 'content':
                    case 'paragraph':
                      return (
                        <p key={index} className={styles.paragraph}>
                          {section.value}
                        </p>
                      );
                      case 'link':
                        const linkUrl = section.value.startsWith('http://') || section.value.startsWith('https://')
                        ? section.value
                        : `https://${section.value}`;  
                        // Prepend https:// if not already present
                        return (
                          <a
                            key={index}
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                          >
                            {section.linkText} {/* Use section.linkText here instead of section.alt */}
                          </a>
                        );
                    case 'image':
                      return (
                        <div key={index} className={styles.imageContainer}>
                          <img
                            src={section.value}
                            alt={section.alt || 'Blog Image'}
                            className={styles.image_wh}
                          />
                        </div>
                      );
                    default:
                      return null;
                  }
            })}
          </div>
            
            
        </div>
    );
};

export default BlogDetail;