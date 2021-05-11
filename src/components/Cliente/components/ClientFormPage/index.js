import React from "react";
import _get from "lodash/get";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import ClientForm from "./Form"
import ErrorModal, { ERRORS_MESSAGES } from "../../../ErrorModal";
import AdminLayout from "../../../Layout/AdminLayout";
import { getUrlParams } from "../../../../utils/url";
import clientService from "../../../../services/client.service";

const ClientFormPage = ({ pageContext: { pageType } }) => {
  const [currentClient, setCurrentClient] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const pageTitle = pageType === "cadastro" ? "Cadastro" : "Editar";
  const urlData = getUrlParams();
  const clienteId = _get(urlData, "clientId", "");

  const getClientData = async () => {
    const onSuccess = (client) => {
      setCurrentClient(client);
    };
    const onError = (err) => console.error(err);
    return await clientService.getClient(clienteId, onSuccess, onError);
  };

  const handleCloseModalError = (newStatus) => {
    setHasError(newStatus);
    navigate("/cliente");
  };

  React.useEffect(() => {
    if (clienteId) {
      getClientData();
    }
  }, []);

  if (hasError) {
    ErrorModal({
      errorMessage: ERRORS_MESSAGES.client_not_found,
      setIsOpen: handleCloseModalError,
    });
  }

  const isUpdatePage = pageType === "update";

  const productName = _get(currentClient, "nome", "Carregando...");
  return (
    <AdminLayout
      pageTitle={`${isUpdatePage ? productName : 'Cadastro'} - Cliente`}
      isLoading={isUpdatePage && !currentClient}
    >
      <main className="mc center">
        <h2 className="white-90 mb24 mt16">{`${pageTitle} - ${
          isUpdatePage ? productName : "clientes"
        }`}</h2>
        <ClientForm edit={isUpdatePage} />
      </main>
    </AdminLayout>
  );
};

ClientFormPage.propTypes = {
  pageContext: PropTypes.object,
};

export default ClientFormPage;
