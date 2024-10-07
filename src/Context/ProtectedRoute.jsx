import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from './userContext';

const ProtectedRoute = ({ children }) => {
  const { token } = useContext(UserContext);

  if (!token) {
    return <Navigate to="/Login" />;
  }

  return children;
};

export default ProtectedRoute;
