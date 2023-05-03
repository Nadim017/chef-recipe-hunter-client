import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';
import Blog from '../Components/Blog/Blog';
import Login from '../Components/Login/Login';
import Register from '../Components/Register/Register';
import Error from '../Components/Error/Error';
import ChefRecipes from '../Components/ChefRecipes/ChefRecipes';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/:id',
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
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
        path: '*',
        element: <Error></Error>,
      },
    ],
  },
]);

export default router;
