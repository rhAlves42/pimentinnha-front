import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Form } from "formik";
import _get from "lodash/get";

import Button from "../../../Button";
import Field from "../../../Field";
import { phoneMask } from '../../../../utils/phone';
const FormikClient = ({ isSubmitting, values, edit, ...props }) => {
  const fieldClassNames = {
    fieldWrapperClassName: cx("u-size12of12", {
      "u-sm-size6of12 u-md-size4of12 u-lg-size4of12": !edit,
      "u-sm-size12of12 u-md-size12of12 u-lg-size12of12": !edit,
    }),
    className: cx("mb16", { "w-40": edit }),
  };
  return (
    <Form noValidate className="Grid">
      <Field
        values={values}
        label="Nome"
        type="text"
        name="nome"
        {...fieldClassNames}
        {...props}
      />
      <Field
        values={values}
        label="Telefone"
        mask={phoneMask}
        type="phone"
        name="telefone"
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

FormikClient.propTypes = {
  isSubmitting: PropTypes.bool,
};

export default FormikClient;
