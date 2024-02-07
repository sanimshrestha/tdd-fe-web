import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import MethodModel, { MethodDocument } from "../models/method.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createMethodInput,
  getAllMethodsSchemaOutput,
  methodSchemaOutput,
} from "../schema/method.schema";

export async function createMethod(input: createMethodInput["body"]) {
  return createItem(MethodModel, input);
}

export async function findMethodById(id: ObjectId, options?: QueryOptions) {
  return findItemById(MethodModel, id, methodSchemaOutput, options);
}

export async function getAllMethods(options?: QueryOptions) {
  return getAllItems(MethodModel, getAllMethodsSchemaOutput, options);
}

export async function deleteMethod(query: FilterQuery<MethodDocument>) {
  return deleteItem(MethodModel, query);
}
