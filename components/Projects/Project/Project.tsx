import React, { FC } from "react";
import type { ProjectType } from "../../../schema/api/project";
import { Pane, Text } from "evergreen-ui";
import Image from "next/image";
import { GithubOutlined, PlaySquareOutlined } from "@ant-design/icons";
import { colors } from "../../../styles";

import {
  Container,
  Content,
  ImageContainer,
  LinkStyled,
  Technologies,
  Technology,
} from "./ProjectElements";

export const Project: FC<ProjectType> = ({
  name,
  description,
  image,
  start,
  end,
  repo,
  demo,
  skills,
}) => {
  return (
    <Container>
      <Content>
        <h3 style={{ color: colors.onBg }}>
          {name}
          {/* <Time>{time}</Time> */}
        </h3>

        {image && (
          <ImageContainer>
            <Image width={400} height={400} src={image.url} alt={name} />
          </ImageContainer>
        )}

        <Text
          width="350px"
          padding="0.5rem"
          margin="0.5rem"
          text-align="center"
        >
          {description}
        </Text>
        <Pane display="flex">
          {repo && (
            <LinkStyled href={repo}>
              <GithubOutlined />
            </LinkStyled>
          )}
          {demo && (
            <LinkStyled href={demo}>
              <PlaySquareOutlined />
            </LinkStyled>
          )}
        </Pane>
      </Content>

      <Technologies>
        {skills.map((skill) => (
          <Technology key={skill.id}>
            <LinkStyled href={`/skills/${skill.id}`}>{skill.name}</LinkStyled>
          </Technology>
        ))}
      </Technologies>
    </Container>
  );
};
