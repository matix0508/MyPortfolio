import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLink } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Photo } from "../components/Photo/Photo";
import styles from "../styles/Contact.module.scss";
import Head from "next/head";
import { Icon } from "../components/Icon";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <div className={styles.contact}>
        <Photo />

        <div className={styles.contact__icons}>
          <Icon href={"https://github.com/matix0508"} icon={faGithub} />
          <Icon
            href={"https://www.instagram.com/matix0508/"}
            icon={faInstagram}
          />
          <Icon
            href={"https://www.linkedin.com/in/mateusz-wlekli%C5%84ski/"}
            icon={faLinkedin}
          />
        </div>
        <div className={styles.contact__email}>
          <a href="mailto:wleklinskimateusz05@gmail.com">
            <FontAwesomeIcon
              className={styles.contact__email__icon}
              icon={faEnvelope}
            />
          </a>

          <p>Write to me!</p>
          <div className={styles.contact__email__address}>
            <a href="mailto:wleklinskimateusz05@gmail.com">
              wleklinskimateusz05@gmail.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
