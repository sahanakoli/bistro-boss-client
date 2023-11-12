import { NavLink } from "react-router-dom";


const Navbar = () => {

    const navLink = <>
                <li><NavLink to='/'>HOME</NavLink></li>
                <li><NavLink to='/contactUs'>CONTACT US</NavLink></li>
                <li><NavLink to='/order'>ORDER FOOD</NavLink></li>
                <li><NavLink to='/menu'>OUR MENU</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar static bg-base-100  rounded-lg">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLink}
                        </ul>
                    </div>
                    <a className=" normal-case text-xl font-semibold">BISTRO BOSS</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLink}
                    </ul>
                    <a className="btn">Button</a>
                </div>
                
            </div>
        </div>
    );
};

export default Navbar;