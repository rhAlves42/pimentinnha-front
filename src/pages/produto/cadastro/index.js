import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import ProductForm from "../../../components/Product/components/ProductForm";
const CreateProductPage = () => {
  return (
    <AdminLayout pageTitle="Cadastro - Produtos">
      <main className="mc center">
        <h2 className="white-90">Cadastro de produtos</h2>
        <ProductForm />
      </main>
    </AdminLayout>
  );
};

export default CreateProductPage;
