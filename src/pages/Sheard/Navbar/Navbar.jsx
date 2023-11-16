import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then(() =>{})
        .catch(error => console.log(error));
    }

    const navLink = <>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/contactUs'>CONTACT US</NavLink></li>
                <li><NavLink to='/order/salad'>ORDER FOOD</NavLink></li>
                <li><NavLink to='/menu'><span className=" text-yellow-400">OUR MENU</span></NavLink></li>
                <li><NavLink to='/secret'>SECRET</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar fixed z-10 text-white max-w-screen-xl mx-auto bg-black bg-opacity-70 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm text-black dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className=" normal-case text-xl font-semibold">BISTRO BOSS</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu text-white menu-horizontal px-1">
                        {navLink}
                    </ul>
                    {
        user ?
        <button onClick={handleLogOut} className="btn bg-[#D1A054] text-white">Sign Out</button>
        :
        <Link to="/login">
            <button className="btn bg-[#D1A054] text-white">Login</button>
        </Link>
      }
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;