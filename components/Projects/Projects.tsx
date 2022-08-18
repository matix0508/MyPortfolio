import React, { useState } from "react";
import styled from "styled-components";
import { getProjects } from "../../services/getProjects";
import { colors, shadow, screenSize } from "../../styles";
import { Project } from "./Project";
import { TechInput } from "./TechInput";

export const Projects = () => {
  const items = getProjects();
  const techs = items
    .map((item) => item.technologies)
    .reduce((prev, next) => prev.concat(next))
    .filter((value, index, self) => self.indexOf(value) === index); // get unique values

  const [checked, setChecked] = useState<string[]>(techs);
  return (
    <ProjectsStyled>
      <TechsContainer>
        {techs.map((tech, index) => (
          <TechInput
            key={index}
            checked={checked}
            setChecked={setChecked}
            tech={tech}
          />
        ))}
      </TechsContainer>

      <ProjectItemContainer>
        {items
          .filter((item) =>
            item.technologies
              .map((tech) => checked.includes(tech))
              .reduce((prev, next) => prev || next)
          )
          .map((project, index) => (
            <Project key={index} item={project} />
          ))}
      </ProjectItemContainer>
    </ProjectsStyled>
  );
};

const ProjectsStyled = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  margin: 1rem;
  padding: 1rem;
  width: 100vw;
  @media only screen and (max-width: ${screenSize.small}) {
    grid-template-columns: 1fr;
    margin: 0;
    padding: 0;
  }
`;

const TechsContainer = styled.div`
  margin-top: 0;
  height: fit-content;
  margin: 1rem;
  top: 0;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  background-color: ${colors.primary};
  ${shadow};
`;

const ProjectItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem;
  @media only screen and (max-width: ${screenSize.big}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: ${screenSize.large}) and (min-width: ${screenSize.big}) {
    grid-template-columns: 1fr 1fr;
  }
`;
