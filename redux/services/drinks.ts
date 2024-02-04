// Need to use the React-specific entry point to import createApi
import {
  drinkSchemaOutput,
  getAllDrinksOutput,
} from "@/api/schema/drink.schema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const drinkApi = createApi({
  reducerPath: "drinkApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    getDrinks: builder.query<getAllDrinksOutput, void>({
      query: () => "drinks",
    }),
    getDrinkBySlug: builder.query<drinkSchemaOutput, string>({
      query: (slug) => `drinks/${slug}`,
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDrinksQuery, useGetDrinkBySlugQuery } = drinkApi;
export default drinkApi;
