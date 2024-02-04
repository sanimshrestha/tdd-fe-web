import mongoose, { InferSchemaType } from "mongoose";

const NewsletterSchema = new mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  }
);

export type NewsletterDocument = InferSchemaType<typeof NewsletterSchema>;

const NewsletterModel =
  mongoose.models.Newsletter
  || mongoose.model<NewsletterDocument>("Newsletter", NewsletterSchema);

export default NewsletterModel;
