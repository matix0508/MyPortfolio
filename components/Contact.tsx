"use client";
import { Link, Pane, Paragraph } from "evergreen-ui";
import React, { FC } from "react";
import { Icon, Photo } from "./common";
import styled from "styled-components";
import {
  borderRadius,
  colors,
  glow,
  screenSize,
  shadow,
  transition,
} from "../styles";
import { getProfileType, ProfileApiType } from "../schema/api/profile";

export const Contact: FC<{ profile: ProfileApiType }> = ({
  profile: rawProfile,
}) => {
  const profile = getProfileType(rawProfile.data);
  return (
    <ContactStyled>
      <Photo />
      <IconsContainer>
        {profile.socialMedia.map((props, key) => (
          <Icon key={key} {...props} />
        ))}
      </IconsContainer>
      <EmailContainer>
        <Link href="mailto:wleklinskimateusz05@gmail.com">
          {/* <FontAwesomeIconStyled icon={faEnvelope as IconProp} /> */}
        </Link>

        <Paragraph fontWeight="bold">Write to me!</Paragraph>
        <Link padding="1rem" href="mailto:wleklinskimateusz05@gmail.com">
          wleklinskimateusz05@gmail.com
        </Link>
      </EmailContainer>
    </ContactStyled>
  );
};

export const ContactStyled = styled(Pane)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
  justify-content: center;
  @media only screen and (max-width: ${screenSize.big}) {
    grid-template-columns: 1fr;
  }
`;

export const IconsContainer = styled.div`
  grid-column: 2;
  color: ${colors.primary};
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  @media only screen and (max-width: ${screenSize.big}) {
    grid-row: 2;
    grid-column: 1;
  }
`;

export const EmailContainer = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin: 1rem;
  padding: 1rem;
  margin: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${borderRadius};
  background-color: ${colors.secondary};
  color: ${colors.onSecondary};
  ${shadow};
  ${transition};
  &:hover {
    ${glow}
  }
  @media only screen and (max-width: ${screenSize.big}) {
    grid-row: 3;
  }
`;
