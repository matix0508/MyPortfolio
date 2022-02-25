import { IconProp } from "@fortawesome/fontawesome-svg-core";
import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Contact.module.scss";

interface IIcon {
  href: string;
  icon: IconProp;
}

export const Icon: FC<IIcon> = ({ href, icon }) => {
  return (
    <a href={href}>
      <FontAwesomeIcon className={styles.contact__icons__icon} icon={icon} />
    </a>
  );
};
