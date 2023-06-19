import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
    return (
        <nav>
            <div className="logo">
                <Image src="/black_logo.png" alt="codeaspirant-logo" width={80} height={77}/>
            </div>
            <Link className="links" href="/">Home</Link>
            <Link className="links" href="/about">About</Link>
            <Link className="links" href="/blog">Blog</Link>
        </nav>
    );
}

export default Navbar;