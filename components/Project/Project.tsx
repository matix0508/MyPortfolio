import React, { FC } from "react";
import { ProjectType } from "../../types/ProjectType";
import { Pane } from "evergreen-ui";
import { Text } from "evergreen-ui";
import { ProjectElements } from "./ProjectElements";
import Image from "next/image";

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

export const Project: FC<{ item: ProjectType }> = ({
  item: { title, time, technologies, description, imageSrc, link, live },
}) => {
  return (
    <Container>
      <Content>
        <Title>
          {title}
          <Time>{time}</Time>
        </Title>

        {!!imageSrc && (
          <ImageContainer>
            <Image width={400} height={400} src={imageSrc} alt={title} />
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
          {!!link && (
            <LinkStyled color="primary" href={link}>
              Check Out!
            </LinkStyled>
          )}
          {!!live && <LinkStyled color="secondary">Live</LinkStyled>}
        </Pane>
      </Content>

      <Technologies>
        {technologies.map((tech, i) => (
          <Technology key={i}>{tech}</Technology>
        ))}
      </Technologies>
    </Container>
  );
};
