import React from "react";
import PropTypes from "prop-types";
import { Form } from "formik";
import cx from 'classnames';
import Button from "../../../Button";
import Field from '../../../Field';

const FormikLogin = ({ isSubmitting, values, ...props }) => { 
  const fieldClassName = cx('mb16', 'error')
  return (
    <Form noValidate className="flex flex-column justify-center mc center w-100 w-40-ns ">
      <Field values={values} label="E-mail" type="text" name="email" className="mb16" {...props} />
      <Field values={values} label="Senha" type="password" name="password" className="mb16" {...props} />
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
