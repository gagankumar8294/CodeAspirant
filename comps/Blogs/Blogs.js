import React, { useState, useRef, useEffect } from "react";
import styles from './Blogs.module.css';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc, onSnapshot, deleteDoc, doc, query, orderBy } from "firebase/firestore"; // Import query and orderBy
import { useRouter } from 'next/router';

function Blogs() {
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        // Create a query that orders documents by 'createdOn' field in descending order
        const blogsQuery = query(collection(db, "blogs"), orderBy("createdOn", "desc"));

        // Use the ordered query with onSnapshot
        const unsub = onSnapshot(blogsQuery, (snapshot) => {
            const blogs = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    sections: data.sections,
                    createdOn: data.createdOn ? data.createdOn.toDate() : null,
                    slug: data.slug || data.sections.find(section => section.type === "title").value.toLowerCase().replace(/ /g, '-')
                };
            });
            setBlogs(blogs);
        });

        return () => unsub();
    }, []);

    const handleReadMore = (blog) => {
        router.push(`/blog/${blog.slug}`);
    };

    return (
        <>
            <section className={styles.blogs_Section}>
                <h2 className={styles.heading}>Blogs</h2>
                
                <div className={styles.blogList}>
                    {blogs.map((blog) => {
                        const firstImage = blog.sections.find(section => section.type === "image");
                        const firstTitle = blog.sections.find(section => section.type === "title");

                        return (
                            <div className={styles.blogCard} key={blog.id}>
                                {firstImage && (
                                    <img
                                        src={firstImage.value}
                                        alt="Blog Image"
                                        style={{ width: "200px", height: "150px" }}
                                    />
                                )}
                                {firstTitle && <h3>{firstTitle.value}</h3>}
                                <button
                                    onClick={() => handleReadMore(blog)}
                                    className={styles.readMore}
                                >
                                    Read More
                                </button>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default Blogs;