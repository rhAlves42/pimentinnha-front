import React from 'react';
import { navigate } from "gatsby";
import LoginForm from "./components/LoginForm";

const Form = ({  }) => {
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

export default Form;