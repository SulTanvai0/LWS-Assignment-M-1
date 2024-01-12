import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
    return (
        <>
            <NavBar />
            {
                children
            }
            <Footer />
        </>
    );
};

export default Layout;