import React, { FC } from "react";
import styles from '../styles/Projects.module.scss';

interface ITechInput {
  tech: string;
  checked: string[];
  setChecked: (item: string[]) => void;
}

export const TechInput: FC<ITechInput> = ({ checked, setChecked, tech }) => {
  const isChecked = (item: string) => {
    return checked.includes(item);
  };
  const handleChange = () => {
    let newChecked = [...checked];
    if (isChecked(tech)) {
      newChecked = newChecked.filter((item) => item !== tech);
    } else {
        newChecked.push(tech);
    }
    setChecked(newChecked);
  };

  return (
    <label className={styles.projects__techs__item}>
      {tech}
      <input type={"checkbox"} checked={isChecked(tech)} onChange={handleChange} />
      
    </label>
  );
};
