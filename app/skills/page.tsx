import Link from "next/link";
import React, { FC } from "react";
import ServerError from "../../components/ServerError";
import { manySkillSchema, SkillApiMany } from "../../schema/api/skill";
import { fetchData } from "../../services/fetchData";

export default async function Skills() {
  const skillsApi = await fetchData("/api/skills", {}, manySkillSchema);
  if (skillsApi === null) return <ServerError />;
  return (
    <>
      <h1>Skills</h1>
      <ul>
        {skillsApi.data.map((skill) => (
          <li key={skill.id}>
            <Link href={`/skills/${skill.id}`}>{skill.attributes.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
