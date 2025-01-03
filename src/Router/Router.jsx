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
        {
          path:'cart',
          element:<Cart></Cart>
        }
      ]
    }
  ]);

  export default router