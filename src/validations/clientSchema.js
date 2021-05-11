import * as Yup from 'yup';

export const CreateClientSchema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório!'),
  telefone: Yup.string().required('Campo obrigatório!'),
});
