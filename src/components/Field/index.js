import React from "react";
import cx from "classnames";
import _isEmpty from "lodash/isEmpty";
import { Field as FmkField } from "formik";
import Fade from "react-reveal/Fade";

import styles from "./Field.module.css";
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
  ...props
}) => {
  const [onFocus, setOnFocus] = React.useState(false);
  const isValid = !errors[name];
  const errorMessage = errors[name];
  const handleFocus = () => setOnFocus(!onFocus);
  const fieldClassNames = cx(className, styles.form__field, {
    [styles.focus]: onFocus || !_isEmpty(values[name]),
    [styles.error]: !isValid,
  });

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
        <p className={styles.error_text}>
          {errorMessage}
        </p>
      </Fade>
    </div>
  );
};

export default Field;
