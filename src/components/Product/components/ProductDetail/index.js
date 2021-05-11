import React from "react";
import _get from "lodash/get";
import { Button } from "antd";

import { navigate } from "gatsby";

import productService from "../../../../services/product.service";
import AdminLayout from "../../../Layout/AdminLayout";
import DetailHeader from "./components/DetailHeader";
import CustomTable from "../../../CustomTable";
import { getUrlParams } from "../../../../utils/url";

import ErrorModal, { ERRORS_MESSAGES } from "../../../ErrorModal";
import { normalizeMoney } from "../../../../utils/number";
import { normalizeDate } from "../../../../utils/date";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

const ProductDetail = () => {
  const [productData, setProductData] = React.useState(null);
  const [productHistoricData, setProductHistoricData] = React.useState(null);
  const [hasError, setHasError] = React.useState(false);
  const urlData = getUrlParams();
  const productId = _get(urlData, "productId", "");

  const getData = async () => {
    const onError = (err) => {
      setHasError(true);
    };

    const onSuccess = (product) => {
      setProductData(product);
    };

    const onSuccessHistoric = (historicData) => {
      setProductHistoricData(historicData);
    };

    const onErrorHistoric = (err) => {};

    await productService.getProduct(productId, onSuccess, onError);
    await productService.getProductHistoric(
      productId,
      onSuccessHistoric,
      onErrorHistoric
    );
  };

  const handleCloseModalError = (newStatus) => {
    setHasError(newStatus);
    navigate("/produto");
  };
  React.useEffect(() => {
    if (productId) {
      getData();
    }
  }, []);

  if (hasError) {
    ErrorModal({
      errorMessage: ERRORS_MESSAGES.product_not_found,
      setIsOpen: handleCloseModalError,
    });
  }

  const handleEdit = () => navigate(`/produto/editar/?productId=${productData.id}`);
  const handleDelete = () => console.log('deletando', productData.id)

  React.useEffect(
    () => console.log("productHistoricData", productHistoricData),
    [productHistoricData]
  );

  const productName = _get(productData, "nome", "Carregando...");

  const columns = [
    {
      title: "Data da Aquisição",
      dataIndex: "dataAquisicao",
      key: "dataAquisicao",
      render: (record) => {
        const formatedRecord = normalizeDate(record);
        return <>{formatedRecord}</>;
      },
    },
    {
      title: "Valor pago unitário",
      dataIndex: "precoCompra",
      key: "precoCompra",
      render: (record) => {
        const formatedRecord = normalizeMoney(record);
        return <>{formatedRecord}</>;
      },
    },
    {
      title: "Quantidade adquirida",
      dataIndex: "qtdComprada",
      key: "qtdComprada",
    },
    {
      title: "Valor do produto",
      dataIndex: "precoUnd",
      key: "precoUnd",
      render: (record) => {
        const formatedRecord = normalizeMoney(record);
        return <>{formatedRecord}</>;
      },
    },
  ];

  return (
    <AdminLayout
      pageTitle={`${productName} - Produtos`}
      isLoading={!productData}
    >
      <main className="mc center">
        <h2 className="white-90 mb24 mt16">{`Detalhe do produto - ${productName}`}</h2>
        <DetailHeader product={productData} />
        <section className="mt24">
          <div className="w-100 flex justify-end mb24">
            <Button onClick={handleEdit} className="mr16" icon={<EditOutlined />}>Atualizar</Button>
            <Button onClick={handleDelete} icon={<DeleteOutlined />}>Deletar</Button>
          </div>
          <CustomTable columns={columns} dataSource={productHistoricData} />
        </section>
      </main>
    </AdminLayout>
  );
};

export default ProductDetail;
