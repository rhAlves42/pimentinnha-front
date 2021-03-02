import React from "react";
import PropTypes from "prop-types";
import Button from "../../../Button";
import Field from '../../../Field';
import { Form } from "formik";

const FormikLogin = ({ isSubmitting, values }) => {
  return (
    <Form noValidate className="flex flex-column justify-center mc center w-100 w-40-ns ">
      <Field values={values} label="E-mail" type="text" name="username" className="mb16" />
      <Field values={values} label="Senha" type="password" name="pass" className="mb16" />
      <Button disabled={isSubmitting} type="submit" className="w-80 w-60-ns ma-ns">
        Entrar
      </Button>
    </Form>
  );
};

FormikLogin.propTypes = {
  isSubmitting: PropTypes.bool,
};

export default FormikLogin;
