import Link from "next/link";
import styles from "../../styles/Home.module.css";
import { db } from "../firebaseinit";

import { collection, addDoc } from "firebase/firestore"; 

// Add a new document with a generated id.
const docRef = await addDoc(collection(db, "cities"), {
  name: "Tokyo",
  country: "Japan"
});
console.log("Document written with ID: ", docRef.id);

const blog = () => {
    return (
        <div style={{paddingTop:"150px"}}>
            {/* <h1>welcome to Code Aspirant blogs</h1>
            <Link href="/blog/first-post">First post</Link> */}
            <h2 className={styles.maintenance}>This page is under Maintenance</h2>
        </div>
    );
}

export default blog;