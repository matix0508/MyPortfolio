import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";
import { borderRadius, colors, shadow, transitionTime } from "../../styles";

interface INavItem {
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
  const router = useRouter();

  return (
    <Container onClick={() => router.push(to)} active={router.pathname === to}>
      {name}
    </Container>
  );
};
