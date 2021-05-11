import React from 'react';

export const menuData = [
  {
    name: 'Vendas',
    icon: "ShopOutlined",
    children: [
      {
        name: 'Cadastrar vendas',
        path: '/vendas/cadastro',
        exact: true,
      },
      {
        name: 'Histórico de vendas',
        path: '/vendas/histórico',
        exact: true,
      },
    ],
  },
  {
    name: 'Estoque',
    icon: "AppstoreOutlined",
    path: '/produto',
  },
  {
    name: 'Clientes',
    icon: "TeamOutlined",
    path: '/cliente',
  },
  {
    name: 'Relatórios',
    icon: "BarChartOutlined",
    children: [
      {
        name: 'Relatório de rendimentos',
        path: '/relatorio/rendimento',
        exact: true,
      },
      {
        name: 'Relatório de gastos',
        path: '/relatorio/gastos',
        exact: true,
      },
      {
        name: 'Relatório de vendas',
        path: '/relatorio/vendas',
        exact: true,
      },
    ],
  },
];
