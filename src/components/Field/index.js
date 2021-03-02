import React from "react";
import cx from "classnames";
import _isEmpty from 'lodash/isEmpty';
import { Field as FmkField } from "formik";

import styles from "./Field.module.css";
const Field = ({ className, name, label, labelClassNames, onChange, values, ...props }) => {
  const [onFocus, setOnFocus] = React.useState(false);
  const handleFocus = () => setOnFocus(!onFocus);
  return (
    <div className={cx(styles.form__group, styles.field)}>
      <FmkField
        name={name}
        onFocus={handleFocus}
        onBlur={handleFocus}
        className={cx(className, styles.form__field, {
          [styles.focus]: onFocus || !_isEmpty(values[name]),
        })}
        {...props}
      />
      <label for={name} className={cx(labelClassNames, styles.form__label)}>
        {label}
      </label>
    </div>
  );
};

export default Field;
