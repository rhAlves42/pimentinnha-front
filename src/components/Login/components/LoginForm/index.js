import React from 'react';
import AuthContext from '../../../../context/auth.context';
import FormikLogin from './form';
import { Formik } from 'formik';
const LoginForm = () => {
  const authContext = React.useContext(AuthContext);
  const initalValues = {
    username: '',
    pass: '',
  };

  const onSubmit = (data) => console.log(data);
  return(
    <Formik onSubmit={onSubmit} initialValues={initalValues}>
      {props => (
        <FormikLogin {...props} />
      )}
    </Formik>
  );
};

export default LoginForm;