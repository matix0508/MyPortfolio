import { Pane } from "evergreen-ui";
import { darken } from "polished";
import styled from "styled-components";
import {
  shadow,
  transition,
  glow,
  colors,
  screenSize,
  borderRadius,
} from "../../../styles";

const { primary, onPrimary, secondary, onSecondary } = colors;

export const Container = styled(Pane)`
  width: fit-content;
  margin: 3rem;
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: ${borderRadius};
  ${shadow};
  ${transition};
  display: grid;
  grid-template-rows: 1fr 50px;
  &:hover {
    ${glow};
  }
  @media only screen and (max-width: ${screenSize.small}) {
    margin: 0;
    padding: 0;
    margin-bottom: 2rem;
  }
`;

export const Content = styled(Pane)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled(Pane)`
  padding: 1rem;
  padding-bottom: 0.2rem;
  text-align: center;
  font-size: large;
  font-weight: bold;
  color: ${darken(50, primary)};
`;

export const Time = styled(Pane)`
  text-align: center;
  font-size: small;
  font-weight: lighter;
`;

export const ImageContainer = styled.div`
  margin-right: 0;
  margin: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: ${borderRadius};
  right: 0;
  width: 120px;
  height: auto;
`;

export const LinkStyled = styled.a`
  padding: 0.5rem;
  margin: 0.5rem;
  border-radius: 1rem;
  cursor: pointer;
  ${transition};
  &:hover {
    ${shadow};
  }
`;

export const Technologies = styled.ul`
  display: flex;
  list-style: none;
  font-size: 0.7rem;
  justify-content: center;
  align-items: center;
`;

export const Technology = styled.li`
  margin-right: 0.5rem;
  padding-right: 0.5rem;
`;
