import React from "react";
import styled from "styled-components";
import { screenSize } from "../../styles";
import { Photo } from "../common";
import { Education } from "./Sections/Education";
import { Experience } from "./Sections/Experience";
import { Hobby } from "./Sections/Hobby";
import { Programming } from "./Sections/Programming";

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  @media only screen and (max-width: ${screenSize.big}) {
    grid-template-columns: 1fr;
  }
`;

export const Home = () => {
  return (
    <CardContainer>
      <Education />
      <Photo />
      <Programming />
      <Experience />
      <Hobby />
    </CardContainer>
  );
};
