import React from "react";
import { Formik } from "formik";
import { navigate } from "gatsby";
import Fade from "react-reveal/Fade";

import FormikLogin from "./form";
import AuthService from "../../../../services/auth.services";
import LoginSchema from "../../../../validations/logingValidations";

const LoginForm = () => {
  const [errorMessage, setErrorMessage] = React.useState("");
  const initalValues = {
    username: "",
    pass: "",
  };

  const onSubmit = async (data) => {
    const { email, password } = data;

    const onError = (error) => setErrorMessage(error);
    const onSuccess = (user) => {
      navigate('/');
    };

    await AuthService.login({ email, password, onError, onSuccess });
  };

  return (
    <>
      <Fade bottom when={!!errorMessage}>
        <p className="primary-color">{errorMessage}</p>
      </Fade>

      <Formik
        onSubmit={onSubmit}
        initialValues={initalValues}
        validationSchema={LoginSchema}
      >
        {(props) => <FormikLogin {...props} />}
      </Formik>
    </>
  );
};

export default LoginForm;
