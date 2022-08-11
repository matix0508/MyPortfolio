import Image from "next/image";
import React, { FC } from "react";
import { PhotoElements } from "./PhotoElements";

const { Container, PhotoContainer, Name } = PhotoElements;

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
