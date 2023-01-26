import React, { FC } from "react";
import { Projects as ProjectsComponent } from "../components/Projects";
import Head from "next/head";
import { GetStaticProps } from "next";
import {
  getProjectType,
  manyProjectSchema,
  ProjectApiMany,
} from "../schema/api/project";
import { fetchData } from "../services/fetchData";

const Projects: FC<{ projects: ProjectApiMany }> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsComponent projects={projects.data.map(getProjectType)} />
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const projects = await fetchData(
    "/api/projects",
    { populate: ["image", "skills"], locale },
    manyProjectSchema
  );

  return { props: { projects } };
};

export default Projects;
