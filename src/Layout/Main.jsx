import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Sheard/Footer/Footer";
import Navbar from "../pages/Sheard/Navbar/Navbar";


const Main = () => {
    const location = useLocation();

    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUP');
    
    return (
        <div>
            { noHeaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            { noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;