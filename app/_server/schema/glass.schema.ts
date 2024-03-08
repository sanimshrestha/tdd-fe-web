import z, { array, number, object, string } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const GlassSchema = ObjectIdNameSchema.extend({
  width: number(),
  height: number(),
  strokeColor: string().optional(),
  strokeWidth: number().optional(),
  gap: number().optional(),
  drinkContainerHeightPercent: number().optional(),
  drinkPaddingPercent: number().optional(),
  fill: string().optional(),
});

export const glassSchemaOutput = GlassSchema;

export const glassSchemaInput = GlassSchema.omit({ _id: true });

export const createGlassSchema = object({
  body: glassSchemaInput,
});

export const getAllGlassSchema = object({});
export const getAllGlassesSchemaOutput = array(glassSchemaOutput);

export type getAllGlassInput = z.infer<typeof getAllGlassSchema>;
export type createGlassInput = z.infer<typeof createGlassSchema>;
