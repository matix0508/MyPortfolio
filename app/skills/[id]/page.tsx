import React from "react";
import ServerError from "../../../components/ServerError";
import {
  getSkillType,
  singleSkillSchema,
  SkillType,
} from "../../../schema/api/skill";
import { fetchData } from "../../../services/fetchData";

type Props = { params: { id: string } };

export default async function Skill({ params }: Props) {
  const skill = await getSkill(params.id);
  if (skill === null) return <ServerError />;
  const { name, description } = skill;
  return (
    <>
      <h1>{name}</h1>
      <p>{description}</p>
    </>
  );
}

async function getSkill(id: string): Promise<SkillType | null> {
  const response = await fetchData(
    `/api/skills/${id}`,
    { populate: "deep" },
    singleSkillSchema
  );
  if (response === null) return null;
  return getSkillType(response.data);
}
