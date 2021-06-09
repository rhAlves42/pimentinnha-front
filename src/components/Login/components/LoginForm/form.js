import React from "react";
import PropTypes from "prop-types";
import { Form } from "formik";
import Button from "../../../Button";
import Field from '../../../Field';

const FormikLogin = ({ isSubmitting, values, ...props }) => { 
  return (
    <Form noValidate className="flex flex-column justify-center w-80 w-40-ns w-20-m w-30-l ">
      <Field values={values} label="E-mail" type="text" name="email" className="mb16" {...props} />
      <Field values={values} label="Senha" type="password" name="password" className="mb16" {...props} />
      <Button disabled={isSubmitting} type="submit" buttonType="default">
        Entrar
      </Button>
    </Form>
  );
};

FormikLogin.propTypes = {
  isSubmitting: PropTypes.bool,
};

export default FormikLogin;
