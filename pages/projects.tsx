import React from "react";
import { Projects as ProjectsComponent } from "../components/Projects";
import Head from "next/head";

const Projects = () => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
      <ProjectsComponent />
    </>
  );
};

export default Projects;
