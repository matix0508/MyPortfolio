import { useRouter } from "next/router";
import React from "react";

const Admin = () => {
  const { push } = useRouter();
  push(`${process.env.STRAPI_ENDPOINT}/admin`);
  return null;
};

export default Admin;
