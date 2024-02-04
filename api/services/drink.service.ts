import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import DrinkModel, { DrinkDocument } from "../models/drink.model";
import {
  createItem,
  deleteItem,
  findItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createDrinkInput,
  drinkSchemaOutput,
  getAllDrinksSchemaOutput,
} from "../schema/drink.schema";

export async function createDrink(input: createDrinkInput["body"]) {
  return createItem(DrinkModel, input); 
}

export async function findDrink(
  query: FilterQuery<DrinkDocument>,
  options?: QueryOptions
) {
  return findItem(DrinkModel, query, drinkSchemaOutput, {
    ...options,
    populate: [
      { path: "drinkCategory" },
      { path: "method" },
      { path: "glass" },
      { path: "accessory.ref" },
      { path: "garnishing.ref" },
      { path: "ingredients.ref", populate: { path: "ingredientCategory" } },
      { path: "ingredients.ingredientStyle" },
    ],
    lean: true,
  });
}

export async function getAllDrinks(options?: QueryOptions) {
  return getAllItems(DrinkModel, getAllDrinksSchemaOutput, {
    ...options,
    populate: [
      { path: "drinkCategory" },
      { path: "method" },
      { path: "glass" },
      { path: "accessory.ref" },
      { path: "garnishing.ref" },
      { path: "ingredients.ref", populate: { path: "ingredientCategory" } },
      { path: "ingredients.ingredientStyle" },
    ],
    lean: true,
  });
}

export async function deleteDrink(query: FilterQuery<DrinkDocument>) {
  return deleteItem(DrinkModel, query);
}

// export async function findAndUpdateDrink(
//   query: FilterQuery<DrinkDocument>,
//   update: UpdateQuery<DrinkDocument>,
//   options?: QueryOptions
// ) {
//   return findAndUpdateItem(DrinkModel, query, update, options);
// }
