import {
  Document,
  FilterQuery,
  Model,
  ObjectId,
  QueryOptions,
  UpdateQuery,
} from "mongoose";
import { NextResponse } from "next/server";
import connectDB from "../connectDB";
import z from "zod";
import { populateSchema } from "../schema/common.schema";

export async function createItem<T>(model: Model<T>, input: T) {
  await connectDB();
  try {
    const result = await model.create(input);
    return NextResponse.json(
      {
        message: `New ${model.modelName.toLowerCase()} created`,
        _id: result._id,
      },
      { status: 201 }
    );
  }catch (e: unknown) {
    if (typeof e === 'object' && e !== null 
        && 'code' in e && (e as any).code === 11000) {
      return NextResponse.json(
        {
          error: `Duplicate ${model.modelName.toLowerCase()} found`,
        },
        { status: 409 }
      );
    }
    else{
      return NextResponse.json(
        {
          error: `Something went wrong while creating a new 
                  ${model.modelName.toLowerCase()}`,
        },
        { status: 500 }
      );
    }
  } 
}

export async function findItemById<T extends Document>(
  model: Model<T>,
  id: ObjectId,
  outputSchema: z.ZodTypeAny,
  options: QueryOptions = { lean: true, populate: [] }
) {
  await connectDB();
  try {
    const { populate, ...queryOptions } = options;
    let modelQuery = model.findById(id, {}, queryOptions);
    if (populate) {
      const parsedPopulate = populateSchema.parse(populate);
      modelQuery.populate(parsedPopulate);
    }
    let result = await modelQuery.exec();
    result = outputSchema.parse(result);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { error: `Couldn't find ${model.modelName.toLowerCase()}` },
      { status: 404 }
    );
  }
}

export async function findItem<T extends Document>(
  model: Model<T>,
  query: FilterQuery<T>,
  outputSchema: z.ZodTypeAny,
  options: QueryOptions = { lean: true, populate: [] }
) {
  await connectDB();
  try {
    const { populate, ...queryOptions } = options;
    let modelQuery = model.findOne(query, {}, queryOptions);
    if (populate) {
      const parsedPopulate = populateSchema.parse(populate);
      modelQuery.populate(parsedPopulate);
    }
    let result = await modelQuery.exec();
    result = outputSchema.parse(result);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      { error: `Couldn't find ${model.modelName.toLowerCase()}` },
      { status: 404 }
    );
  }
}

export const getAllItems = async <T extends Document>(
  model: Model<T>,
  outputSchema: z.ZodTypeAny,
  options: QueryOptions = { lean: true, populate: [] }
) => {
  await connectDB();

  try {
    const { populate, ...queryOptions } = options;
    let modelQuery = model.find({}, {}, queryOptions);
    if (populate) {
      const parsedPopulate = populateSchema.parse(populate);
      modelQuery.populate(parsedPopulate);
    }
    let result = await modelQuery.exec();
    result = outputSchema.parse(result);
    return NextResponse.json(result);
  } catch (e) {
    return NextResponse.json(
      {
        error: `Something went wrong while retrieving all 
                ${model.modelName.toLowerCase()}`,
        e: e,
      },
      { status: 500 }
    );
  }
};

export async function findAndUpdateItem<T extends Document>(
  model: Model<T>,
  query: FilterQuery<T>,
  update: UpdateQuery<T>,
  options: QueryOptions = { lean: true }
) {
  await connectDB();

  try {
    const result = await model.findOneAndUpdate(query, update, options);
    return NextResponse.json(
      { message: `${model.modelName.toLowerCase()} Updated` },
      { status: 204 }
    );
  } catch (e) {
    return NextResponse.json(
      {
        error: `Something went wrong while updating the 
        ${model.modelName.toLowerCase()}`,
      },
      { status: 500 }
    );
  }
}

export async function deleteItem<T extends Document>(
  model: Model<T>,
  query: FilterQuery<T>
) {
  await connectDB();
  try {
    const result = await model.deleteOne(query);
    if (result.deletedCount === 0)
      return NextResponse.json(
        {
          error: `Couldn't find ${model.modelName.toLowerCase()} to delete`,
        },
        { status: 500 }
      );
    return NextResponse.json({ message: `${model.modelName} deleted` });
  } catch (e) {
    // console.log(e);
    return NextResponse.json(
      {
        error: `Something went wrong while deleting a 
        ${model.modelName.toLowerCase()}`,
        e: e,
      },
      { status: 500 }
    );
  }
}
