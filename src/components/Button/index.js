import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { LoadingOutlined } from "@ant-design/icons";

import styles from "./Button.module.css";

const Button = ({
  onSubmit,
  type,
  className,
  disabled,
  children,
  buttonType = "white",
}) => {
  return (
    <>
      <button
        onClick={onSubmit}
        type={type}
        disabled={disabled}
        className={cx(className, styles.button, {
          [styles.white]: buttonType === "white",
          [styles.transparent]: buttonType === "transparent",
        })}
      >
        <p>
          <span className={cx(styles.bg)}></span>
          <span className={cx(styles.base)}></span>
          <span className={cx(styles.text)}>
            {disabled && <LoadingOutlined className={styles.loadingIcon} />}
            {!disabled && children}
          </span>
        </p>
      </button>
    </>
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
