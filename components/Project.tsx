import React, { FC } from "react";
import styles from "../styles/Project.module.scss";
import Image from "next/image";
import { IProject } from "../types/IProject";

export const Project: FC<{ item: IProject }> = ({ item }) => {
  const { title, time, technologies, description, imageSrc } = item;
  return (
    <div className={styles.project}>
      <div className={styles.project__title}>{title}</div>
      {!!imageSrc && (
        <div className={styles.project__img}>
          <Image width={400} height={400} src={imageSrc} alt={title} />{" "}
        </div>
      )}

      <div className={styles.project__text}>{description}</div>
      <ul className={styles.project__technologies}>
        {technologies.map((tech, i) => (
          <li className={styles.project__technologies__item} key={i}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};
