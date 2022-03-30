import React, { FC } from "react";
import styles from './TechInput.module.scss';

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
    <div onClick={handleChange} className={styles.TechInput + " " + (isChecked(tech) ? styles.TechInput_active : "")}>
      {tech}

      
    </div>
  );
};
