import { z } from "zod";
import { getApiDataMany, getApiDataSingle } from "./common";
import { manySkillSchema } from "./skill";

const projectSchema = z.object({
  name: z.string(),
  description: z.string(),
  start: z.string(),
  end: z.string(),
  image: z.object({
    data: z.null(), // TODO - add image data
  }),
  skills: manySkillSchema,
});

export const singleProjectSchema = getApiDataSingle(projectSchema);
export const manyProjectSchema = getApiDataMany(projectSchema);
