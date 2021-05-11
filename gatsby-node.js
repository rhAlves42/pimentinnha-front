const path = require('path');
exports.createPages = ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "/vendas/editar",
    matchPath: "/vendas/editar/*",
    component: path.resolve("./src/components/Home/Placeholder.js"),
  });
  createPage({
    path: "/produto/editar",
    matchPath: "/produto/editar/*",
    component: path.resolve("./src/components/Product/components/ProductForm/ProductFormPage/index.js"),
    context: {
      pageType: 'update',
    },
  });

  createPage({
    path: "/produto/cadastro",
    matchPath: "/produto/cadastro",
    component: path.resolve("./src/components/Product/components/ProductForm/ProductFormPage/index.js"),
    context: {
      pageType: 'cadastro',
    },
  });

  createPage({
    path: "/cliente/detalhe",
    matchPath: "/cliente/detalhe/*",
    component: path.resolve("./src/components/Product/components/ProductDetail/index.js"),
    context: {
      pageType: 'cadastro',
    },
  });
  
  
  createPage({
    path: "/cliente/editar",
    matchPath: "/cliente/editar/*",
    component: path.resolve("./src/components/Cliente/components/ClientFormPage/index.js"),
    context: {
      pageType: 'update',
    },
  });

  createPage({
    path: "/cliente/cadastro",
    matchPath: "/cliente/cadastro",
    component: path.resolve("./src/components/Cliente/components/ClientFormPage/index.js"),
    context: {
      pageType: 'cadastro',
    },
  });

  createPage({
    path: "/cliente/detalhe",
    matchPath: "/cliente/detalhe/*",
    component: path.resolve("./src/components/Product/components/ProductDetail/index.js"),
    context: {
      pageType: 'cadastro',
    },
  });
  
  createPage({
    path: "/cliente/editar",
    matchPath: "/cliente/editar/*",
    component: path.resolve("./src/components/Home/Placeholder.js"),
  });
};
