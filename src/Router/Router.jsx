import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
 
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../OurShop/OurShop";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUP/SignUp";
import Screat from "../Pages/Screat/Screat";
import Privet from "../PrivetRoute/Privet";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Caart/Cart";
import Allusers from "../Pages/Dashboard/Allusers/Allusers";
import AdminRoute from '../PrivetRoute/AdminRoute'
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItem from "../Pages/Dashboard/ManageItem/ManageItem";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'menu',
          element:<Menu></Menu>
        },
        {
          path:'shop/:category',
          element:<OurShop></OurShop>
        },
        // {
        //   path:'shop/:category',
        //   element:<OurShop></OurShop>
        // },
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        },
        {
          path:'screat',
          element:<Privet><Screat></Screat></Privet>
        }
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        // Normal user
        {
          path:'cart',
          element:<Cart></Cart>,
        },
        // Admine route
        {
          path:'additems',
          element:<AdminRoute><AddItems></AddItems></AdminRoute>
        },
        {
          path:'mangeitems',
          element:<AdminRoute><ManageItem></ManageItem></AdminRoute>
        },
        {
          path:'allusers',
          element:<AdminRoute><Allusers></Allusers></AdminRoute>
        }
      ]
    }
  ]);

  export default router