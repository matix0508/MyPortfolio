import { Schema } from "zod";
import QueryString from "qs";
import axios from "axios";

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
  try {
    const res = await fetch(
      `${process.env.STRAPI_ENDPOINT}${url}${
        queryString ? "?" + queryString : ""
      }`,
      { cache: "force-cache" }
    );
    return schema.parse(await res.json());
  } catch (e) {
    console.error(e);
    return null;
  }
}
