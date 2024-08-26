import React from "react";
import styles from './Blogs.module.css';
import { useState , useRef , useEffect } from "react";
import { db } from '../../firebaseConfig';
import { collection, addDoc, getDocs , onSnapshot , setDoc, doc ,deleteDoc , snapshotEqual} from "firebase/firestore"; 

function Blogs() {

    const [formData, setFormData] = useState({title: "", content: "",});
    const [blogs , setBlogs] = useState([]);
    const titleRef = useRef(null);
    
    useEffect(() => {
        titleRef.current.focus();
    }, []);

    useEffect(() => {

        // async function fetchData() {
        //     const snapShot = await getDocs(collection(db, "blogs"));
        //     console.log(snapShot);

        //     const blogs = snapShot.docs.map((doc) => {
        //         return {
        //             id: doc.id,
        //             ...doc.data()
        //         }
        //     })
        //     console.log(blogs);
        //     setBlogs(blogs);
        // }

        // fetchData();

        const unsub = onSnapshot(collection(db, "blogs"), (snapshot) => {
            const blogs = snapshot.docs.map((doc) => {
                const data = doc.data();
                return {
                    id: doc.id,
                    title: data.title,
                    content: data.content,
                    createdOn: data.createdOn ? data.createdOn.toDate() : null  // Convert Firebase Timestamp to JS Date
                };
            });
            console.log(blogs);
            setBlogs(blogs);
        });
        // Cleanup subscription on unmount
        return () => unsub();
    }, []);


    async function handleSubmit(e) { 
        e.preventDefault();

        //setBlogs([{title: formData.title, content: formData.content},...blogs]);
        
        try {
            const docRef = await addDoc(collection(db, "blogs"), {
                title: formData.title,
                content: formData.content,
                createdOn: new Date()
            })
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        
        setFormData({title: "" , content: ""});
        titleRef.current.focus();
    }

    async function removeBlog(id) {
        // we want to filter out all the blogs except the matched blog
        // setBlogs(blogs.filter((blog, index) => i!==index))
        const docRef = doc(db, "blogs" ,id);
        await deleteDoc(docRef)
    }

    return (
        <>
            <section className={styles.blogs_Section}>
               <h2 className={styles.heading}>Blogs</h2>
               <div className={styles.section}>
                    <form onSubmit={handleSubmit}>
                        <Row label="Title">
                            <input className={styles.input}
                                placeholder="Enter the Title Here..."
                                value={formData.title}
                                ref = {titleRef}
                                onChange={(e) => setFormData({title: e.target.value, content: formData.content})}
                            />
                        </Row>
                        <Row label="Content">
                            <textarea className={styles.content} 
                                placeholder="Enter the Content Here..."
                                value={formData.content}
                                onChange={(e) => setFormData({title: formData.title, content: e.target.value})}
                            />
                        </Row>
                        <button className={styles.btn}>ADD</button>
                    </form>
                
               </div>
               <h2>Blogs </h2>
               {blogs.map((blog, i) => (
                    <div className={styles.blog} key={i}>
                        <h3>Title: {blog.title}</h3>
                        <p>Content: {blog.content}</p>
                        {blog.createdOn ? (
                            <p>Created On: {blog.createdOn.toLocaleString()}</p>  // Display formatted date
                        ) : (
                            <p>Created On: Not available</p>  // Handle missing data
                        )}
                        <div className={styles.blog_btn}>
                            <button onClick={() => removeBlog(blog.id)} className={styles.remove}>
                                Delete
                            </button>
                        </div>
                    </div>
               ))}
            </section>
        </>
    )
}

function Row(props) {
    const{label} = props;
    return (
        <>
            <label>{label}<br /></label>
            {props.children}
            <hr />
        </>
    )
}

export default Blogs;