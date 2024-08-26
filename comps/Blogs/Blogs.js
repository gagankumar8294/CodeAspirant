// import React from "react";
// import styles from './Blogs.module.css';
// import { useState , useRef , useEffect } from "react";
// import { db, storage  } from '../../firebaseConfig';
// import { collection, addDoc, getDocs , onSnapshot , setDoc, doc ,deleteDoc , snapshotEqual} from "firebase/firestore"; 
// import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

// function Blogs() {

//     const [formData, setFormData] = useState({title: "", content: "" , image: null });
//     const [blogs , setBlogs] = useState([]);
//     const titleRef = useRef(null);
    
//     useEffect(() => {
//         titleRef.current.focus();
//     }, []);

//     useEffect(() => {

//         // async function fetchData() {
//         //     const snapShot = await getDocs(collection(db, "blogs"));
//         //     console.log(snapShot);

//         //     const blogs = snapShot.docs.map((doc) => {
//         //         return {
//         //             id: doc.id,
//         //             ...doc.data()
//         //         }
//         //     })
//         //     console.log(blogs);
//         //     setBlogs(blogs);
//         // }

//         // fetchData();

//         const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
//             const blogs = snapshot.docs.map((doc) => {
//                 const data = doc.data();
//                 return {
//                     id: doc.id,
//                     title: data.title,
//                     content: data.content,
//                     imageUrl: data.imageUrl || null, 
//                     createdOn: data.createdOn ? data.createdOn.toDate() : null  // Convert Firebase Timestamp to JS Date
//                 };
//             });
//             console.log(blogs);
//             setBlogs(blogs);
//         });
//         // Cleanup subscription on unmount
//         return () => unsub();
//     }, []);

//     const handleImageChange = (e) => {
//         if (e.target.files[0]) {
//             setFormData({ ...formData, image: e.target.files[0] });
//         }
//     };

//     async function handleSubmit(e) { 
//         e.preventDefault();

//         //setBlogs([{title: formData.title, content: formData.content},...blogs]);
//         if (!formData.image) {
//             alert("Please select an image to upload.");
//             return;
//         }
        
//         const storageRef = ref(storage, `blog-images/${formData.image.name}`);
//         const uploadTask = uploadBytesResumable(storageRef, formData.image);

//         uploadTask.on(
//             "state_changed",
//             (snapshot) => {
//                 // Optional: Show progress bar or upload status
//                 const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//                 console.log(`Upload is ${progress}% done`);
//             },
//             (error) => {
//                 console.error("Error uploading image:", error);
//             },
//             async () => {
//                 // Get download URL after upload
//                 const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
//                 try {
//                     const docRef = await addDoc(collection(db, "blogs"), {
//                         title: formData.title,
//                         content: formData.content,
//                         imageUrl: downloadURL,
//                         createdOn: new Date()
//                     });
//                     console.log("Document written with ID: ", docRef.id);
//                 } catch (e) {
//                     console.error("Error adding document: ", e);
//                 }

//                 setFormData({ title: "", content: "", image: null });
//                 titleRef.current.focus();
//             }
//         );
//     }

//     //     try {
//     //         const docRef = await addDoc(collection(db, "blogs"), {
//     //             title: formData.title,
//     //             content: formData.content,
//     //             createdOn: new Date()
//     //         })
//     //         console.log("Document written with ID: ", docRef.id);
//     //     } catch (e) {
//     //         console.error("Error adding document: ", e);
//     //     }
        
//     //     setFormData({title: "" , content: ""});
//     //     titleRef.current.focus();
//     // }

//     async function removeBlog(id) {
//         // we want to filter out all the blogs except the matched blog
//         // setBlogs(blogs.filter((blog, index) => i!==index))
//         const docRef = doc(db, "blogs" ,id);
//         await deleteDoc(docRef)
//     }

//     return (
//         <>
//             <section className={styles.blogs_Section}>
//                <h2 className={styles.heading}>Blogs</h2>
//                <div className={styles.section}>
//                     <form onSubmit={handleSubmit}>
//                         <Row label="Title">
//                             <input className={styles.input}
//                                 placeholder="Enter the Title Here..."
//                                 value={formData.title}
//                                 ref = {titleRef}
//                                 onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            
//                             />
//                         </Row>
//                         <Row label="Content">
//                             <textarea className={styles.content} 
//                                 placeholder="Enter the Content Here..."
//                                 value={formData.content}
//                                 onChange={(e) => setFormData({ ...formData, content: e.target.value })}
//                             />
//                         </Row>
//                         <Row label="Image">
//                             <input type="file" onChange={handleImageChange} />
//                         </Row>
//                         <button className={styles.btn}>ADD</button>
//                     </form>
                
//                </div>
//                <h2>Blogs </h2>
//                {blogs.map((blog, i) => (
//                     <div className={styles.blog} key={i}>
//                         <h3>Title: {blog.title}</h3>
//                         <p>Content: {blog.content}</p>
//                         {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} style={{ width: "100px", height: "100px" }} />}
                        
//                         {blog.createdOn ? (
//                             <p>Created On: {blog.createdOn.toLocaleString()}</p>  // Display formatted date
//                         ) : (
//                             <p>Created On: Not available</p>  // Handle missing data
//                         )}
//                         <div className={styles.blog_btn}>
//                             <button onClick={() => removeBlog(blog.id)} className={styles.remove}>
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                ))}
//             </section>
//         </>
//     )
// }

// function Row(props) {
//     const{label} = props;
//     return (
//         <>
//             <label>{label}<br /></label>
//             {props.children}
//             <hr />
//         </>
//     )
// }

// export default Blogs;


import React, { useState, useRef, useEffect } from "react";
import styles from './Blogs.module.css';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Blogs() {
    const [sections, setSections] = useState([{ type: "title", value: "" }]);
    const [blogs, setBlogs] = useState([]);
    const titleRef = useRef(null);

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
                    createdOn: data.createdOn ? data.createdOn.toDate() : null
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
            sections: []
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
                {blogs.map((blog) => (
    <div className={styles.blog} key={blog.id}>
        {blog.sections && blog.sections.map((section, index) => {
            if (section.type === "title") {
                return <h3 key={index}>Title: {section.value}</h3>;
            }
            if (section.type === "content") {
                return <p key={index}>Content: {section.value}</p>;
            }
            if (section.type === "image") {
                return (
                    <img
                        key={index}
                        src={section.value}
                        alt="Blog Image"
                        style={{ width: "100px", height: "100px" }}
                    />
                );
            }
            return null;
        })}
        {blog.createdOn && <p>Created On: {blog.createdOn.toLocaleString()}</p>}
        <button onClick={() => removeBlog(blog.id)} className={styles.remove}>
            Delete
        </button>
    </div>
))}
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

export default Blogs;