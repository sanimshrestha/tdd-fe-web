import { FilterQuery, ObjectId, QueryOptions } from "mongoose";
import FeedbackModel, { FeedbackDocument } from "../models/feedback.model";
import {
  createItem,
  deleteItem,
  findItemById,
  getAllItems,
} from "./crud.service";
import {
  feedbackSchemaOutput,
  createFeedbackInput,
  getAllFeedbacksSchemaOutput,
} from "../schema/feedback.schema";

export async function createFeedback(input: createFeedbackInput["body"]) {
  return createItem(FeedbackModel, input);
}

export async function findFeedbackById(id: ObjectId, options?: QueryOptions) {
  return findItemById(FeedbackModel, id, feedbackSchemaOutput, options);
}

export async function getAllFeedback(options?: QueryOptions) {
  return getAllItems(FeedbackModel, getAllFeedbacksSchemaOutput, {
    ...options,
    populate: [],
    lean: true,
  });
}

export async function deleteFeedback(query: FilterQuery<FeedbackDocument>) {
  return deleteItem(FeedbackModel, query);
}
