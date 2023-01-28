import React, { FC } from "react";
import type { ProjectType } from "../../../schema/api/project";
import { Pane, Text } from "evergreen-ui";
import { ProjectElements } from "./ProjectElements";
import Image from "next/image";
import Link from "next/link";

const {
  Container,
  Content,
  Title,
  Time,
  ImageContainer,
  LinkStyled,
  Technologies,
  Technology,
} = ProjectElements;

export const Project: FC<ProjectType> = ({
  name,
  description,
  image,
  start,
  end,
  link,
  demo,
  skills,
}) => {
  return (
    <Container>
      <Content>
        <Title>
          {name}
          {/* <Time>{time}</Time> */}
        </Title>

        {image && (
          <ImageContainer>
            <Image width={400} height={400} src={image} alt={name} />
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
          {link && (
            <LinkStyled color="primary" href={link}>
              Check Out!
            </LinkStyled>
          )}
          {demo && <LinkStyled color="secondary">Demo</LinkStyled>}
        </Pane>
      </Content>

      <Technologies>
        {skills.map((skill) => (
          <Technology key={skill.id}>
            <Link href={`/skills/${skill.id}`}>{skill.name}</Link>
          </Technology>
        ))}
      </Technologies>
    </Container>
  );
};
