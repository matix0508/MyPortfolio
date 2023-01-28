import React from "react";
import Head from "next/head";
import { Contact as ContactComponent } from "../../components/Contact";
import { fetchData } from "../../services/fetchData";
import { profileApiSchema } from "../../schema/api/profile";
import ServerError from "../../components/ServerError";

const Contact = async () => {
  const profile = await fetchData(
    "/api/profile",
    {
      populate: ["socialMedia", "photo"],
    },
    profileApiSchema
  );
  if (!profile) return <ServerError />;

  return <ContactComponent profile={profile} />;
};

export default Contact;
