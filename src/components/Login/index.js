import React from "react";
import { navigate } from "gatsby";
import LoginForm from "./components/LoginForm";
import Icon from '../Icons';
import { isLoggedIn } from "../../utils/auth";
const Login = () => {
  React.useEffect(() => {
    if (isLoggedIn()) navigate("/");
  }, []);
  return (
    <section className="flex items-center flex-column justify-center vh-100 w-100">
      <Icon name="Icon" width={80} height={120} />
      <LoginForm />
    </section>
  );
};

export default Login;
