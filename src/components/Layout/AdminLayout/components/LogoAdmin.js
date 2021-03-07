import React from "react";
import Icons from "../../../Icons";
const horizontalIMG = require("../../../../images/logo-horizontal.png");

const LogoAdmin = ({ pageTitle, isOpen }) => {
  return (
    <>
      {isOpen && (
        <img src={horizontalIMG} alt={pageTitle} />
      )}
      {!isOpen && <Icons  name="Icon" width={30} height={43} />}
    </>
  );
};

export default LogoAdmin;
