import z, { array, object } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const IngredientStyleSchema = ObjectIdNameSchema;

export const ingredientStyleSchemaOutput = IngredientStyleSchema;

export const ingredientStyleSchemaInput = IngredientStyleSchema.omit({
  _id: true,
});

export const createIngredientStyleSchema = object({
  body: ingredientStyleSchemaInput,
});

export const getAllIngredientStylesSchema = object({});
export const getAllIngredientStylesSchemaOutput = array(
  ingredientStyleSchemaOutput
);

export type getAllIngredientStyleInput = z.infer<
  typeof getAllIngredientStylesSchema
>;
export type createIngredientStyleInput = z.infer<
  typeof createIngredientStyleSchema
>;
