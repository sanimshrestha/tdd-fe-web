import validate from "@/api/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@/api/schema/common.schema";
import {
  deleteIngredientCategory,
  findIngredientCategoryById,
} from "@/api/services/ingredientCategory.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findIngredientCategoryById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteIngredientCategory({ _id: params.id })
  );
}
