import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Authprovider from './Auth/Authprovider.jsx';
import Login from './Pages/Login/Login.jsx';
import Register from './Pages/Register/Register.jsx';
import { ToastContainer } from 'react-toastify';
import Blogpage from './Components/Blogs/Blogpage.jsx';
import Postblogs from './Pages/Postblog/Postblogs.jsx';
import Privateroute from './Auth/Private/Privateroute.jsx';
import Myblogs from './Pages/Myblogs/Myblogs.jsx';
import Updateblogs from './Pages/Updateblogs/Updateblogs.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/blog/:id',
        element: <Privateroute><Blogpage /></Privateroute>,
        loader: ({ params }) => fetch(`http://localhost:4000/allBloges/${params.id}`),
      },
      {
        path: '/post-blog',
        element: <Privateroute><Postblogs /></Privateroute>,
      },
      {
        path: '/my-blogs',
        element: <Privateroute><Myblogs /></Privateroute>,
      
      },{
        path: '/update-blog/:id',
        element:<Updateblogs></Updateblogs>,
        loader :({ params })=> fetch(`http://localhost:4000/allBloges/${params.id}`)
       
        }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
    <React.StrictMode>
      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>
    </React.StrictMode>
    <ToastContainer />
  </div>
);
