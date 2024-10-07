import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../Context/userContext';

const PublicRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  if (token) {
    return <Navigate to="/" />;
  }

  return children;
};

export default PublicRoute;
