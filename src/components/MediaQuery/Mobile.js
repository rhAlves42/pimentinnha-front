import React from "react";
import PropTypes from 'prop-types';
import { useMedia } from "react-use-media";
const Mobile = ({ children }) => {
  const isMobile = useMedia({ maxWidth: "767px" });

  if (!isMobile) return null;

  return <>{children}</>;
};

Mobile.propTypes = {
  children: PropTypes.node,
};

export default Mobile;