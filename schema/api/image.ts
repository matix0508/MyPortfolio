import { z } from "zod";
import { createUnionSchema } from "../createUnionSchema";
import { getApiDataSingle, getApiDataSingleNullable } from "./common";

const formats = ["large", "medium", "small", "thumbnail"] as const;

const formatSchema = z.object({
  ext: z.string(),
  url: z.string(),
  hash: z.string(),
  mime: z.string(),
  name: z.string(),
  path: z.string().nullable(),
  size: z.number(),
  width: z.number(),
  height: z.number(),
});

export const imageSchema = z
  .object({
    alternativeText: z.string().nullable(),
    caption: z.string().nullable(),
    formats: z.record(createUnionSchema(formats), formatSchema),
    previewUrl: z.string().nullable(),
    provider: z.string(),
    provider_metadata: z.unknown(),
  })
  .merge(formatSchema.omit({ path: true }));

export const imageApiSchema = getApiDataSingle(imageSchema);
export const imageApiNullableSchema = getApiDataSingleNullable(imageSchema);

type ImageApi = z.infer<typeof imageApiSchema>;
export type ImageType = Pick<
  ImageApi["data"]["attributes"],
  "alternativeText" | "url" | "width" | "height" | "size"
>;

export function getImageType({
  attributes: { alternativeText, url, width, height, size },
}: ImageApi["data"]): ImageType {
  return {
    alternativeText,
    url,
    width,
    height,
    size,
  };
}
