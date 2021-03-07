import React from "react";
import PropTypes from 'prop-types';
import { useMedia } from "react-use-media";
const DestktopAndTablet = ({ children }) => {
  const isDestktopAndTablet = useMedia({ minWidth: "768px" });

  if (!isDestktopAndTablet) return null;

  return <>{children}</>;
};

DestktopAndTablet.propTypes = {
  children: PropTypes.node,
};

export default DestktopAndTablet;