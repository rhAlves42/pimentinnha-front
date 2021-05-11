import React from "react";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
const { error } = Modal;

export const ERRORS_MESSAGES = {
  product_not_found: "Produto não encontrado!",
  client_not_found: "Cliente não encontrado!",
};
const ErrorModal = ({ isOpen, setIsOpen, errorMessage }) => {
  return error({
    title: <span className="white-90">Erro!</span>,
    icon: <ExclamationCircleOutlined />,
    content: <p className="fw3 f16 white-90">{errorMessage}</p>,
    onOk() {
      setIsOpen(false);
    },
    onCancel() {
      setIsOpen(false);
    },
  });
};
export default ErrorModal;
