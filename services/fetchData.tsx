import { Schema } from "zod";
import QueryString from "qs";

type Query = {
  [key: string]: unknown;
};

export async function fetchData<T>(
  url: string,
  query: Query,
  schema: Schema<T>
) {
  const queryString = QueryString.stringify(query, {
    encodeValuesOnly: true, // prettify URL
  });
  const res = await fetch(
    `${process.env.STRAPI_ENDPOINT}${url}?${queryString}`
  );
  return schema.parse(await res.json());
}
