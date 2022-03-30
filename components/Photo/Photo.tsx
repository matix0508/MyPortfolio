import Image from "next/image";
import React from "react";
import styles from "./Photo.module.scss";

export const Photo = () => {
  return (
    <div className={styles.container}>
      <div className={styles.photo}>
        <Image width={500} height={500} src={"/profile.jpg"} alt="profile" />
      </div>
      <div className={styles.name}>
          <h2>Mateusz Wlekliński</h2>
          <h4>Junior Software Developer</h4>
        </div>
    </div>
  );
};
