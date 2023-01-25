import { z } from "zod";
import { getApiDataMany, getApiDataSingle } from "./common";

const skillSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export const singleSkillSchema = getApiDataSingle(skillSchema);
export const manySkillsSchema = getApiDataMany(skillSchema);
