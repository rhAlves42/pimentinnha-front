import React from "react";
import Home from "../components/Home";
import AdminLayout from "../components/Layout/AdminLayout";

const HomePage = () => (
  <AdminLayout pageTitle="Home">
    <Home />
  </AdminLayout>
);

export default HomePage;
