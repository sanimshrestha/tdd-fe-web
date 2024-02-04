import z, { array, boolean, object, string } from "zod";
import { ObjectIdSchema } from "./common.schema";

export const FeedbackSchema = ObjectIdSchema.extend({
  email: string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
  name: string().min(1, { message: "Please enter your name" }),
  feedbackType: z.enum(["Feedback", "Bug Report", "Suggestions"]),
  feedbackMessage: string().min(1, { message: "Please enter your feedback" }),
  contactConsent: boolean().default(false).optional(),
});

export const feedbackSchemaOutput = FeedbackSchema;
export const feedbackSchemaInput = FeedbackSchema.omit({ _id: true });

export const createFeedbackSchema = object({
  body: feedbackSchemaInput,
});

export const getAllFeedbacksSchema = object({});
export const getAllFeedbacksSchemaOutput = array(feedbackSchemaOutput);

export type getAllFeedbacksInput = z.infer<typeof getAllFeedbacksSchema>;
export type createFeedbackInput = z.infer<typeof createFeedbackSchema>;
