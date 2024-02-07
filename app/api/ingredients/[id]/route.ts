import validate from "@server/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@server/schema/common.schema";
import {
  deleteIngredient,
  findIngredientById,
} from "@server/services/ingredient.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findIngredientById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteIngredient({ _id: params.id })
  );
}
