import React from "react";
import { Formik } from "formik";
import { navigate } from "gatsby";
import _get from "lodash/get";
import Fade from "react-reveal/Fade";

import FormikProduct from "./Form";
import ProductService from "../../../../services/product.service";
import {
  CreateProductSchema,
  UpdateProductSchema,
} from "../../../../validations/productSchema";
import { removeMaskMoney } from "../../../../utils/number";

const ProductForm = ({ edit }) => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const formatPayload = (data) => ({
    ...data,
    precoCompra: removeMaskMoney(_get(data, "valorProdudo", "")),
    precoVenda: removeMaskMoney(_get(data, "valorUnitario", "")),
    precoUnd: removeMaskMoney(_get(data, "valorUnitario", "")),
    qtdComprada: _get(data, "qtdAdquirida", ""),
    qtdEstoque: _get(data, "qtdAdquirida", ""),
    createdDate: new Date().toISOString(),
  });

  const createInitalValues = {
    nome: "",
    marca: "",
    categoria: "",
    caracteristica: "",
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
  const initalValues = edit ? updateInitalValues : createInitalValues;

  const onSubmit = async (data) => {
    const onError = (error) => setErrorMessage(error);
    const onSuccess = () => {
      navigate("/produto");
    };

    const formatedPayload = formatPayload(data);
    ProductService.createProduct(formatedPayload, onSuccess, onError)
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
