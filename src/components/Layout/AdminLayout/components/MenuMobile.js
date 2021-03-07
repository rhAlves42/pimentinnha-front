import React from "react";
import PropTypes from "prop-types";
import { Button } from "theme-ui";
import Fade from "react-reveal/Fade";
import cx from 'classnames';

import Menu from "./Menu";
import LogoAdmin from "./LogoAdmin";

import styles from "../Admin.module.css";

const MenuMobile = ({ isOpen, handleToggleNav, pageTitle, children }) => {
  return (
    <main className="vh-100">
      <div className={cx("w-100", styles.navWrapper, { "h-100": isOpen })}>
        <Button onClick={handleToggleNav} className={styles.navLogoButton}>
          <LogoAdmin isOpen={isOpen} pageTitle={pageTitle} />
        </Button>
        {isOpen && (
          <Fade left>
            <Menu isNavOpen={isOpen} />
          </Fade>
        )}
      </div>
      {!isOpen && <div className="u-size9of12 u-lg-size10of12">{children}</div>}
    </main>
  );
};

MenuMobile.propTypes = {
  isOpen: PropTypes.bool,
  handleToggleNav: PropTypes.func,
  pageTitle: PropTypes.string,
  children: PropTypes.node,
};
export default MenuMobile;
