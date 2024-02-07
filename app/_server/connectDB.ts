import mongoose, { connect } from "mongoose";
import type _mongoose from "mongoose";
import z from "zod";
import DrinkModel from "./models/drink.model";
import DrinkCategoryModel from "./models/drinkCategory.model";
import GarnishingModel from "./models/garnishing.model";
import GlassModel from "./models/glass.model";
import IngredientModel from "./models/ingredient.model";
import AccessoryModel from "./models/accessory.model";
import MethodModel from "./models/method.model";
import IngredientStyleModel from "./models/ingredientStyle.model";
import IngredientCategoryModel from "./models/ingredientCategory.model";
import FeedbackModel from "./models/feedback.model";
import NewsletterModel from "./models/newsletter.model";

declare global {
  var mongoose: {
    promise: ReturnType<typeof connect> | null;
    conn: typeof _mongoose | null;
  };
}

const MONGODB_URI = z.string().parse(process.env.MONGODB_URI);

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = connect(MONGODB_URI, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  const drinkModel = DrinkModel.find();
  const drinkCategoryModel = DrinkCategoryModel.find();
  const garnishingModel = GarnishingModel.find();
  const glassModel = GlassModel.find();
  const ingredientModel = IngredientModel.find();
  const ingredientStyleModel = IngredientStyleModel.find();
  const ingredientCategoryModel = IngredientCategoryModel.find();
  const accessoryModel = AccessoryModel.find();
  const methodModel = MethodModel.find();
  const feedbackModel = FeedbackModel.find();
  const newsletterModel = NewsletterModel.find();

  return cached.conn;
}

export default connectDB;
