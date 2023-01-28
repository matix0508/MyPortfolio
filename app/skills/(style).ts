import styled from "styled-components";
import { colors } from "../../styles";

export const SkillsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SingleSkillStyled = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
  color: ${colors.onPrimary};
`;
