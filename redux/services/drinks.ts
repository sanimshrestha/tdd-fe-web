// Need to use the React-specific entry point to import createApi
import {
  drinkSchemaOutput,
  getAllDrinksOutput,
} from "@server/schema/drink.schema";
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
    getDrinkWithPrevNext: builder.query<{
      drink: drinkSchemaOutput;
      prevDrink: drinkSchemaOutput;
      nextDrink: drinkSchemaOutput;
    }, string>({
      query: (slug) => `drinks/${slug}/withPrevNext`,
      transformResponse: (response:{
        currentItem: drinkSchemaOutput;
        previousItems: drinkSchemaOutput[];
        nextItems: drinkSchemaOutput[];
      }) => {
        return {
          drink: response.currentItem,
          prevDrink: response.previousItems[0],
          nextDrink: response.nextItems[0],
        };
      }
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetDrinksQuery, useGetDrinkBySlugQuery,
   useGetDrinkWithPrevNextQuery } = drinkApi;
export default drinkApi;
