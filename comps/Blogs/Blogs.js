import React from "react";
import styles from './Blogs.module.css';
import { useState , useRef , useEffect } from "react";
import { db, storage  } from '../../firebaseConfig';
import { collection, addDoc, getDocs , onSnapshot , setDoc, doc ,deleteDoc , snapshotEqual} from "firebase/firestore"; 
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

function Blogs() {

    const [formData, setFormData] = useState({title: "", content: "" , image: null });
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
                    imageUrl: data.imageUrl || null, 
                    createdOn: data.createdOn ? data.createdOn.toDate() : null  // Convert Firebase Timestamp to JS Date
                };
            });
            console.log(blogs);
            setBlogs(blogs);
        });
        // Cleanup subscription on unmount
        return () => unsub();
    }, []);

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setFormData({ ...formData, image: e.target.files[0] });
        }
    };

    async function handleSubmit(e) { 
        e.preventDefault();

        //setBlogs([{title: formData.title, content: formData.content},...blogs]);
        if (!formData.image) {
            alert("Please select an image to upload.");
            return;
        }
        
        const storageRef = ref(storage, `blog-images/${formData.image.name}`);
        const uploadTask = uploadBytesResumable(storageRef, formData.image);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                // Optional: Show progress bar or upload status
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(`Upload is ${progress}% done`);
            },
            (error) => {
                console.error("Error uploading image:", error);
            },
            async () => {
                // Get download URL after upload
                const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                try {
                    const docRef = await addDoc(collection(db, "blogs"), {
                        title: formData.title,
                        content: formData.content,
                        imageUrl: downloadURL,
                        createdOn: new Date()
                    });
                    console.log("Document written with ID: ", docRef.id);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }

                setFormData({ title: "", content: "", image: null });
                titleRef.current.focus();
            }
        );
    }

    //     try {
    //         const docRef = await addDoc(collection(db, "blogs"), {
    //             title: formData.title,
    //             content: formData.content,
    //             createdOn: new Date()
    //         })
    //         console.log("Document written with ID: ", docRef.id);
    //     } catch (e) {
    //         console.error("Error adding document: ", e);
    //     }
        
    //     setFormData({title: "" , content: ""});
    //     titleRef.current.focus();
    // }

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
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            
                            />
                        </Row>
                        <Row label="Content">
                            <textarea className={styles.content} 
                                placeholder="Enter the Content Here..."
                                value={formData.content}
                                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            />
                        </Row>
                        <Row label="Image">
                            <input type="file" onChange={handleImageChange} />
                        </Row>
                        <button className={styles.btn}>ADD</button>
                    </form>
                
               </div>
               <h2>Blogs </h2>
               {blogs.map((blog, i) => (
                    <div className={styles.blog} key={i}>
                        <h3>Title: {blog.title}</h3>
                        <p>Content: {blog.content}</p>
                        {blog.imageUrl && <img src={blog.imageUrl} alt={blog.title} style={{ width: "100px", height: "100px" }} />}
                        
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