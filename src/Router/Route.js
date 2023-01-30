import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../components/Main/Main'
import Home from "../pages/Home/Home";
import Checkout from "../pages/Checkout/Checkout";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import ViewCart from "../pages/ViewCart/ViewCart";
import Dashboard from "../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

  export const router = createBrowserRouter([
      {
        path: "/",
        element: <Main/>,
        children:[
          {
            path: "/",
            element: <Home></Home>,
          },
          {
            path: "/viewCart",
            element: <ViewCart></ViewCart>,
          },
          {
            path: "/checkout",
            element: <Checkout></Checkout>,
          },
          {
            path: "/contactus",
            element: <ContactUs></ContactUs>,
          },
          {
            path: "/dashboard",
            element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
          },
        ]
      },
      {
          path:"/login",
          element:<Login></Login>,
      },
      // {
      //   path:"/unauthorized",
      //   element:<Unauthorized></Unauthorized>,
      // },
      {
          path:"/registration",
          element:<Registration></Registration>
      },
      
      {
        path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1><p className="text-4xl">please go back...</p></div>
      }
    ]);