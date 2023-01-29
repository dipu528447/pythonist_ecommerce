import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from '../components/Main/Main'
import Home from "../pages/Home/Home";
import ViewCart from "../pages/ViewCart/ViewCart";

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

        ]
      },
      // {
      //     path:"/login",
      //     element:<Login></Login>,
      // },
      // {
      //   path:"/unauthorized",
      //   element:<Unauthorized></Unauthorized>,
      // },
      // {
      //     path:"/register",
      //     element:<Registration></Registration>
      // },
      
      {
        path:'/*', element:<div><h1 className="text-7xl">ERROR:404::Not Found</h1><p className="text-4xl">please go back...</p></div>
      }
    ]);