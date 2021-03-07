import React from "react";
import AdminLayout from "../../../components/Layout/AdminLayout";
import ProductForm from "../../../components/Product/components/ProductForm";
const CreateProductPage = () => {
  return (
    <AdminLayout pageTitle="Cadastro - Produtos">
      <main className="mc center">
        <ProductForm />
      </main>
    </AdminLayout>
  );
};

export default CreateProductPage;
