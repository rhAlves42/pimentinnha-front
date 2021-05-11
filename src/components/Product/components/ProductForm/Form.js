import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Form } from "formik";
import _get from "lodash/get";
import productService from "../../../../services/product.service";
import Button from "../../../Button";
import Field from "../../../Field";
import { money } from "../../../../utils/number";

const FormikProduct = ({ isSubmitting, values, edit, ...props }) => {
  const [brandOptions, setBrandOptions] = React.useState([]);
  const [categoryOptions, setCategoryOptions] = React.useState([]);
  const sizeOptions = [
    {
      id: "P",
      value: "P",
    },
    {
      id: "M",
      value: "M",
    },
    {
      id: "G",
      value: "G",
    },
    {
      id: "GG",
      value: "GG",
    },
  ];

  const fetchOptions = async () => {
    const data = await productService.getOptions();
    const newBrands = _get(data, "brands", []);
    const newCategory = _get(data, "category", []);
    setCategoryOptions(newCategory);
    setBrandOptions(newBrands);
  };

  React.useEffect(() => {
    fetchOptions();
  }, []);
  const fieldClassNames = {
    fieldWrapperClassName: cx("u-size12of12", {
      "u-sm-size6of12 u-md-size4of12 u-lg-size4of12": !edit,
      "u-sm-size12of12 u-md-size12of12 u-lg-size12of12": !edit,
    }),
    className: cx("mb16", { "w-40": edit }),
  };
  return (
    <Form noValidate className="Grid">
      {!edit && (
        <>
          <Field
            values={values}
            label="Nome do produto"
            type="text"
            name="nome"
            {...fieldClassNames}
            {...props}
          />
          <Field
            values={values}
            label="Marca"
            type="select"
            name="marca"
            options={brandOptions}
            {...fieldClassNames}
            {...props}
          />
          <Field
            values={values}
            label="Categoria"
            type="select"
            name="categoria"
            options={categoryOptions}
            {...fieldClassNames}
            {...props}
          />
          <Field
            values={values}
            label="Tamanho"
            type="select"
            name="tamanho"
            options={sizeOptions}
            {...fieldClassNames}
            {...props}
          />
          <Field
            values={values}
            label="Caracteristica"
            type="text"
            name="caracteristica"
            {...fieldClassNames}
            {...props}
          />
        </>
      )}
      <Field
        values={values}
        label="Valor pago unidade"
        type="text"
        name="valorUnitario"
        mask={money}
        {...fieldClassNames}
        {...props}
      />
      <Field
        values={values}
        label="Quantidade adquirida"
        type="number"
        name="qtdAdquirida"
        {...fieldClassNames}
        {...props}
      />
      <Field
        values={values}
        label="Valor do produto"
        type="text"
        name="valorProdudo"
        mask={money}
        {...fieldClassNames}
        {...props}
      />
      <div className="u-size12of12 u-sm-size5of12 u-md-size6of12 u-lg-size6of12">
        <div className="w-50 mt32-ns">
          <Button disabled={isSubmitting} type="submit">
            Salvar
          </Button>
        </div>
      </div>
    </Form>
  );
};

FormikProduct.propTypes = {
  isSubmitting: PropTypes.bool,
};

export default FormikProduct;
