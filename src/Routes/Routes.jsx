import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/DashBoard/Dashboard";
import Main from "../Layouts/Main/Main";
import AddItem from "../Pages/Dashboard/AddItem/AddItem";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Menu from "../Pages/Menu/Menu/Menu";
import Shop from "../Pages/Shop/Shop/Shop";
import SignUp from "../Pages/SignUp/SignUp";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";


const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
           path:'/',
           element:<Home></Home>
        },
        {
            path:'/menu',
            element:<Menu></Menu>
        },
        {
            path:'/shop/:category',
            element:<Shop></Shop>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/signup',
            element:<SignUp></SignUp>
        },
        
        

        
    ]

},
{
    path:'dashboard',
    element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children:[
        {
         path:'mycart',
         element:<MyCart></MyCart>
        },
        {
         path:'payment',
         element:<Payment></Payment>
        },
        {
         path:'paymenthistory',
         element:<PaymentHistory></PaymentHistory>
        },
        {
         path:'userhome',
         element:<UserHome></UserHome>
        },
        
        {
         path:'users',
         element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
        },
        {
         path:'addItem',
         element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
         path:'manageitems',
         element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
        },
       
        {
         path:'adminhome',
         element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
        },
       
    ]
}
])
export default router;