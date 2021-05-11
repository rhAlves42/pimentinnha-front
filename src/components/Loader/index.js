import React from "react";
import { Spin } from "antd";
const Loader = () => (
  <section className="mt24 flex justify-center items-center">
    <Spin tip="Carregando..." />
  </section>
);
export default Loader;
