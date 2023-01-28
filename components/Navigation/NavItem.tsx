"use client";
import { usePathname, useRouter } from "next/navigation";
import React, { FC } from "react";
import styled from "styled-components";
import { borderRadius, colors, shadow, transitionTime } from "../../styles";

export interface INavItem {
  name: string;
  to: string;
}

export const Container = styled.div<{ active: boolean }>`
  margin: 0.5rem;
  padding: 1rem;
  cursor: pointer;
  border-radius: ${borderRadius};
  transition: all ${transitionTime};
  text-align: center;
  text-justify: center;
  background-color: ${(props) => props.active && colors.secondary};
  color: ${(props) => props.active && colors.onSecondary};

  &:hover {
    font-weight: "bold";
  }
`;

export const NavItem: FC<INavItem> = ({ name, to }) => {
  const pathname = usePathname();
  const { push } = useRouter();

  return (
    <Container onClick={() => push(to)} active={pathname === to}>
      {name}
    </Container>
  );
};
