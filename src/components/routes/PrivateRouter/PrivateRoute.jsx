import React, { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import LoadingSpinner from "../../pages/LoadingSpinner/LoadingSpinner";

// A private route that requires the user to be authenticated before accessing
// the content. If the user is not authenticated, they will be redirected to the
// login page.
const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  console.log(location);

  // If the authentication status is still loading, show a spinner
  if (loading) {
    return <LoadingSpinner />;
  }

  // If the user is authenticated, render the children
  if (user) {
    return children;
  }

  // If the user is not authenticated, redirect to the login page
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
