import mongoose, { InferSchemaType, Schema } from "mongoose";

const IngredientStyleSchema = new Schema(
  {
    name: { type: String, required: true },
    unit: { type: String },
    units: { type: String },
  }
);


export type IngredientStyleDocument = 
InferSchemaType<typeof IngredientStyleSchema>;

const IngredientStyleModel =
  mongoose.models.IngredientStyle || 
  mongoose.model<IngredientStyleDocument>("IngredientStyle", 
                                          IngredientStyleSchema);

export default IngredientStyleModel;