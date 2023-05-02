import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Components/Home/Home';
import Main from '../Layout/Main';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [],
  },
]);

export default router;