import Link from "next/link";

const blog = () => {
    return (
        <div style={{paddingTop:"150px"}}>
            <h1>welcome to Code Aspirant blogs</h1>
            <Link href="/blog/first-post">First post</Link>
        </div>
    );
}

export default blog;