import { FilterQuery, QueryOptions, ObjectId } from "mongoose";
import GlassModel, { GlassDocument } from "../models/glass.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  createGlassInput,
  getAllGlassesSchemaOutput,
  glassSchemaOutput,
} from "../schema/glass.schema";

export async function createGlass(input: createGlassInput["body"]) {
  return createItem(GlassModel, input);
}

export async function findGlassById(id: ObjectId, options?: QueryOptions) {
  return findItemById(GlassModel, id, glassSchemaOutput, options);
}

export async function getAllGlasses(options?: QueryOptions) {
  return getAllItems(GlassModel, getAllGlassesSchemaOutput, {
    ...options,
    populate: [],
    lean: true,
  });
}

export async function deleteGlass(query: FilterQuery<GlassDocument>) {
  return deleteItem(GlassModel, query);
}
