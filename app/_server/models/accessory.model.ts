import mongoose, { InferSchemaType, Schema } from "mongoose";

const AccessorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    strokeColor: { type: String },
    stokeWidth: { type: Number },
    fill: { type: String },
  },
  {
    timestamps: true,
  }
);

export type AccessoryDocument = InferSchemaType<typeof AccessorySchema>;

const AccessoryModel =
  mongoose.models.Accessory ||
  mongoose.model<AccessoryDocument>("Accessory", AccessorySchema);

export default AccessoryModel;
