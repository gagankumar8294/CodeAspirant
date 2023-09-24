import Link from "next/link";
import styles from "../../styles/Home.module.css";

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