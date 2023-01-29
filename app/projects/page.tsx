import React from "react";
import { ProjectsListing } from "../../components/Projects";
import ServerError from "../../components/ServerError";
import { manyProjectSchema } from "../../schema/api/project";
import { fetchData } from "../../services/fetchData";

export default async function Projects({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const projects = await fetchData(
    "/api/projects",
    { populate: ["image", "skills"], locale: lang },
    manyProjectSchema
  );
  if (projects === null) return <ServerError />;
  return <ProjectsListing projectsApi={projects} />;
}
