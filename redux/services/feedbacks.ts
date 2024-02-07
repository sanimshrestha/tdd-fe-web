import { createFeedbackInput } from "@server/schema/feedback.schema";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ObjectId } from "mongoose";

// Define a service using a base URL and expected endpoints
export const feedbackApi = createApi({
  reducerPath: "feedbackApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  endpoints: (builder) => ({
    createFeedback: builder.mutation<
      { message: string; _id: ObjectId },
      createFeedbackInput["body"]
    >({
      query: (feedbackInput) => ({
        url: "feedbacks",
        method: "POST",
        body: feedbackInput,
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useCreateFeedbackMutation } = feedbackApi;
export default feedbackApi;
