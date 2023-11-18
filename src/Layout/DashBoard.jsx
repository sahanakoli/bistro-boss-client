import { FaBook, FaCalendar, FaCartShopping, FaHouse, FaList, FaUsers, FaUtensils } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { MdContactMail, MdRateReview } from "react-icons/md";

const DashBoard = () => {
    const [cart] = useCart();
    const isAdmin = true;

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className="menu p-4">
                    {
                        isAdmin ? <>
                        <li>
                <NavLink to="/dashboard/userHome">
                 <FaHouse></FaHouse>   
                User Home</NavLink></li>
               <li>
                <NavLink to="/dashboard/reservation">
                 <FaCalendar></FaCalendar>   
                Reservation</NavLink></li>
                <li>
                <NavLink to="/dashboard/cart">
                 <FaCartShopping></FaCartShopping>   
                My Cart ({cart.length})</NavLink></li>
               <li>
                <NavLink to="/dashboard/review">
                <MdRateReview />   
                Add a Review</NavLink></li>
               <li>
                <NavLink to="/dashboard/booking">
                 <FaList></FaList>   
                My Booking</NavLink>
                </li>
                        </>
                            :
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <FaHouse></FaHouse>
                                        Admin Home</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaUtensils></FaUtensils>
                                        Add Items</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaList></FaList>
                                        Manage Items</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/review">
                                        <FaBook />
                                        Manage Booking</NavLink></li>
                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <FaUsers></FaUsers>
                                        All Users</NavLink>
                                </li>
                            </>
                    }
                    {/* sheard navLinks */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHouse></FaHouse>
                            Home</NavLink></li>
                    <li>
                        <NavLink to="/order/salad">
                            <FiMenu />
                            Menu</NavLink></li>
                    <li>
                        <NavLink to="/order/contact">
                            <MdContactMail />
                            Contact</NavLink>
                            </li>
                    <li>
                        <NavLink to="users">
                            <MdContactMail />
                            All users</NavLink>
                            </li>
                </ul>
                
            </div>
            {/* dashboard content */}
            <div className="flex- 1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;