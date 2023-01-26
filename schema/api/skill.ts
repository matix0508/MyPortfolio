import { z } from "zod";
import { getApiDataMany, getApiDataSingle } from "./common";

const skillSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
});

export const singleSkillSchema = getApiDataSingle(skillSchema);
export const manySkillSchema = getApiDataMany(skillSchema);

export type SkillApiMany = z.infer<typeof manySkillSchema>;
export type SkillApiSingle = z.infer<typeof singleSkillSchema>;

export type SkillType = {
  id: number;
  name: string;
  description: string | null;
};

export function getSkillType({
  id,
  attributes: { name, description },
}: z.infer<typeof singleSkillSchema>["data"]): SkillType {
  return {
    id,
    name,
    description,
  };
}
