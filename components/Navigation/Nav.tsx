import { Pane } from "evergreen-ui";
import React, { FC } from "react";
import styled from "styled-components";
import { INavItem, NavItem } from "./NavItem";
import { shadow } from "../../styles";

export type NavProps = {
  navItems: INavItem[];
};

export const Nav: FC<NavProps> = ({ navItems }) => {
  return (
    <Container>
      {navItems.map((item, index) => (
        <NavItem {...item} key={index} />
      ))}
    </Container>
  );
};

export const Container = styled(Pane)`
  width: 100vw;
  top: 0;
  display: flex;
  justify-content: center;
  z-index: 99;
  ${shadow};
`;
