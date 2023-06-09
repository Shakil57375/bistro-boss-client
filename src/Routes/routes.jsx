import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Resgister/Register";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyCart from "../Pages/Dashboard/MyCart/MyCart";
import AllUser from "../Pages/Dashboard/AllUser/AllUser";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import MangeItems from "../Pages/Dashboard/ManageItems/MangeItems";
import Payment from "../Pages/Dashboard/Payment/Payment";
import UserHome from "../Pages/Dashboard/UserHome/UserHome";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children : [
        {
            path : "/",
            element : <Home></Home>
        },
        {
          path : "menu",
          element : <Menu></Menu>
        },
        {
          path : "/order/:category",
          element : <Order></Order>
        },
        {
          path : "/login",
          element : <Login></Login>
        },
        {
          path : "/register",
          element : <Register></Register>
        },
        {
          path : "/secret",
          element : <PrivateRoute><Secret></Secret></PrivateRoute>
        }
    ],
  },
  {
    path : "/dashboard",
    element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children : [
      {
        path : "userHome",
        element : <UserHome></UserHome>
      },
      {
        path : "adminHome",
        element : <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path : "mycart",
        element : <MyCart></MyCart>
      },
      {
        path : "payment",
        element : <Payment></Payment>
      },
      {
        path : "allUsers",
        element : <AdminRoute><AllUser></AllUser></AdminRoute>
      },
      {
        path : "addItem",
        element : <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path : "manageItems",
        element :<AdminRoute><MangeItems></MangeItems></AdminRoute>
      },
     
    ]
  }
]);

export default router