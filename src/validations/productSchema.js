import * as Yup from 'yup';

export const CreateProductSchema = Yup.object().shape({
  categoria: Yup.string()
    .required('Campo obrigatório!'),
  marca: Yup.string().required('Campo obrigatório!'),
  caracteristica: Yup.string().required('Campo obrigatório!'),
  nome: Yup.string().required('Campo obrigatório!'),
  tamanho: Yup.string().required('Campo obrigatório!'),
  valorUnitario: Yup.string().required('Campo obrigatório!'),
  qtdAdquirida: Yup.number().required('Campo obrigatório!'),
  valorProdudo: Yup.string().required('Campo obrigatório!'),
});


export const UpdateProductSchema = Yup.object().shape({
  valorUnitario: Yup.string().required('Campo obrigatório!'),
  qtdAdquirida: Yup.number().required('Campo obrigatório!'),
  valorProdudo: Yup.string().required('Campo obrigatório!'),
});
