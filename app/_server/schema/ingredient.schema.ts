import z, { array, object, string } from "zod";
import { ObjectIdNameSchema, idSchema } from "./common.schema";

export const IngredientSchema = ObjectIdNameSchema.extend({
  ingredientCategory: ObjectIdNameSchema,
  color: string(),
});

export const ingredientSchemaOutput = IngredientSchema;

export const ingredientSchemaInput = IngredientSchema.omit({
  _id: true,
}).extend({
  ingredientCategory: idSchema,
});

export const createIngredientSchema = object({
  body: ingredientSchemaInput,
});

export const getAllIngredientsSchema = object({});
export const getAllIngredientsSchemaOutput = array(ingredientSchemaOutput);

export type getAllIngredientsInput = z.infer<typeof getAllIngredientsSchema>;
export type createIngredientInput = z.infer<typeof createIngredientSchema>;
