import React, { FC } from "react";
import styles from "./Project.module.scss";
import Image from "next/image";
import { IProject } from "../../types/IProject";
import { Pane } from "evergreen-ui";
import styled from "styled-components";
import { shadow, transition, glow, colors } from "../../styles";
import { darken } from "polished";

const { primary } = colors;

namespace ProjectElements {
  export const Container = styled(Pane)`
    margin: 3rem;
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: 1rem;
    ${shadow};
    ${transition};
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    &:hover {
      ${glow};
    }
  `;

  export const Content = styled(Pane)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  `;

  export const Title = styled(Pane)`
    padding: 1rem;
    padding-bottom: 0.2rem;
    text-align: center;
    font-size: large;
    font-weight: bold;
    color: ${darken(50, primary)};
  `;

  export const Time = styled(Pane)`
    text-align: center;
    font-size: small;
    font-weight: lighter;
  `;
}

const { Container, Content, Title, Time } = ProjectElements;

export const Project: FC<{ item: IProject }> = ({
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
          <div className={styles.project__content__img}>
            <Image width={400} height={400} src={imageSrc} alt={title} />{" "}
          </div>
        )}

        <div className={styles.project__content__text}>{description}</div>
        <div className={styles.project__content__actions}>
          {!!link && (
            <a
              href={link}
              className={styles.project__content__actions__checkout}
            >
              Check Out!
            </a>
          )}
          {!!live && (
            <a href={live} className={styles.project__content__actions__live}>
              Live
            </a>
          )}
        </div>
      </Content>

      <ul className={styles.project__technologies}>
        {technologies.map((tech, i) => (
          <li className={styles.project__technologies__item} key={i}>
            {tech}
          </li>
        ))}
      </ul>
    </Container>
  );
};
