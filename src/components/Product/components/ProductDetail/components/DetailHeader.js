import React from "react";
import _get from 'lodash/get';
import PropTypes from "prop-types";
const DetailHeader = ({ product }) => {
  const productName = _get(product, "nome", "Carregando...");
  const productFeature = _get(product, "caracteristica", "");
  const productCategory = _get(product, "categoria", "");
  const productBrand = _get(product, "marca", "");
  const productQtd = _get(product, "qtdEstoque", "");
  const productSize = _get(product, "tamanho", "");
  return (
    <section className="Grid">
      <article className="flex flex-column u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12">
        <h3 className="white-90">Nome</h3>
        <p className="white-90">{productName}</p>
      </article>
      <article className="flex flex-column u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12">
        <h3 className="white-90">Marca</h3>
        <p className="white-90">{productBrand}</p>
      </article>
      <article className="flex flex-column u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12">
        <h3 className="white-90">Categoria</h3>
        <p className="white-90">{productCategory}</p>
      </article>
      <article className="flex flex-column u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12">
        <h3 className="white-90">Tamanho</h3>
        <p className="white-90">{productSize}</p>
      </article>
      <article className="flex flex-column u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12">
        <h3 className="white-90">Caracteristica</h3>
        <p className="white-90">{productFeature}</p>
      </article>
      <article className="flex flex-column u-size12of12 u-sm-size6of12 u-md-size4of12 u-lg-size4of12">
        <h3 className="white-90">Quantidade</h3>
        <p className="white-90">{productQtd}</p>
      </article>
    </section>
  );
};

DetailHeader.propTypes = {
  product: PropTypes.object,
};
export default DetailHeader;
