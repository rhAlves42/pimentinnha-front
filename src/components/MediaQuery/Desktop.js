import React from "react";
import PropTypes from 'prop-types';
import { useMedia } from "react-use-media";
const Desktop = ({ children }) => {
  const isDesk = useMedia({ minWidth: "1366px" });

  if (!isDesk) return null;

  return <>{children}</>;
};

Desktop.propTypes = {
  children: PropTypes.node,
};

export default Desktop;