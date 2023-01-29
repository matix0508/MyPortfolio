"use client";
import { Select, SelectProps, Space } from "antd";
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
import { Typography } from "antd";

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
  const options: SelectProps["options"] = skills.map(({ id, name }) => ({
    label: name,
    value: id,
  }));
  return (
    <ProjectsStyled>
      <h1 style={{ color: colors.onBg }}>My Projects</h1>
      <TechsContainer>
        <h5 style={{ color: colors.onBg }}>Filter by skills</h5>
        <Space style={{ width: "100%" }} direction="vertical">
          <Select
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select"
            defaultValue={[...skills.map(({ id }) => id)]}
            onChange={setCheckedId}
            options={options}
          />
        </Space>
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
  display: flex;
  flex-direction: column;
  align-items: center;
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
  margin: 1rem;
  padding: 1rem;
  margin-top: 0;
  padding-top: 0;
  height: fit-content;
  width: fit-content;
  max-width: 500px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${borderRadius};
`;

const ProjectItemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin: 1rem;
  @media only screen and (max-width: ${screenSize.big}) {
    grid-template-columns: 1fr;
  }
  @media only screen and (max-width: ${screenSize.large}) and (min-width: ${screenSize.big}) {
    grid-template-columns: 1fr 1fr;
  }
`;
