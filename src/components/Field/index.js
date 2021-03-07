import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import { Field as FmkField } from "formik";
import Fade from "react-reveal/Fade";

import styles from "./Field.module.css";
import Select from "./components/Select";
const Field = ({
  className,
  name,
  label,
  labelClassNames,
  onChange,
  values,
  errors,
  type,
  touched,
  options,
  ...props
}) => {
  const [onFocus, setOnFocus] = React.useState(false);
  const [hideFirstOption, setHideFirstOption] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  const isValid = !errors[name];
  const isSelectField = type === "select";
  const errorMessage = errors[name];
  const handleFocus = () => {
    setOnFocus(!onFocus);
    if (isSelectField) {
      setHideFirstOption(true);
    }
  };
  const handleBlur = () => {
    setOnFocus(!onFocus);
    if (isSelectField) {
      console.log(values[name]);
      if (!values[name]) {
        setHideFirstOption(false);
      }
    }
  };
  const fieldClassNames = cx(className, styles.form__field, {
    [styles.focus]: onFocus || !_isEmpty(values[name]),
    [styles.error]: !isValid,
  });

  if (isSelectField) {
    return (
      <Select options={options} />
    );
  }

  return (
    <div className={cx(styles.form__group, styles.field)}>
      <FmkField
        type={type}
        touched={touched}
        name={name}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className={fieldClassNames}
      />
      <label htmlFor={name} className={cx(labelClassNames, styles.form__label)}>
        {label}
      </label>
      <Fade bottom when={!isValid}>
        <p className={styles.error_text}>{errorMessage}</p>
      </Fade>
    </div>
  );
};

Field.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.node,
  labelClassNames: PropTypes.string,
  onChange: PropTypes.func,
  values: PropTypes.object,
  errors: PropTypes.object,
  type: PropTypes.string,
  touched: PropTypes.bool,
  options: PropTypes.array,
};

export default Field;
