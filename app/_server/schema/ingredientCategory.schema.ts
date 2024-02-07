import z, { object, array } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const IngredientCategorySchema = ObjectIdNameSchema;

export const ingredientCategorySchemaOutput = IngredientCategorySchema;

export const ingredientCategorySchemaInput = IngredientCategorySchema.omit({
  _id: true,
});

export const createIngredientCategorySchema = object({
  body: ingredientCategorySchemaInput,
});

export const getAllIngredientCategoriesSchema = object({});
export const getAllIngredientCategoriesSchemaOutput = array(
  ingredientCategorySchemaOutput
);

export type getAllIngredientCategoryInput = z.infer<
  typeof getAllIngredientCategoriesSchema
>;
export type createIngredientCategoryInput = z.infer<
  typeof createIngredientCategorySchema
>;
