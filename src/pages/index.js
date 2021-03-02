import React from "react";
import AuthContext from "../context/auth.context";
import Login from "../components/Login";
const Home = () => {
  const authContext = React.useContext(AuthContext);

  return <Login />;
};

export default Home;
