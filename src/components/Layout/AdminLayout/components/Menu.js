import React from "react";
import { Link, navigate } from "gatsby";
import _map from "lodash/map";
import _get from "lodash/get";
import cx from "classnames";
import * as AntIcons from "@ant-design/icons";
import { menuData } from "../../utils";

import styles from "../Admin.module.css";
import Button from "../../../Button";
const Menu = ({ isNavOpen }) => {
  const menuItemWrapperClassName = cx(styles.menuWrapper, {
    [styles.closedNav]: !isNavOpen,
  });

  const IconName = ({ name, ...props }) => {
    const IconInstance = AntIcons[name];

    if (!IconInstance) return null;
    return <IconInstance {...props} className={styles.menuIcon} />;
  };
  return (
    <nav className="flex flex-column">
      {_map(menuData, (menuItem) => (
        <Button
          key={menuItem.name}
          type="ghost"
          to={menuItem.path}
          onClick={() => navigate(menuItem.path || "/")}
          className={menuItemWrapperClassName}
        >
          <IconName name={menuItem.icon} />
          {isNavOpen && <p>{menuItem.name}</p>}
        </Button>
      ))}
    </nav>
  );
};
export default Menu;
