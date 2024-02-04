import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import 
NewsletterModel, 
{ NewsletterDocument } 
from "../models/newsletter.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  newsletterSchemaOutput,
  createNewsletterInput,
  getAllNewslettersSchemaOutput,
} from "../schema/newsletter.schema";

export async function createNewsletter(input: createNewsletterInput["body"]) {
  return createItem(NewsletterModel, input);
}

export async function findNewsletterById(id: ObjectId, options?: QueryOptions) {
  return findItemById(NewsletterModel, id, newsletterSchemaOutput, options);
}

export async function getAllNewsletter(options?: QueryOptions) {
  return getAllItems(NewsletterModel, getAllNewslettersSchemaOutput, {
    ...options,
    populate: [],
    lean: true,
  });
}

export async function deleteNewsletter(query: FilterQuery<NewsletterDocument>) {
  return deleteItem(NewsletterModel, query);
}
