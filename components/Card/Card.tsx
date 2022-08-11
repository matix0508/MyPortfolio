import React, { FC } from "react";
import { CardElements } from "./CardElements";

const { Container, Header, Body } = CardElements;

type CardProps = {
  title: string;
};

export const Card: FC<CardProps> = ({ title, children }) => {
  return (
    <Container>
      <Header>{title}</Header>
      <Body>{children}</Body>
    </Container>
  );
};
