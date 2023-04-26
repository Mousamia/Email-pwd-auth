/* eslint-disable no-unused-vars */
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/layout/Main';
import Login from './components/Login/Login';
// import SignIn from './components/SignUp/SignUp';
import SignUp from './components/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Main/>,
    children: [
      {
        path: "/login",
        element: <Login/>
      },

      {
        path: "/signup",
        element: <SignUp/>
      },
    ] 
   
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   
    <RouterProvider router={router} />
  </React.StrictMode>
);