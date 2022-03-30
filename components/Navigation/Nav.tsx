import React from "react";
import styles from "./Navigation.module.scss";
import { NavItem } from "./NavItem"

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <NavItem name={"About me"} to={"/"} />
      <NavItem name={"My Projects"} to={"/projects"} />
      <NavItem name={"Find Me"} to={"/contact"} />
    </div>
  );
};
