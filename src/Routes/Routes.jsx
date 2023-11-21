import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUP/SignUp";
import Secret from "../pages/Sheard/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/DashBoard/Cart/Cart";
import AllUsers from "../pages/DashBoard/AllUsers/AllUsers";
import AddItems from "../pages/DashBoard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItem from "../pages/DashBoard/ManageItem/ManageItem";
import UpdateItem from "../pages/DashBoard/UpdateItem/UpdateItem";
import Payment from "../pages/DashBoard/Payment/Payment";
import PaymentHistory from "../pages/DashBoard/PaymentHistory/PaymentHistory";
import UserHome from "../pages/DashBoard/UserHome/UserHome";
import AdminHome from "../pages/DashBoard/AdminHome/AdminHome";





  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'order/:category',
          element: <Order></Order>
        },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'secret',
          element:<PrivateRoute><Secret></Secret></PrivateRoute>
        }
      ]
    },
    {
      path:'dashboard',
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
        // normal user routes
        {
          path:'userHome',
          element:<UserHome></UserHome>
        },
        {
          path:'cart',
          element:<Cart></Cart>
        },
        {
          path:'payment',
          element:<Payment></Payment>
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>
        },
        // admin routes
        {
          path:'adminHome',
          element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
        {
          path:'addItems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'manageItem',
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path:'updateItem/:id',
          element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
          loader: ({params}) => fetch(`https://bistro-boss-server-ten-kappa.vercel.app/menu/${params.id}`)
        },
        {
          path:'users',
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        }
      ]
    }
  ]);

  