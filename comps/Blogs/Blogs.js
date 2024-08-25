import React from "react";
import styles from './Blogs.module.css';
import { useState } from "react";

function Blogs() {

    // const [title , setTitle] = useState("");
    // const [content , setContent] = useState("");
    const [formData, setFormData] = useState({title: "", content: "",});
    const [blogs , setBlogs] = useState([]);

    function handleSubmit(e) { 
        e.preventDefault();

        setBlogs([{title: formData.title, content: formData.content},...blogs]);
        setFormData({title: "" , content: ""});
    }

    function removeBlog(i) {
        // we want to filter out all the blogs except the matched blog
        setBlogs(blogs.filter((blog, index) => i!==index))
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
                        <div className={styles.blog_btn}>
                            <button onClick={() => removeBlog(i)} className={styles.remove}>
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