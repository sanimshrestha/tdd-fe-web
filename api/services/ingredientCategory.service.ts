import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import IngredientCategoryModel, {
  IngredientCategoryDocument,
} from "../models/ingredientCategory.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createIngredientCategoryInput,
  getAllIngredientCategoriesSchemaOutput,
  ingredientCategorySchemaOutput,
} from "../schema/ingredientCategory.schema";

export async function createIngredientCategory(
  input: createIngredientCategoryInput["body"]
) {
  return createItem(IngredientCategoryModel, input);
}

export async function findIngredientCategoryById(
  id: ObjectId,
  options?: QueryOptions
) {
  return findItemById(
    IngredientCategoryModel,
    id,
    ingredientCategorySchemaOutput,
    options
  );
}

export async function getAllIngredientCategories(options?: QueryOptions) {
  return getAllItems(
    IngredientCategoryModel,
    getAllIngredientCategoriesSchemaOutput,
    options
  );
}

export async function deleteIngredientCategory(
  query: FilterQuery<IngredientCategoryDocument>
) {
  return deleteItem(IngredientCategoryModel, query);
}
