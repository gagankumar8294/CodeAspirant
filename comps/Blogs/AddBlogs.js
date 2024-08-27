import React, { useState, useRef, useEffect } from "react";
import styles from './Blogs.module.css';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router';

function AddBlogs() {
    const [sections, setSections] = useState([{ type: "title", value: "" }]);
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);
    const router = useRouter();

    useEffect(() => {
        titleRef.current.focus();
    }, []);

    useEffect(() => {
        const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
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

    const addSection = (type) => {
        if (!type) return;
        setSections([...sections, { type, value: "" }]);
    };

    const handleSectionChange = (index, value) => {
        const updatedSections = [...sections];
        updatedSections[index].value = value;
        setSections(updatedSections);
    };

    const handleImageChange = (index, e) => {
        const file = e.target.files[0];
        if (file) {
            const updatedSections = [...sections];
            updatedSections[index].value = file;
            setSections(updatedSections);
        }
    };

    async function handleSubmit(e) {
        e.preventDefault();

        const blogData = {
            createdOn: new Date(),
            sections: [],
            slug: sections[0].value.toLowerCase().replace(/ /g, '-') // Assuming the first section is the title
        };

        for (const section of sections) {
            if (section.type === "image" && section.value) {
                const storageRef = ref(storage, `blog-images/${section.value.name}`);
                const uploadTask = uploadBytesResumable(storageRef, section.value);

                await new Promise((resolve, reject) => {
                    uploadTask.on(
                        "state_changed",
                        (snapshot) => {},
                        (error) => {
                            console.error("Error uploading image:", error);
                            reject(error);
                        },
                        async () => {
                            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                            blogData.sections.push({ type: "image", value: downloadURL });
                            resolve();
                        }
                    );
                });
            } else {
                blogData.sections.push(section);
            }
        }

        try {
            const docRef = await addDoc(collection(db, "blogs"), blogData);
            console.log("Document written with ID: ", docRef.id);
            setSections([{ type: "title", value: "" }]);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function removeBlog(id) {
        const docRef = doc(db, "blogs", id);
        await deleteDoc(docRef);
    }

    const handleReadMore = (blog) => {
        router.push(`/blog/${blog.slug}`);
    };

    return (
        <>
            <section className={styles.blogs_Section}>
                <h2 className={styles.heading}>Blogs</h2>
                <div className={styles.section}>
                    <form onSubmit={handleSubmit}>
                        {sections.map((section, index) => (
                            <div key={index}>
                                {section.type === "title" && (
                                    <Row label="Title">
                                        <input
                                            className={styles.input}
                                            placeholder="Enter the Title Here..."
                                            value={section.value}
                                            onChange={(e) =>
                                                handleSectionChange(index, e.target.value)
                                            }
                                            ref={index === 0 ? titleRef : null}
                                        />
                                    </Row>
                                )}
                                {section.type === "content" && (
                                    <Row label="Content">
                                        <textarea
                                            className={styles.content}
                                            placeholder="Enter the Content Here..."
                                            value={section.value}
                                            onChange={(e) =>
                                                handleSectionChange(index, e.target.value)
                                            }
                                        />
                                    </Row>
                                )}
                                {section.type === "image" && (
                                    <Row label="Image">
                                        <input type="file" onChange={(e) => handleImageChange(index, e)} />
                                    </Row>
                                )}
                            </div>
                        ))}

                        <select onChange={(e) => addSection(e.target.value)}>
                            <option value="">Add Section</option>
                            <option value="title">Title</option>
                            <option value="content">Content</option>
                            <option value="image">Image</option>
                        </select>

                        <button type="button" onClick={() => addSection()}>Add Section</button>
                        <button className={styles.btn} type="submit">Submit Blog</button>
                    </form>
                </div>
                <h2>Blogs</h2>
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

function Row(props) {
    const { label } = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    );
}

export default AddBlogs;