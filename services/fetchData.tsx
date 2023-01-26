import { Schema } from "zod";

export async function fetchData<T>(url: string, schema: Schema<T>) {
  const res = await fetch(
    "http://localhost:1337/api/projects?populate=image&populate=skills"
  );
  return schema.parse(await res.json());
}
