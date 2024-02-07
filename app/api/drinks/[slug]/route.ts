import validate from "@server/middleware/validateResource";
import {
  drinkSlugParamsInput,
  drinkSlugParamsSchema,
} from "@server/schema/drink.schema";
import { deleteDrink, findDrink } from "@server/services/drink.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: drinkSlugParamsInput },
  response: NextResponse
) {
  return validate(drinkSlugParamsSchema)({}, params, {}, response, () =>
    findDrink(params)
  );
}

export async function DELETE(
  request: Request,
  { params }: drinkSlugParamsInput,
  response: NextResponse
) {
  return validate(drinkSlugParamsSchema)({}, params, {}, response, () =>
    deleteDrink(params)
  );
}
