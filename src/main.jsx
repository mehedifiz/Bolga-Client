import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Pages/Root.jsx';
import Home from './Pages/Home/Home.jsx';
import Authprovider from './Auth/Authprovider.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    children:[
      {
        path: '/',
        element:<Home></Home>
      }
    ]
     
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-6xl mx-auto'>

<React.StrictMode>
 <Authprovider> 
   <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
 </div>
)
