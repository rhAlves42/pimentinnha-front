import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Button } from "theme-ui";

import Layout from "../";
import LogoAdmin from "./components/LogoAdmin";
import Menu from "./components/Menu";
import Loader from "../../Loader";
import MenuMobile from "./components/MenuMobile";
import DestktopAndTablet from "../../MediaQuery/DestktopAndTablet";
import Mobile from "../../MediaQuery/Mobile";

import {
  getDataFromStorage,
  setDataToStorage,
} from "../../../utils/localStorage";

import styles from "./Admin.module.css";

const AdminLayout = ({ pageTitle, description, children, isLoading }) => {
  const openState = getDataFromStorage({ dataName: "navState" });
  const [isOpen, setIsOpen] = React.useState(openState);

  React.useEffect(() => {
    setDataToStorage({ dataName: "navState", dataValue: true });
  }, []);

  const handleToggleNav = () => {
    setDataToStorage({ dataName: "navState", dataValue: isOpen });
    setIsOpen(!isOpen);
  };
  const navClassNames = cx(
    "flex flex-column justify-start",
    styles.navWrapper,
    {
      "u-sm-size3of12 u-md-size3of12 u-lg-size2of12": isOpen,
      "u-sm-size1of12 u-md-size1of12 u-lg-size05of12 ": !isOpen,
    }
  );

  const contentClassName = cx("pa16", {
    "u-sm-size9of12 u-md-size9of12 u-lg-size10of12": isOpen,
    "u-sm-size11of12 u-md-size11of12 u-lg-size11of12": !isOpen,
  });
  return (
    <Layout pageTitle={pageTitle}>
      <DestktopAndTablet>
        <main className="Grid">
          <section className={navClassNames}>
            <Button onClick={handleToggleNav} className={styles.navLogoButton}>
              <LogoAdmin isOpen={isOpen} pageTitle={pageTitle} />
            </Button>
            <Menu isNavOpen={isOpen} />
          </section>
          <div className={contentClassName}>
            {isLoading ? <Loader /> : children}
          </div>
        </main>
      </DestktopAndTablet>
      <Mobile>
        <MenuMobile
          isOpen={isOpen}
          pageTitle={pageTitle}
          handleToggleNav={handleToggleNav}
        >
          <main className="Grid">
            <div className={contentClassName}>
              {isLoading ? <Loader /> : children}
            </div>
          </main>
        </MenuMobile>
      </Mobile>
    </Layout>
  );
};

AdminLayout.propTypes = {
  children: PropTypes.node,
  pageTitle: PropTypes.node,
  isLoading: PropTypes.bool,
  description: PropTypes.string,
};

export default AdminLayout;
