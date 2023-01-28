import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = () => ({
  redirect: {
    destination: `${process.env.STRAPI_ENDPOINT}/admin`,
    permanent: true,
  },
});

const Admin = () => null;

export default Admin;
