import mongoose, { InferSchemaType, Schema } from "mongoose";

const DrinkCategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export type DrinkCategoryDocument = InferSchemaType<typeof DrinkCategorySchema>;

const DrinkCategoryModel = mongoose.models.DrinkCategory 
|| mongoose.model<DrinkCategoryDocument>("DrinkCategory", DrinkCategorySchema);

export default DrinkCategoryModel;
