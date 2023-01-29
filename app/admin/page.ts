import { redirect } from "next/navigation";

const Admin = () => redirect(`${process.env.STRAPI_ENDPOINT}/admin`);

export default Admin;
