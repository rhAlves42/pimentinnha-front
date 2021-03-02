import * as Yup from 'yup';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .required('Campo obrigatório!')
    .email('Digite um e-mail válido'),
  password: Yup.string().required('Campo obrigatório!'),
});

export default LoginSchema;