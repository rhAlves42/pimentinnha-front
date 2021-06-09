import React from "react";
import PropTypes from "prop-types";
import _get from "lodash/get";
import _keys from "lodash/keys";
import _map from "lodash/map";
import { navigate } from "gatsby";

import CustomTable from "../../../../CustomTable";
import ActionButtons from "../../../../CustomTable/components/ActionButtons";
import { MODAL_DELETE_INITIAL_VALUES } from "../../../../CustomTable/constants";
import productService from "../../../../../services/product.service";

const ProductTable = ({ data }) => {
  const [currentProducts, setCurrentProducts] = React.useState(data);
  const [modalConfig, setModalConfig] = React.useState(
    MODAL_DELETE_INITIAL_VALUES
  );

  const [isLoading, setIsLoading] = React.useState(false);
  const onConfirmDelete = async () => {
    const itemId = _get(modalConfig, "id", "");
    if (!itemId) return;

    const onSuccess = (res) => {
      const newCurrentProducts = _filter(
        data,
        (product) => product.id !== itemId
      );
      setCurrentProducts(newCurrentProducts);
      setModalConfig(MODAL_DELETE_INITIAL_VALUES);
    };
    const onError = (err) => console.error(err);
    await productService.deleteProduct(itemId, onSuccess, onError);
  };
  const onEdit = (itemId) => navigate(`/produto/editar/?productId=${itemId}`);

  const onDelete = (itemInfo) => {
    const newModalConfig = {
      visible: true,
      id: _get(itemInfo, "id", ""),
      name: _get(itemInfo, "nome", ""),
    };
    setModalConfig(newModalConfig);
  };

  React.useEffect(() => setCurrentProducts(data), [data]);

  const columns = [
    { title: "Nome", dataIndex: "nome", key: "nome", searchable: true },
    { title: "Marca", dataIndex: "marca", key: "marca", searchable: true },
    {
      title: "Categoria",
      dataIndex: "categoria",
      key: "categoria",
      searchable: true,
    },
    {
      title: "Tamanho",
      dataIndex: "tamanho",
      key: "tamanho",
      searchable: true,
    },
    {
      title: "Caracteristica",
      dataIndex: "caracteristica",
      key: "caracteristica",
      searchable: true,
    },
    { title: "Valor cobrado", dataIndex: "precoVenda", key: "precoVenda" },
    { title: "Qtd. Estoque", dataIndex: "qtdEstoque", key: "qtdEstoque" },
    {
      title: "Ações",
      fixed: 'right',
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
          navigate(`/produto/detalhe/?productId=${record.id}`)
        }
        columns={columns}
        dataSource={currentProducts}
        isLoading={isLoading}
        modalConfig={modalConfig}
        setModalConfig={setModalConfig}
        onConfirmDelete={onConfirmDelete}
      />
    </>
  );
};

ProductTable.propTypes = {
  data: PropTypes.array,
};
export default ProductTable;
