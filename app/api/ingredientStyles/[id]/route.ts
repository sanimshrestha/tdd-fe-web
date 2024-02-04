import validate from "@/api/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@/api/schema/common.schema";
import { 
  deleteIngredientStyle, 
  findIngredientStyleById 
} from "@/api/services/ingredientStyle.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findIngredientStyleById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteIngredientStyle({ _id: params.id })
  );
}
