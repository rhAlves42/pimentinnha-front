import React from "react";
import { Table, Tag, Space } from "antd";
import PropTypes from "prop-types";
import _keys from "lodash/keys";
import _map from "lodash/map";
import styles from "./ProductTable.module.css";
const ProductTable = ({ data }) => {
  const columns = [
    { title: "Nome", dataIndex: "nome", key: "nome" },
    { title: "Marca", dataIndex: "marca", key: "marca" },
    { title: "Categoria", dataIndex: "categoria", key: "categoria" },
    { title: "Tamanho", dataIndex: "tamanho", key: "tamanho" },
    {
      title: "Caracteristica",
      dataIndex: "caracteristica",
      key: "caracteristica",
    },
    { title: "Valor cobrado", dataIndex: "precoVenda", key: "precoVenda" },
    { title: "Qtd. Estoque", dataIndex: "qtdEstoque", key: "qtdEstoque" },
    { title: "Ações", dataIndex: null },
  ];
  console.log(_keys(data[0]));

  return <Table columns={columns} dataSource={data} />;
};

ProductTable.propTypes = {
  data: PropTypes.array,
};
export default ProductTable;
