import z, { array, number, object, string } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const GarnishingSchema = ObjectIdNameSchema.extend({
  type: string(),
  strokeColor: string().optional(),
  strokeWidth: number().optional(),
  fill: string().optional(),
});

export const garnishingSchemaOutput = GarnishingSchema;

export const garnishingSchemaInput = GarnishingSchema.omit({ _id: true });

export const createGarnishingSchema = object({
  body: garnishingSchemaInput,
});

export const getAllGarnishingsSchema = object({});
export const getAllGarnishingsSchemaOutput = array(garnishingSchemaOutput);

export type getAllGarnishingsInput = z.infer<typeof getAllGarnishingsSchema>;
export type createGarnishingInput = z.infer<typeof createGarnishingSchema>;
