import z, { array, object, string } from "zod";
import { ObjectIdSchema } from "./common.schema";

export const NewsletterSchema = ObjectIdSchema.extend({
  email: string()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Invalid email address" }),
});

export const newsletterSchemaOutput = NewsletterSchema;
export const newsletterSchemaInput = NewsletterSchema.omit({ _id: true });

export const createNewsletterSchema = object({
  body: newsletterSchemaInput,
});

export const getAllNewslettersSchema = object({});
export const getAllNewslettersSchemaOutput = array(newsletterSchemaOutput);

export type getAllNewslettersInput = z.infer<typeof getAllNewslettersSchema>;
export type createNewsletterInput = z.infer<typeof createNewsletterSchema>;
