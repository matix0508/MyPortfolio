import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Contact.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { transition, colors } from "../styles";
import styled from "styled-components";

const { primary, secondary } = colors;

type IconProps = {
  href: string;
  icon: IconProp;
};

const IconStyled = styled.a`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: 1rem;
  ${transition};

  &:hover {
    background-color: ${primary};
    color: ${secondary};
    font-size: 2.5rem;
    font-size: 2rem;
    border-radius: 1rem;
    padding: 1rem;
    cursor: pointer;
    @include transition;

    &:hover {
      color: $primary;
      background-color: $secondary;
    }
  }
`;

export const Icon: FC<IconProps> = ({ href, icon }) => {
  return (
    <IconStyled href={href}>
      <FontAwesomeIcon icon={icon} />
    </IconStyled>
  );
};
