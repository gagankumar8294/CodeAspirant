// pages/blog/[slug].js
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { db } from '../../firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';
import styles from '../../comps/Blogs/Blogs.module.css'

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
        <div>
            <h1 className={styles.h1_heading}>{blog.sections.find(section => section.type === "title").value}</h1>
            {blog.sections.map((section, index) => {
                if (section.type === "title") return null; // Skip the title here since it's already displayed
                if (section.type === "content") {
                    return <p key={index}>{section.value}</p>;
                }
                if (section.type === "image") {
                    return (
                        <img
                            key={index}
                            src={section.value}
                            alt="Blog Image"
                            style={{ width: "300px", height: "200px" }}
                        />
                    );
                }
                return null;
            })}
        </div>
    );
};

export default BlogDetail;