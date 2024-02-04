import validate from "@/api/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@/api/schema/common.schema";

import {
  deleteDrinkCategory,
  findDrinkCategoryById,
} from "@/api/services/drinkCategory.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findDrinkCategoryById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteDrinkCategory({ _id: params.id })
  );
}
