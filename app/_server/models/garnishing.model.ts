import mongoose, { InferSchemaType, Schema } from "mongoose";

const GarnishingSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    strokeColor: { type: String },
    strokeWidth: { type: Number },
    fill: { type: String },
  },
  {
    timestamps: true,
  }
);

export type GarnishingDocument = InferSchemaType<typeof GarnishingSchema>;

const GarnishingModel =
  mongoose.models.Garnishing || 
  mongoose.model<GarnishingDocument>("Garnishing", GarnishingSchema);

export default GarnishingModel;
