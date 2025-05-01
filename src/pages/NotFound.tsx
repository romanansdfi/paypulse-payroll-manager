
import { Link, Navigate } from "react-router-dom";

const NotFound = () => {
  // Redirect to login page
  return <Navigate to="/login" replace />;
};

export default NotFound;
