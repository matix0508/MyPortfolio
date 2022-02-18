import { useRouter } from "next/router";
import React, { FC } from "react";
import styles from "../styles/Navigation.module.scss";

interface INavItem {
  name: string;
  to: string;
}

export const NavItem: FC<INavItem> = ({ name, to }) => {
  const router = useRouter();
  let navStyle = styles.nav__item;
  if (router.pathname === to) {
      navStyle += ` ${styles.nav__item_active}`
  }

  return (
    <div onClick={() => router.push(to)} className={navStyle}>
      {name}
    </div>
  );
};
