import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Photo } from "../../components/Photo/Photo";
import Head from "next/head";
import { Icon } from "../../components/Icon";
import { Link, Paragraph } from "evergreen-ui";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ContactStyles } from "./ContactStyles";
import { FontAwesomeIconStyled } from "../../components/FontAwesomeIconStyled";

const { ContactStyled, IconsContainer, EmailContainer } = ContactStyles;

export const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactStyled>
        <Photo />

        <IconsContainer>
          <Icon
            href={"https://github.com/matix0508"}
            icon={faGithub as IconProp}
          />
          <Icon
            href={"https://www.instagram.com/matix0508/"}
            icon={faInstagram as IconProp}
          />
          <Icon
            href={"https://www.linkedin.com/in/mateusz-wlekli%C5%84ski/"}
            icon={faLinkedin as IconProp}
          />
        </IconsContainer>
        <EmailContainer>
          <Link href="mailto:wleklinskimateusz05@gmail.com">
            <FontAwesomeIconStyled icon={faEnvelope as IconProp} />
          </Link>

          <Paragraph fontWeight="bold">Write to me!</Paragraph>
          <Link padding="1rem" href="mailto:wleklinskimateusz05@gmail.com">
            wleklinskimateusz05@gmail.com
          </Link>
        </EmailContainer>
      </ContactStyled>
    </>
  );
};
