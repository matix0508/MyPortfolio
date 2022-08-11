import { Pane } from "evergreen-ui";
import React, { FC } from "react";
import styled from "styled-components";
import { NavItem } from "./NavItem";
import { colors } from "../../styles";

const { primary, onPrimary } = colors;

namespace NavElements {
  export const Container = styled(Pane)`
    width: 100vw;
    top: 0;
    display: flex;
    justify-content: center;
    background-color: ${primary};
    color: ${onPrimary};
    z-index: 99;
  `;
}

const { Container } = NavElements;

export const Nav: FC = () => {
  return (
    <Container>
      <NavItem name={"About me"} to={"/"} />
      <NavItem name={"My Projects"} to={"/projects"} />
      <NavItem name={"Find Me"} to={"/contact"} />
    </Container>
  );
};
