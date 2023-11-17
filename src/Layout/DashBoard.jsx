import { FaCalendar, FaCartShopping, FaHouse, FaList,  } from "react-icons/fa6";
import { FiMenu } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";
import { MdRateReview } from "react-icons/md";


const DashBoard = () => {
    return (
        <div className="flex">
            {/* dashboard side bar */}
           <div className="w-64 min-h-screen bg-orange-400">
            <ul className="menu p-4">
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
                My Cart</NavLink></li>
               <li>
                <NavLink to="/dashboard/review">
                <MdRateReview />   
                Add a Review</NavLink></li>
               <li>
                <NavLink to="/dashboard/booking">
                 <FaList></FaList>   
                My Booking</NavLink></li>
                <div className="divider"></div>
                <li>
                <NavLink to="/">
                 <FaHouse></FaHouse>   
                 Home</NavLink></li>
                <li>
                <NavLink to="/order/salad">
                <FiMenu />  
                 Menu</NavLink></li>
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