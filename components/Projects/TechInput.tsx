import React, { FC } from "react";
import styled from "styled-components";
import { colors, glow, shadow, transition } from "../../styles";
const { bg, onBg, secondary, onSecondary } = colors;

interface ITechInput {
  tech: string;
  checked: string[];
  setChecked: (item: string[]) => void;
}

const TechInputStyled = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? secondary : bg)};
  color: ${(props) => (props.active ? onSecondary : onBg)};
  border-radius: 1rem;
  margin: 0.5rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${transition};
  cursor: pointer;
  ${shadow};
  &:hover {
    ${glow};
  }
`;

export const TechInput: FC<ITechInput> = ({ checked, setChecked, tech }) => {
  const isChecked = (item: string) => checked.includes(item);
  const handleClick = () =>
    setChecked(
      isChecked(tech)
        ? checked.filter((item) => item !== tech)
        : [...checked, tech]
    );

  return (
    <TechInputStyled active={isChecked(tech)} onClick={handleClick}>
      {tech}
    </TechInputStyled>
  );
};
