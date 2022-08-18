import { Pane } from "evergreen-ui";
import React, { FC } from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { colors, shadow } from "../../styles";

const { primary, onPrimary } = colors;

export const Container = styled(Pane)`
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 99;
  ${shadow};
`;

export const Nav: FC = () => {
  return (
    <Container>
      <NavItem name={"About me"} to={"/"} />
      <NavItem name={"My Projects"} to={"/projects"} />
      <NavItem name={"Find Me"} to={"/contact"} />
    </Container>
  );
};
