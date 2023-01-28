import { z } from "zod";
import { createUnionSchema } from "../createUnionSchema";
import { getApiDataSingle } from "./common";
import { getImageType, imageApiSchema, ImageType } from "./image";

const socialMedia = ["github", "linkedin", "facebook", "instagram"] as const;

export const socialMediaSchema = z.object({
  id: z.number(),
  name: createUnionSchema(socialMedia),
  link: z.string().url(),
});

const profileSchema = z.object({
  name: z.string(),
  title: z.string(),
  photo: imageApiSchema,
  email: z.string().email(),
  socialMedia: z.array(socialMediaSchema),
});

export const profileApiSchema = getApiDataSingle(profileSchema);
export type ProfileType = Omit<z.infer<typeof profileSchema>, "photo"> & {
  photo: ImageType;
};

export function getProfileType({
  attributes: { name, title, photo, email, socialMedia },
}: z.infer<typeof profileApiSchema>["data"]): ProfileType {
  return {
    name,
    title,
    photo: getImageType(photo.data),
    email,
    socialMedia,
  };
}
