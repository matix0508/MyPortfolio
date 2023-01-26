import React, { FC } from "react";
import styled from "styled-components";
import { SkillType } from "../../schema/api/skill";
import { borderRadius, colors, glow, shadow, transition } from "../../styles";
const { bg, onBg, secondary, onSecondary } = colors;

type SkillSelectorProps = {
  skill: SkillType;
  checkedId: number[];
  setCheckedId: (item: number[]) => void;
};

const TechInputStyled = styled.div<{ active: boolean }>`
  background-color: ${(props) => (props.active ? secondary : bg)};
  color: ${(props) => (props.active ? onSecondary : onBg)};
  border-radius: ${borderRadius};
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

export const SkillSelector: FC<SkillSelectorProps> = ({
  checkedId,
  setCheckedId,
  skill,
}) => {
  const isChecked = (id: number) => checkedId.includes(id);
  const handleClick = () =>
    setCheckedId(
      isChecked(skill.id)
        ? checkedId.filter((item) => item !== skill.id)
        : [...checkedId, skill.id]
    );

  return (
    <TechInputStyled active={isChecked(skill.id)} onClick={handleClick}>
      {skill.name}
    </TechInputStyled>
  );
};
