import z, { array, number, object, string } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const AccessorySchema = ObjectIdNameSchema.extend({
  strokeColor: string(),
  strokeWidth: number(),
  fill: string(),
});

export const accessorySchemaOutput = AccessorySchema;
export const accessorySchemaInput = AccessorySchema.omit({ _id: true });

export const createAccessorySchema = object({
  body: accessorySchemaInput,
});

export const getAllAccessoriesSchema = object({});
export const getAllAccessoriesSchemaOutput = array(accessorySchemaOutput);

export type getAllAccessoriesInput = z.infer<typeof getAllAccessoriesSchema>;
export type createAccessoryInput = z.infer<typeof createAccessorySchema>;
