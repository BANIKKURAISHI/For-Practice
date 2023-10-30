import { createContext, useEffect, useState } from "react";
import { PropTypes } from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../Dashboard/Page/firebase.config";

export const AuthContext = createContext();
const PrivetRoute = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const registrationButton = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginButton = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (CurrentUser) => {
      if (CurrentUser) {
        setLoading(false);
        setUser(CurrentUser); 
       // console.log(CurrentUser);
       
      }
    });
    return () => {
      return unsubscribe();
    };
  }, []);

  const logout = () => {

    return signOut(auth);
  };

  const AuthInfo = {registrationButton, loginButton, user, loading, logout };
  return (
    <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
  );
};
PrivetRoute.propTypes = {
  children: PropTypes.node,
};
export default PrivetRoute;
