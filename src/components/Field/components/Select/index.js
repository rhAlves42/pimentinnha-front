import React from "react";
import PropTypes from "prop-types";
import _map from "lodash/map";
import cx from "classnames";
import styles from "./Select.module.css";
const Select = ({
  options,
  label,
  onChange,
  selectedOption,
  name,
  className,
  ...field
}) => {
  const selectRef = React.useRef(null);

  return (
    <div className={styles.floatingLabel}>
      <select
        {...field}
        name={name}
        ref={selectRef}
        className={cx(styles.floatingSelect, className)}
        value={selectedOption}
        onChange={() => onChange(selectRef.current.value)}
      >
        <option value=""></option>
        {_map(options, (option) => (
          <option key={option.value}>{option.value}</option>
        ))}
      </select>
      <span className={styles.highlight}></span>
      <label className={cx({ [styles.hasValue]: !!selectedOption })}>
        {label}
      </label>
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func,
  options: PropTypes.array,
  className: PropTypes.string,
  selectedOption: PropTypes.string,
};

export default Select;
