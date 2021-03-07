import React from "react";
import PropTypes from "prop-types";
import { Form } from "formik";
import Button from "../../../Button";
import Field from '../../../Field';

const FormikProduct = ({ isSubmitting, values, ...props }) => {
  const brandOptions = [
    {id: 'teste', value: 'lorem ipsum'},
    {id: 'teste1', value: 'lorem ipsum2'},
    {id: 'teste2', value: 'lorem ipsum3'},
  ]
  return (
    <Form noValidate className="flex flex-column justify-center w-80 w-40-ns w-20-m w-30-l ">
      <Field values={values} label="Nome do produto" type="text" name="name" className="mb16" {...props} />
      <Field values={values} label="Marca" type="select" name="brand" options={brandOptions} className="mb16" {...props} />
      <Field values={values} label="Categoria" type="select" name="category" className="mb16" {...props} />
      <Field values={values} label="Tamanho" type="select" name="size" className="mb16" {...props} />
      <Field values={values} label="Caracteristica" type="text" name="feature" className="mb16" {...props} />
      <Field values={values} label="Valor pago unidade" type="text" name="unityPrice" className="mb16" {...props} />
      <Field values={values} label="Quantidade adquirida" type="text" name="qtdBuyed" className="mb16" {...props} />
      <Field values={values} label="Valor do produto" type="text" name="productPrice" className="mb16" {...props} />
      <Button disabled={isSubmitting} type="submit" className="w-80 w-60-ns ma-ns">
        Entrar
      </Button>
    </Form>
  );
};

FormikProduct.propTypes = {
  isSubmitting: PropTypes.bool,
};

export default FormikProduct;
