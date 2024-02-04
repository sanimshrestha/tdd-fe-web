import mongoose, { InferSchemaType, Schema } from "mongoose";
import z from "zod";

const MethodSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export type MethodDocument = InferSchemaType<typeof MethodSchema>;

const MethodModel =
  mongoose.models.Method || 
  mongoose.model<MethodDocument>("Method", MethodSchema);

export default MethodModel;