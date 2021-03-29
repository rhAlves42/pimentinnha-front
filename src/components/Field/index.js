import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import _isEmpty from "lodash/isEmpty";
import _map from "lodash/map";
import _get from "lodash/get";
import { Field as FmkField } from "formik";
import Fade from "react-reveal/Fade";

import styles from "./Field.module.css";
import Select from "./components/Select";
import { money } from "../../utils/number";
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
  setFieldValue,
  moneyMask,
  validateForm,
  fieldWrapperClassName,
  ...props
}) => {
  const [onFocus, setOnFocus] = React.useState(false);
  const errorMessage = _get(errors, name, "");
  const fieldValue = _get(values, name, "");
  const isValid = _get(touched, name, "") && errorMessage;
  const isSelectField = type === "select";
  const handleFocus = () => setOnFocus(true);
  const handleBlur = () => setOnFocus(false);



  const fieldClassNames = cx(className, styles.form__field, {
    [styles.focus]: onFocus || !_isEmpty(fieldValue),
    [styles.error]: isValid,
  });

  if (isSelectField) {
    return (
      <>
        <FmkField name={name}>
          {({ field, form: { touched, errors }, meta }) => (
            <div className={fieldWrapperClassName}>
              <Select
                name={name}
                options={options}
                label={label}
                selectedOption={fieldValue}
                className={fieldClassNames}
                {...field}
                onChange={(value) => setFieldValue(name, value)}
              />
              <Fade bottom when={meta.touched && meta.error}>
                <p className={styles.error_textSelect}>{errorMessage}</p>
              </Fade>
            </div>
          )}
        </FmkField>
      </>
    );
  }

  return (
    <div
      className={cx(styles.form__group, styles.field, fieldWrapperClassName)}
    >
      <FmkField name={name}>
        {({ field, form: { touched, errors }, meta }) => (
          <>
            <input
              type={type}
              onFocus={handleFocus}
              onBlur={handleBlur}
              className={fieldClassNames}
              pattern={"/^d+$/"}
              onInput={(e) => {
                if (moneyMask) {
                  e.target.value = `R$ ${money(e.target.value)}`;
                }
              }}
              {...field}
            />
            <Fade bottom when={meta.touched && meta.error}>
              <p className={styles.error_text}>{errorMessage}</p>
            </Fade>
          </>
        )}
      </FmkField>
      <label htmlFor={name} className={cx(labelClassNames, styles.form__label)}>
        {label}
      </label>
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
  moneyMask: PropTypes.bool,
  touched: PropTypes.bool,
  options: PropTypes.array,
  fieldWrapperClassName: PropTypes.string,
};

export default Field;
