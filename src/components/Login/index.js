import React from "react";
import LoginForm from "./components/LoginForm";
import Icon from '../Icons';
const Login = () => {
  return (
    <section className="flex items-center justify-center vh-100 w-100 ">
      <Icon name="Icon" width={25} />
      <LoginForm />
    </section>
  );
};

export default Login;
