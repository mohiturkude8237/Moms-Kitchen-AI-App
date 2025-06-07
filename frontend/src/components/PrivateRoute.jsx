// // src/components/PrivateRoute.jsx
// import React from "react";
// import PropTypes from "prop-types";
// import { Navigate, useLocation } from "react-router-dom";

// const PrivateRoute = ({ children }) => {
//   const isAuthenticated = !!localStorage.getItem("authToken"); // or useAuthContext()
//   const location = useLocation();

//   return isAuthenticated ? (
//     children
//   ) : (
//     <Navigate to="/login" state={{ from: location }} replace />
//   );
// };

// PrivateRoute.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// export default PrivateRoute;
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
