import React from "react";
import _get from "lodash/get";
import PropTypes from "prop-types";
import { navigate } from "gatsby";

import ProductForm from "..";
import ErrorModal, { ERRORS_MESSAGES } from "../../../../ErrorModal";
import AdminLayout from "../../../../Layout/AdminLayout";
import { getUrlParams } from "../../../../../utils/url";
import productService from "../../../../../services/product.service";

const ProductFormPage = ({ pageContext: { pageType } }) => {
  const [currentProduct, setCurrentProduct] = React.useState(false);
  const [hasError, setHasError] = React.useState(false);
  const pageTitle = pageType === "cadastro" ? "Cadastro" : "Editar";
  const urlData = getUrlParams();
  const productId = _get(urlData, "productId", "");

  const getProductData = async () => {
    const onSuccess = (product) => {
      setCurrentProduct(product);
    };
    const onError = (err) => console.error(err);
    return await productService.getProduct(productId, onSuccess, onError);
  };

  const handleCloseModalError = (newStatus) => {
    setHasError(newStatus);
    navigate("/produto");
  };

  React.useEffect(() => {
    if (productId) {
      getProductData();
    }
  }, []);

  if (hasError) {
    ErrorModal({
      errorMessage: ERRORS_MESSAGES.product_not_found,
      setIsOpen: handleCloseModalError,
    });
  }

  const isUpdatePage = pageType === "update";

  const productName = _get(currentProduct, "nome", "Carregando...");
  return (
    <AdminLayout
      pageTitle={`${isUpdatePage ? productName : 'Cadastro'} - Produtos`}
      isLoading={isUpdatePage && !currentProduct}
    >
      <main className="mc center">
        <h2 className="white-90 mb24 mt16">{`${pageTitle} - ${
          isUpdatePage ? productName : "produtos"
        }`}</h2>
        <ProductForm edit={isUpdatePage} />
      </main>
    </AdminLayout>
  );
};

ProductFormPage.propTypes = {
  pageContext: PropTypes.object,
};

export default ProductFormPage;
