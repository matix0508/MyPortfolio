import React, { FC } from "react";
import { Projects as ProjectsComponent } from "../components/Projects";
import Head from "next/head";
import { GetStaticProps } from "next";
import {
  getProjectType,
  manyProjectSchema,
  ProjectApiMany,
} from "../schema/api/project";

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

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch(
    "http://localhost:1337/api/projects?populate=image&populate=skills"
  );
  const projects = manyProjectSchema.parse(await res.json());
  return {
    props: {
      projects,
    },
  };
};

export default Projects;
