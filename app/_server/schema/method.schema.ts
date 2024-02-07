import z, { array, object } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const MethodSchema = ObjectIdNameSchema;

export const methodSchemaOutput = MethodSchema;
export const methodSchemaInput = MethodSchema.omit({ _id: true });

export const createMethodSchema = object({
  body: methodSchemaInput,
});

export const getAllMethodsSchema = object({});
export const getAllMethodsSchemaOutput = array(methodSchemaOutput);

export type getAllMethodInput = z.infer<typeof getAllMethodsSchema>;
export type createMethodInput = z.infer<typeof createMethodSchema>;
