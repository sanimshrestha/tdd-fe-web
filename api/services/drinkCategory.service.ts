import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import DrinkCategoryModel, {
  DrinkCategoryDocument,
} from "../models/drinkCategory.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createDrinkCategoryInput,
  drinkCategorySchemaOutput,
  getAllDrinkCategoriesSchemaOutput,
} from "../schema/drinkCategory.schema";

export async function createDrinkCategory(
  input: createDrinkCategoryInput["body"]
) {
  return createItem(DrinkCategoryModel, input);
}

export async function findDrinkCategoryById(
  id: ObjectId,
  options?: QueryOptions
) {
  return findItemById(
    DrinkCategoryModel,
    id,
    drinkCategorySchemaOutput,
    options
  );
}

export async function getAllDrinkCategory(options?: QueryOptions) {
  return getAllItems(
    DrinkCategoryModel,
    getAllDrinkCategoriesSchemaOutput,
    options
  );
}

export async function deleteDrinkCategory(
  query: FilterQuery<DrinkCategoryDocument>
) {
  return deleteItem(DrinkCategoryModel, query);
}
