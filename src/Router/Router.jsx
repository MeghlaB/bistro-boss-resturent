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
        {
          path:'login',
          element:<Login></Login>
        },
        {
          path:'signUp',
          element:<SignUp></SignUp>
        }
      ]
    },
  ]);

  export default router