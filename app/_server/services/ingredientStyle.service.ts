import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import IngredientStyleModel, {
  IngredientStyleDocument,
} from "../models/ingredientStyle.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createIngredientStyleInput,
  getAllIngredientStylesSchemaOutput,
  ingredientStyleSchemaOutput,
} from "../schema/ingredientStyle.schema";

export async function createIngredientStyle(
  input: createIngredientStyleInput["body"]
) {
  return createItem(IngredientStyleModel, input);
}

export async function findIngredientStyleById(
  id: ObjectId,
  options?: QueryOptions
) {
  return findItemById(
    IngredientStyleModel,
    id,
    ingredientStyleSchemaOutput,
    options
  );
}

export async function getAllIngredientStyles(options?: QueryOptions) {
  return getAllItems(
    IngredientStyleModel,
    getAllIngredientStylesSchemaOutput,
    options
  );
}

export async function deleteIngredientStyle(
  query: FilterQuery<IngredientStyleDocument>
) {
  return deleteItem(IngredientStyleModel, query);
}
