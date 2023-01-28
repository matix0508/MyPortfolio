"use client";
import React, { FC, useState } from "react";
import styled from "styled-components";
import {
  getProjectType,
  ProjectApiMany,
  ProjectType,
} from "../../schema/api/project";
import { SkillType } from "../../schema/api/skill";
import { colors, shadow, screenSize, borderRadius } from "../../styles";
import { Project } from "./Project";
import { SkillSelector } from "./TechInput";

type ProjectsListingProps = {
  projectsApi: ProjectApiMany;
};

export const ProjectsListing: FC<ProjectsListingProps> = ({ projectsApi }) => {
  const projects: ProjectType[] = projectsApi.data.map(getProjectType);
  const skills: SkillType[] = projects
    .reduce<SkillType[]>((acc, curr) => acc.concat(curr.skills), [])
    .filter(
      (item, index, self) => self.findIndex((t) => t.id === item.id) === index
    );

  const [checkedId, setCheckedId] = useState<number[]>([
    ...skills.map(({ id }) => id),
  ]);
  return (
    <ProjectsStyled>
      <TechsContainer>
        {skills.map((skill, index) => (
          <SkillSelector
            key={index}
            checkedId={checkedId}
            setCheckedId={setCheckedId}
            skill={skill}
          />
        ))}
      </TechsContainer>

      <ProjectItemContainer>
        {projects
          .filter(({ skills }) =>
            skills
              .map((skill) => checkedId.includes(skill.id))
              .reduce((prev, next) => prev || next)
          )
          .map((project, index) => (
            <Project key={index} {...project} />
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
  border-radius: ${borderRadius};
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
