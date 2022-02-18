import React from "react";
import styles from "../styles/Navigation.module.scss";

export const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav__item}>About me</div>
      <div className={styles.nav__item}>My Projects</div>
      <div className={styles.nav__item}>Contact me</div>
    </div>
  );
};
