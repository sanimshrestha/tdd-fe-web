import mongoose, { InferSchemaType, Schema } from "mongoose";

const GlassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    strokeColor: { type: String },
    strokeWidth: { type: Number },
    ingredientGap: { type: Number },
    sideGap: { type: Number },
    leftPadding: { type: Number },
    bottomGap: { type: Number },
    drinkContainerHeightPercent: { type: Number },
    drinkPaddingPercent: { type: Number },
  },
  {
    timestamps: true,
  }
);

export type GlassDocument = InferSchemaType<typeof GlassSchema>;

const GlassModel =
  mongoose.models.Glass || mongoose.model<GlassDocument>("Glass", GlassSchema);

export default GlassModel;
