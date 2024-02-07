import validate from "@server/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@server/schema/common.schema";
import { 
  deleteIngredientStyle, 
  findIngredientStyleById 
} from "@server/services/ingredientStyle.service";
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
