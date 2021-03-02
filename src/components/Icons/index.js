import React from 'react';
import Icons from './icons';
import PropTypes from 'prop-types';

const Icon = ({ name, ...props }) => {
  console.log(Icons)
  const IconComponent = Icons[name];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

Icon.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
export default Icon;