import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import AccessoryModel, { AccessoryDocument } from "../models/accessory.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  accessorySchemaOutput,
  createAccessoryInput,
  getAllAccessoriesSchemaOutput,
} from "../schema/accessory.schema";

export async function createAccessory(input: createAccessoryInput["body"]) {
  return createItem(AccessoryModel, input);
}

export async function findAccessoryById(id: ObjectId, options?: QueryOptions) {
  return findItemById(AccessoryModel, id, accessorySchemaOutput, options);
}

export async function getAllAccessory(options?: QueryOptions) {
  return getAllItems(AccessoryModel, getAllAccessoriesSchemaOutput, {
    ...options,
    populate: [],
    lean: true,
  });
}

export async function deleteAccessory(query: FilterQuery<AccessoryDocument>) {
  return deleteItem(AccessoryModel, query);
}
