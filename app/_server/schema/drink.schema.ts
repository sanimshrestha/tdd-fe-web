import z, { array, number, object, string } from "zod";
import { AccessorySchema } from "./accessory.schema";
import { GarnishingSchema } from "./garnishing.schema";
import { IngredientSchema } from "./ingredient.schema";
import { IngredientStyleSchema } from "./ingredientStyle.schema";
import { DrinkCategorySchema } from "./drinkCategory.schema";
import { MethodSchema } from "./method.schema";
import {
  ObjectIdNameSchema,
  ObjectRefPositionSchema,
  ObjectIdSchema,
  ObjectRefSchema,
} from "./common.schema";
import { GlassSchema } from "./glass.schema";

const DrinkIngredientInputSchema = object({
  ref: ObjectRefSchema.shape.ref,
  parts: number({
    required_error: "Ingredient parts is required",
  }),
  ingredientStyle: ObjectIdSchema.shape._id,
  amount: array(number()).optional(),
  unit: array(string()).optional(),
});

const drinkSchemaInput = object({
  name: ObjectIdNameSchema.shape.name,
  slug: string({
    required_error: "Drink slug is required",
  }).min(1),
  drinkCategory: ObjectIdSchema.shape._id.optional(),
  method: ObjectIdSchema.shape._id,
  glass: ObjectIdSchema.shape._id,
  accessory: ObjectRefPositionSchema.optional(),
  garnishing:  array(ObjectRefPositionSchema.extend({
    rotation: string(),
    placement: string(),
  })).optional(),
  ingredients: array(DrinkIngredientInputSchema),
});

const DrinkAccessoryOutputSchema = ObjectRefPositionSchema.extend({
  ref: AccessorySchema,
}).transform((data) => {
  const { ref: populatedContents, ...rest } = data;
  return {
    ...populatedContents,
    ...rest,
  };
});

const DrinkGarnishingOutputSchema = ObjectRefPositionSchema.partial().extend({
  rotation: string().optional(),
  placement: string().optional(),
  ref: GarnishingSchema,
}).transform((data) => {
  const { ref: populatedContents, ...rest } = data;
  return {
    ...populatedContents,
    ...rest,
  };
});

const DrinkIngredientOutputSchema = DrinkIngredientInputSchema.extend({
  ref: IngredientSchema,
  ingredientStyle: IngredientStyleSchema,
}).transform((data) => {
  const { ref: populatedIngredientContents, ...rest } = data;
  return {
    ...populatedIngredientContents,
    ...rest,
  };
});

export const drinkSchemaOutput = ObjectIdNameSchema.extend({
  slug: string({
    required_error: "Drink slug is required",
  }).min(1),
  drinkCategory: DrinkCategorySchema.optional(),
  method: MethodSchema,
  glass: GlassSchema,
  accessory: DrinkAccessoryOutputSchema.optional(),
  garnishing: array(DrinkGarnishingOutputSchema).optional(),
  ingredients: array(DrinkIngredientOutputSchema),
});

export const createDrinkSchema = object({
  body: drinkSchemaInput,
});

export const drinkSlugParamsSchema = object({
  params: object({
    slug: string({
      required_error: "Drink slug is required",
    }).min(1),
  }),
});

export const getAllDrinksSchema = object({});
export const getAllDrinksSchemaOutput = array(drinkSchemaOutput);

export type drinkSlugParamsInput = z.infer<typeof drinkSlugParamsSchema>;
export type getAllDrinksInput = z.infer<typeof getAllDrinksSchema>;
export type drinkSchemaOutput = z.infer<typeof drinkSchemaOutput>;
export type getAllDrinksOutput = z.infer<typeof getAllDrinksSchemaOutput>;
export type createDrinkInput = z.infer<typeof createDrinkSchema>;
