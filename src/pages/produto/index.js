import React from "react";
import _filter from "lodash/filter";
import { Button } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";
import { navigate } from "gatsby";
import _lowerCase from "lodash/lowerCase";

import ProductService from "../../services/product.service";
import AdminLayout from "../../components/Layout/AdminLayout";
import ProductTable from "../../components/Product/components/ProductForm/ProductTable";

export default function ProductPage() {
  const [products, setProducts] = React.useState([]);
  const getData = async () =>
    await ProductService.listProduct().then((res) => setProducts(res));
  React.useEffect(() => {
    getData();
  }, []);

  const handleAddProduct = () => navigate("/produto/cadastro");

  return (
    <AdminLayout pageTitle="Lista - Produtos">
      <main className="mc center">
        <div className="flex justify-between mb24 mt16">
          <h2 className="white-90">Lista de produtos</h2>
          <Button onClick={handleAddProduct} icon={<PlusCircleOutlined />}>
            Adicionar
          </Button>
        </div>
        <ProductTable data={products} />
      </main>
    </AdminLayout>
  );
};

