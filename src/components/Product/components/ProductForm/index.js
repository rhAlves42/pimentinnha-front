import React from "react";
import { Formik } from "formik";
import { navigate } from "gatsby";
import Fade from "react-reveal/Fade";

import FormikProduct from "./Form";
import AuthService from "../../../../services/auth.services";
import { CreateProductSchema, UpdateProductSchema } from "../../../../validations/productSchema";

const ProductForm = ({ edit }) => {
  const [errorMessage, setErrorMessage] = React.useState("");
  
  const createInitalValues = {
    nome: "",
    marca: "",
    categoria: "",
    cor: "",
    tamanho: "",
    valorUnitario: "",
    qtdAdquirida: "",
    valorProdudo: "",
  };
  const updateInitalValues = {
    valorUnitario: "",
    qtdAdquirida: "",
    valorProdudo: "",
  };

  const currentSchema = edit ? UpdateProductSchema : CreateProductSchema;
  const initalValues = edit ? createInitalValues : updateInitalValues;

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
        validationSchema={currentSchema}
      >
        {(props) => <FormikProduct {...props} />}
      </Formik>
    </>
  );
};

export default ProductForm;
