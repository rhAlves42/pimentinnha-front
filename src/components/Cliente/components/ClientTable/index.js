import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _keys from "lodash/keys";
import _map from "lodash/map";
import { navigate } from "gatsby";

import CustomTable from "../../../CustomTable";
import ActionButtons from "../../../CustomTable/components/ActionButtons";
import { MODAL_DELETE_INITIAL_VALUES } from "../../../CustomTable/constants";
import clientService from "../../../../services/client.service";

const ClientTable = ({ data }) => {
  const [currentClients, setCurrentClients] = React.useState(data);
  const [modalConfig, setModalConfig] = React.useState(
    MODAL_DELETE_INITIAL_VALUES
  );

  const [isLoading, setIsLoading] = React.useState(false);
  const onConfirmDelete = async () => {
    const itemId = _get(modalConfig, "id", "");
    if (!itemId) return;

    const onSuccess = (res) => {
      const newCurrentClients = _filter(
        data,
        (client) => client.id !== itemId
      );
      setCurrentClients(newCurrentClients);
      setModalConfig(MODAL_DELETE_INITIAL_VALUES);
    };
    const onError = (err) => console.error(err);
    await clientService.deleteClient(itemId, onSuccess, onError);
  };
  const onEdit = (itemId) => navigate(`/cliente/editar/?clientId=${itemId}`);

  const onDelete = (itemInfo) => {
    const newModalConfig = {
      visible: true,
      id: _get(itemInfo, "id", ""),
      name: _get(itemInfo, "nome", ""),
    };
    setModalConfig(newModalConfig);
  };

  React.useEffect(() => setCurrentClients(data), [data]);

  const columns = [
    { title: "Nome", dataIndex: "nome", key: "nome", searchable: true },
    { title: "Telefone", dataIndex: "telefone", key: "telefone" },
    {
      title: "Ações",
      dataIndex: null,
      render: ({ ...data }) => (
        <ActionButtons itemInfo={data} onEdit={onEdit} onDelete={onDelete} />
      ),
    },
  ];

  return (
    <>
      <CustomTable
        onRowClick={(record) =>
          navigate(`/cliente/detalhe/?clientId=${record.id}`)
        }
        columns={columns}
        dataSource={currentClients}
        isLoading={isLoading}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  );
};

ClientTable.propTypes = {
  data: PropTypes.array,
};
export default ClientTable;
