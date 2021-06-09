import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";
import { DefaultButton } from "./styles";

const Button = ({
  onSubmit,
  type,
  className,
  disabled,
  children,
  buttonType="default",
  ...props
}) => {
  return (
    <DefaultButton
      onClick={onSubmit}
      type={type}
      disabled={disabled}
      className={buttonType}
      {...props}
    >
      <span>{children}</span>
    </DefaultButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  onSubmit: PropTypes.func,
  type: PropTypes.string,
  className: PropTypes.string,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
