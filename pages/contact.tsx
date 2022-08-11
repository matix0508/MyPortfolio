import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Photo } from "../components/Photo/Photo";
import styles from "../styles/Contact.module.scss";
import Head from "next/head";
import { Icon } from "../components/Icon";
import { Link, Pane, Paragraph } from "evergreen-ui";
import styled from "styled-components";
import { colors, glow, shadow, transition } from "../styles";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { lighten } from "polished";

const { primary, secondary, onSecondary } = colors;

const ContactStyled = styled(Pane)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  align-items: center;
  justify-content: center;
  @media only screen and (max-width: $big) {
    grid-template-columns: 1fr;
  }
`;

const IconsContainer = styled.div`
  grid-column: 2;
  color: ${primary};
  font-size: 2rem;
  text-align: center;
  margin: 1rem;
  padding: 1rem;
  @media only screen and (max-width: ${big}) {
    grid-row: 2;
    grid-column: 1;
  }
`;

const EmailContainer = styled.div`
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
  border-radius: 2rem;
  background-color: ${lighten(20, secondary)};
  color: ${onSecondary};
  ${shadow};
  ${transition};
  &:hover {
    ${glow}
  }
`;

const Contact = () => {
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
          <a href="mailto:wleklinskimateusz05@gmail.com">
            <FontAwesomeIcon
              className={styles.contact__email__icon}
              icon={faEnvelope as IconProp}
            />
          </a>

          <Paragraph fontWeight="bold">Write to me!</Paragraph>
          <Link padding="1rem" href="mailto:wleklinskimateusz05@gmail.com">
            wleklinskimateusz05@gmail.com
          </Link>
        </EmailContainer>
      </ContactStyled>
    </>
  );
};

export default Contact;
