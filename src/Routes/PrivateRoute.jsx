import React from 'react';
import { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';
import { authContext } from './../Providers/AuthProviders';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(authContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" />;
      </div>
    );
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" replace={true} state={{ from: location }}></Navigate>
  );
};

export default PrivateRoute;
