import React from "react";
import { Formik } from "formik";
import { navigate } from "gatsby";
import _get from "lodash/get";
import Fade from "react-reveal/Fade";

import FormikClient from "./FormikForm";
import ClientService from "../../../../services/client.service";
import { CreateClientSchema } from "../../../../validations/clientSchema";
import { removeMaskMoney } from "../../../../utils/number";

const ClientForm = ({ edit }) => {
  const [errorMessage, setErrorMessage] = React.useState("");

  const formatPayload = (data) => ({
    ...data,
    createdDate: new Date().toISOString(),
  });

  const initalValues = {
    nome: "",
    telefone: "",
  };

  const onSubmit = async (data) => {
    const onError = (error) => setErrorMessage(error);
    const onSuccess = () => {
      navigate("/cliente");
    };

    const formatedPayload = formatPayload(data);
    await ClientService.createClient(formatedPayload, onSuccess, onError);
  };

  return (
    <>
      <Fade bottom when={!!errorMessage}>
        <p className="primary-color">{errorMessage}</p>
      </Fade>

      <Formik
        onSubmit={onSubmit}
        initialValues={initalValues}
        validationSchema={CreateClientSchema}
      >
        {(props) => <FormikClient {...props} edit={edit} />}
      </Formik>
    </>
  );
};

export default ClientForm;
