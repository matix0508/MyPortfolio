import React, { FC } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import { manySkillSchema, SkillApiMany } from "../schema/api/skill";

const Skills: FC<{ skills: SkillApiMany }> = ({ skills }) => {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await fetch("http://localhost:1337/api/skills");
  const projects = manySkillSchema.parse(await res.json());
  return {
    props: {
      projects,
    },
  };
};

export default Skills;
