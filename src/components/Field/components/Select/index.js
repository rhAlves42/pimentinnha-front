import React from "react";
import _map from 'lodash/map';
import styles from "./Select.module.css";
const Select = ({ options }) => {
  const [selectedOption, setSelectedOption] = React.useState('');

  return (
    <div className={styles.floatingLabel}>
      <select
        className={styles.floatingSelect}
        value={selectedOption}
        // onClick={(e) => console.log(e)} 
      >
        {_map(options, (option) => (
          <option key={option.value} value={option.value}>
            {option.value}
          </option>
        ))}
      </select>
      <span class="highlight"></span>
      <label>Select</label>
    </div>
  );
};

export default Select;
