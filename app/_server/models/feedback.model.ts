import mongoose, { InferSchemaType } from "mongoose";

const FeedbackSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: {
      type: String,
      required: true,
      validate: {
        validator: function (v: string) {
          return /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(v);
        },
        message: () => "Invalid email!",
      },
    },
    feedbackType: { type: String, required: true },
    feedbackMessage: { type: String, required: true },
    contactConsent: { type: Boolean, required: true },
  },
  {
    timestamps: true,
  }
);

export type FeedbackDocument = InferSchemaType<typeof FeedbackSchema>;

const FeedbackModel =
  mongoose.models.Feedback ||
  mongoose.model<FeedbackDocument>("Feedback", FeedbackSchema);

export default FeedbackModel;
