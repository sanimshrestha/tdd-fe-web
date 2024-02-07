import mongoose, { Schema } from "mongoose";
import { array, object, string, z } from "zod";

export const idSchema = z
  .custom<Schema.Types.ObjectId>()
  .refine((value) => value != null, {
    message: "Id is required",
  });

export const ObjectIdSchema = object({
  _id: idSchema,
});

export const ObjectRefSchema = object({
  ref: idSchema,
});

export const ObjectNameSchema = object({
  name: string({
    required_error: "Name is required",
  }).min(1),
});

export const ObjectIdNameSchema = ObjectIdSchema.merge(ObjectNameSchema);

export const ObjectPositionSchema = object({
  top: string(),
  left: string(),
});

export const ObjectRefPositionSchema =
  ObjectRefSchema.merge(ObjectPositionSchema);

export const populateSchema = array(
  object({
    path: z.string(),
    populate: object({
      path: z.string(),
      populate: z.any().optional(),
    }).optional(),
  })
);

export const paramsIdSchema = object({
  params: object({
    id: idSchema,
  }),
});

export type paramsIdInput = z.infer<typeof paramsIdSchema>;
