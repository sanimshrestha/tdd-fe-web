import mongoose, { InferSchemaType, Schema } from "mongoose";

const GlassSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    strokeColor: { type: String },
    strokeWidth: { type: Number },
    gap: { type: Number },
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
