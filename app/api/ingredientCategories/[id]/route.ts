import validate from "@server/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@server/schema/common.schema";
import {
  deleteIngredientCategory,
  findIngredientCategoryById,
} from "@server/services/ingredientCategory.service";
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
