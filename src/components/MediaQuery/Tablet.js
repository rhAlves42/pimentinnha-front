import React from "react";
import PropTypes from 'prop-types';
import { useMedia } from "react-use-media";
const Tablet = ({ children }) => {
  const isTablet = useMedia({ minWidth: "768px", maxWidth: '1365px' });

  if (!isTablet) return null;

  return <>{children}</>;
};

Tablet.propTypes = {
  children: PropTypes.node,
};

export default Tablet;