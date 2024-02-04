import mongoose, { InferSchemaType, Schema } from "mongoose";

const DrinkSchema = new Schema(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true },
    drinkCategory: { type: Schema.Types.ObjectId, ref: "DrinkCategory"},
    method: { type: Schema.Types.ObjectId, ref: "Method", required: true },
    glass: { type: Schema.Types.ObjectId, ref: "Glass", required: true },
    accessory: {
      ref: { type: Schema.Types.ObjectId, ref: "Accessory" },
      top: String,
      left: String,
    },
    garnishing: {
      ref: { type: Schema.Types.ObjectId, ref: "Garnishing" },
      top: String,
      left: String,
    },
    ingredients: [
      {
        ref: { type: Schema.Types.ObjectId, ref: "Ingredient", required: true },
        parts: { type: Number, required: true },
        ingredientStyle: { 
          type: Schema.Types.ObjectId, 
          ref: "IngredientStyle" },
        amount: [Number],
        unit: [String],
      },
    ],
  },
  {
    timestamps: true,
  }
);

export type DrinkDocument = InferSchemaType<typeof DrinkSchema>;

const DrinkModel =
  mongoose.models.Drink || mongoose.model<DrinkDocument>("Drink", DrinkSchema);

export default DrinkModel;