import { Pane } from "evergreen-ui";
import Image from "next/image";
import React, { FC } from "react";
import styled from "styled-components";
import { colors, glow, screenSize, shadow, transition } from "../../styles";

export const Photo: FC = () => (
  <Container>
    <PhotoContainer>
      <Image width={500} height={500} src={"/profile.jpg"} alt="profile" />
    </PhotoContainer>
    <Name>
      <h2>Mateusz Wlekliński</h2>
      <h4>Junior Software Developer</h4>
    </Name>
  </Container>
);

export const Container = styled(Pane)`
  grid-column: 2;
  grid-row: 1 / span 2;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: ${screenSize.big}) {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const PhotoContainer = styled(Pane)`
  margin: 1rem;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  ${shadow};
  ${transition};
  justify-self: center;

  &:hover {
    ${glow};
  }

  @media only screen and (min-width: ${screenSize.small}) {
    width: 450px;
    height: 450px;
  }

  @media only screen and (max-width: ${screenSize.small}) and (min-width: 0) {
    width: 300px;
    height: 300px;
  }
`;

export const Name = styled(Pane)`
  text-align: center;
  color: ${colors.onBg};
`;
