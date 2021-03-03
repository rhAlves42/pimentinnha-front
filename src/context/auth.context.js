import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import { navigate } from "gatsby";
import { isLoggedIn } from "../utils/auth";
import { getDataFromStorage } from "../utils/localStorage";
const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const user = getDataFromStorage({ dataName: "user" });

  React.useEffect(() => {
    if (!isLoggedIn()) navigate("/login");
    if (isLoggedIn()) navigate("/");
  }, []);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthContext;
