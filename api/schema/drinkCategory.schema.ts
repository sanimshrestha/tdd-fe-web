import z, { array, object } from "zod";
import { ObjectIdNameSchema } from "./common.schema";

export const DrinkCategorySchema = ObjectIdNameSchema;

export const drinkCategorySchemaOutput = DrinkCategorySchema;
export const drinkCategorySchemaInput = DrinkCategorySchema.omit({ _id: true });

export const createDrinkCategorySchema = object({
  body: drinkCategorySchemaInput,
});

export const getAllDrinkCategoriesSchema = object({});
export const getAllDrinkCategoriesSchemaOutput = array(
  drinkCategorySchemaOutput
);

export type getAllDrinkCategoriesInput = z.infer<
  typeof getAllDrinkCategoriesSchema
>;
export type createDrinkCategoryInput = z.infer<
  typeof createDrinkCategorySchema
>;
