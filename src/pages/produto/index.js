import React from "react";
import _filter from "lodash/filter";
import _lowerCase from "lodash/lowerCase";
import ProductService from "../../services/product.service";

import AdminLayout from "../../components/Layout/AdminLayout";
import ProductTable from "../../components/Product/components/ProductForm/ProductTable";

export default function() {
  const [products, setProducts] = React.useState([]);
  const getData = async () =>
    await ProductService.listProduct().then((res) => setProducts(res));
  React.useEffect(() => {
    getData();
  }, []);

  return (
    <AdminLayout pageTitle="Lista - Produtos">
      <main className="mc center">
        <h2 className="white-90">Lista de produtos</h2>
        <ProductTable data={products} />
      </main>
    </AdminLayout>
  );
}
