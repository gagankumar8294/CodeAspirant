import Navbar from "./Navbar"
import Head from "next/head";

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/fav_icon/codeaspirant.png" />
            </Head>
            <div className="content">
                <Navbar />
                { children }
            </div>
        </>
    );
}

export default Layout;