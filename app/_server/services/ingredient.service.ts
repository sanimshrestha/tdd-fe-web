import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import IngredientModel, {
  IngredientDocument,
} from "../models/ingredient.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createIngredientInput,
  getAllIngredientsSchemaOutput,
  ingredientSchemaOutput,
} from "../schema/ingredient.schema";

export async function createIngredient(input: createIngredientInput["body"]) {
  return createItem(IngredientModel, input);
}

export async function findIngredientById(id: ObjectId, options?: QueryOptions) {
  return findItemById(IngredientModel, id, ingredientSchemaOutput, {
    ...options,
    populate: [{ path: "ingredientCategory" }],
    lean: true,
  });
}

export async function getAllIngredients(options?: QueryOptions) {
  return getAllItems(IngredientModel, getAllIngredientsSchemaOutput, {
    ...options,
    populate: [{ path: "ingredientCategory" }],
    lean: true,
  });
}

export async function deleteIngredient(query: FilterQuery<IngredientDocument>) {
  return deleteItem(IngredientModel, query);
}
