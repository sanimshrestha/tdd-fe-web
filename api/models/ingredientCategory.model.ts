import mongoose, { InferSchemaType, Schema } from "mongoose";

const IngredientCategorySchema = new Schema(
  {
    name: { type: String, required: true },
  }
);

export type IngredientCategoryDocument = 
InferSchemaType<typeof IngredientCategorySchema>;

const IngredientCategoryModel =
  mongoose.models.IngredientCategory || 
  mongoose.model<IngredientCategoryDocument>("IngredientCategory", 
                                              IngredientCategorySchema);

export default IngredientCategoryModel;