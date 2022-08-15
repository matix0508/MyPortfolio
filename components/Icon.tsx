import React, { FC } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "../styles/Contact.module.scss";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { transition, colors } from "../styles";
import styled from "styled-components";
import { FontAwesomeIconStyled } from "./FontAwesomeIconStyled";

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
`;

export const Icon: FC<IconProps> = ({ href, icon }) => {
  return (
    <IconStyled href={href}>
      <FontAwesomeIconStyled icon={icon} />
    </IconStyled>
  );
};
