import z, { ZodRawShape } from "zod";

export function getApiDataSingleElement<T extends ZodRawShape>(
  data: z.ZodObject<T>
) {
  return z.object({
    id: z.number(),
    attributes: z
      .object({
        locale: z.string(),
      })
      .merge(data),
  });
}

export function getApiDataSingle<T extends ZodRawShape>(data: z.ZodObject<T>) {
  return z.object({
    data: getApiDataSingleElement(data),
  });
}

export function getApiDataMany<T extends ZodRawShape>(data: z.ZodObject<T>) {
  return z.object({
    data: z.array(getApiDataSingleElement(data)),
  });
}
