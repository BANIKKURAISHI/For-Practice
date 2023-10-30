import { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router-dom";
import { PropTypes } from "prop-types";

const Privet = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/in"></Navigate>;
};
//state={location.pathname}

Privet.propTypes = {
  children: PropTypes.node,
};
export default Privet;
