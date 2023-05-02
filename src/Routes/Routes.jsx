import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: 'blog',
        element: <Blog></Blog>,
      },
      {
        path: 'login',
        element: <Login></Login>,
      },
      {
        path: 'register',
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
