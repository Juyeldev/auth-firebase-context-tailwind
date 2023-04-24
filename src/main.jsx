import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './component/Home';
import Login from './component/LOgin';
import Register from './component/Register';
import AuhtProvider from './providers/AuhtProvider';
import Orders from './component/Orders';
import PrivateRoute from './Route/PrivateRoute';
import Profile from './component/Profile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/register",
        element: <Register/>
      },
      {
        path:"/orders",
        element: <PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path:"/profile",
        element: <PrivateRoute><Profile/></PrivateRoute>
      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuhtProvider>
       <RouterProvider router={router} />
       </AuhtProvider>

  </React.StrictMode>,
)
