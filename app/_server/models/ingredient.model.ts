import mongoose, { InferSchemaType, Schema } from "mongoose";

const IngredientSchema = new Schema(
  {
    name: { type: String, required: true },
    ingredientCategory: {
      type: Schema.Types.ObjectId,
      ref: "IngredientCategory",
      required: true,
    },
    color: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);


export type IngredientDocument = InferSchemaType<typeof IngredientSchema>;

const IngredientModel =
  mongoose.models.Ingredient || 
  mongoose.model<IngredientDocument>("Ingredient", IngredientSchema);

export default IngredientModel;