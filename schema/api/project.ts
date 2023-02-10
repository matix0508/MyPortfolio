import { z } from "zod";
import { getApiDataMany, getApiDataSingle } from "./common";
import { getImageType, imageApiNullableSchema, ImageType } from "./image";
import { getSkillType, manySkillSchema, SkillType } from "./skill";

const projectSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  start: z.string().nullable(),
  end: z.string().nullable(),
  image: imageApiNullableSchema,

  skills: manySkillSchema.nullable(),
  repo: z.string().nullable(),
  demo: z.string().nullable(),
});

export const singleProjectSchema = getApiDataSingle(projectSchema);
export const manyProjectSchema = getApiDataMany(projectSchema);
export type ProjectApiMany = z.infer<typeof manyProjectSchema>;
export type ProjectApiSingle = z.infer<typeof singleProjectSchema>;
export type ProjectType = Pick<ProjectApiSingle["data"], "id"> &
  Pick<
    z.infer<typeof projectSchema>,
    "name" | "description" | "repo" | "demo"
  > & {
    start: Date | null;
    end: Date | null;
    image: ImageType | null;
    skills: SkillType[];
  };

export function getProjectType({
  id,
  attributes: { name, description, start, end, image, skills, repo, demo },
}: z.infer<typeof singleProjectSchema>["data"]): ProjectType {
  return {
    id,
    name,
    description: description,
    start: getDate(start),
    end: getDate(end),
    image: image.data ? getImageType(image.data) : null, // TODO - add image data
    skills: skills?.data.map(getSkillType) || [],
    repo,
    demo,
  };
}

function getDate(date: string | null) {
  return date ? new Date(date) : null;
}
