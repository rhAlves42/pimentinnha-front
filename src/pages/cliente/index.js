import React from "react";
import _lowerCase from "lodash/lowerCase";
import _filter from "lodash/filter";
import { PlusCircleOutlined } from "@ant-design/icons";
import { navigate } from "gatsby";

import Button from "../../components/Button";
import AdminLayout from "../../components/Layout/AdminLayout";
import ClientService from "../../services/client.service";
import ClientTable from "../../components/Cliente/components/ClientTable";

export default function ClientsPage() {
  const [clients, setClients] = React.useState([]);
  const getData = async () =>
    await ClientService.listClient().then((res) => setClients(res));
  React.useEffect(() => {
    console.log('render')
    getData();
  }, []);

  const handleAddClient = () => navigate("/cliente/cadastro");

  return (
    <AdminLayout pageTitle="Lista - Produtos">
      <main className="mc center">
        <div className="flex justify-between mb24 mt16">
          <h2 className="white-90">Lista de produtos</h2>
          <Button onClick={handleAddClient} icon={<PlusCircleOutlined />}>
            Adicionar
          </Button>
        </div>
        <ClientTable data={clients} />
      </main>
    </AdminLayout>
  );
}
