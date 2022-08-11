import { useRouter } from "next/router";
import React, { FC } from "react";
import styled from "styled-components";
import { shadow, transitionTime } from "../../styles";

interface INavItem {
  name: string;
  to: string;
}

namespace NavItemElements {
  export const Container = styled.div<{ active: boolean }>`
    margin: 0.5rem;
    padding: 1rem;
    cursor: pointer;
    border-radius: 1rem;
    transition: all ${transitionTime};
    text-align: center;
    text-justify: center;
    font-weight: ${(props) => props.active && "bold"};

    &:hover {
      ${shadow}
    }
  `;
}

const { Container } = NavItemElements;

export const NavItem: FC<INavItem> = ({ name, to }) => {
  const router = useRouter();

  return (
    <Container onClick={() => router.push(to)} active={router.pathname === to}>
      {name}
    </Container>
  );
};
