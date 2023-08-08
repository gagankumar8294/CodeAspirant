import Link from "next/link";

const blog = () => {
    return (
        <div>
            <h1>welcome to Code Aspirant blogs</h1>
            <Link href="/blog/first-post">First post</Link>
        </div>
    );
}

export default blog;