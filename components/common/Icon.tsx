import React, { FC } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { transition } from "../../styles";
import styled from "styled-components";
import { FontAwesomeIconStyled } from "./FontAwesomeIconStyled";

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
