import React, { FC } from "react";

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
    <label>
      <input type={"checkbox"} checked={isChecked(tech)} onChange={handleChange} />
      {tech}
    </label>
  );
};
