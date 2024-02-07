import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import GarnishingModel, {
  GarnishingDocument,
} from "../models/garnishing.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createGarnishingInput,
  garnishingSchemaOutput,
  getAllGarnishingsSchemaOutput,
} from "../schema/garnishing.schema";

export async function createGarnishing(input: createGarnishingInput["body"]) {
  return createItem(GarnishingModel, input);
}

export async function findGarnishingById(id: ObjectId, options?: QueryOptions) {
  return findItemById(GarnishingModel, id, garnishingSchemaOutput, options);
}

export async function getAllGarnishing(options?: QueryOptions) {
  return getAllItems(GarnishingModel, getAllGarnishingsSchemaOutput, options);
}

export async function deleteGarnishing(query: FilterQuery<GarnishingDocument>) {
  return deleteItem(GarnishingModel, query);
}
