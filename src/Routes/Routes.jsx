import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Error from '../Components/Error/Error';
import ChefRecipes from '../Components/ChefRecipes/ChefRecipes';
import PrivateRoute from './PrivateRoute';
import Contact from '../Components/Contact/Contact';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Home></Home>
          </PrivateRoute>
        ),
      },
      {
        path: '/:id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(
            `https://chef-recipe-hunting-server-pi.vercel.app/chef/${params.id}`
          ),
      },
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
      {
        path: '/contact',
        element: <Contact></Contact>,
      },

      {
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
