import React, { FC } from "react";
import { borderRadius, transition } from "../../styles";
import styled from "styled-components";
import {
  GithubOutlined,
  LinkedinOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { SocialMediaType } from "../../schema/api/profile";

export const Icon: FC<SocialMediaType> = ({ link, name }) => {
  const Icon = icons[name];
  return (
    <IconStyled href={link}>
      <Icon />
    </IconStyled>
  );
};

const IconStyled = styled.a`
  padding: 0.5rem;
  margin: 1rem;
  border-radius: ${borderRadius};
  ${transition};
`;

const icons: Record<SocialMediaType["name"], FC> = {
  github: GithubOutlined,
  linkedin: LinkedinOutlined,
  facebook: FacebookOutlined,
  instagram: InstagramOutlined,
};
