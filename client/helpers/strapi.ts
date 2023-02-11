import { stringify } from "qs";

export const fetchStrapi = async (
  endpoint: string,
  query?: Record<string, any>
) => {
  const response = await fetch(
    `${process.env.STRAPI_API_URL}${endpoint}?${query ? stringify(query) : ""}`,
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
      },
    }
  );
  const data = await response.json();
  return data;
};