import React from "react";
import { Formik } from "formik";
import AuthContext from "../../../../context/auth.context";
import FormikLogin from "./form";

import LoginSchema from '../../../../validations/logingValidations';

const LoginForm = () => {
  const authContext = React.useContext(AuthContext);
  const initalValues = {
    username: "",
    pass: "",
  };

  const onSubmit = (data) => console.log(data);
  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initalValues}
      validationSchema={LoginSchema}
    >
      {(props) => <FormikLogin {...props} />}
    </Formik>
  );
};

export default LoginForm;
