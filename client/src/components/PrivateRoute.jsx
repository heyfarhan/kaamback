import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = ({ element: Element }) => {
  const { isVerifiedForOtp } = useContext(AuthContext);

  if (!isVerifiedForOtp) {
    return <Navigate to="/" />;
  }

  return <Element />;
};

export default PrivateRoute;
