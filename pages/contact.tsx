import React from "react";
import Head from "next/head";
import { Contact as ContactComponent } from "../components/Contact";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
      </Head>
      <ContactComponent />
    </>
  );
};

export default Contact;
