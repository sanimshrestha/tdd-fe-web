import validate from "@server/middleware/validateResource";
import {
  createIngredientInput,
  createIngredientSchema,
  getAllIngredientsSchema,
} from "@server/schema/ingredient.schema";
import {
  createIngredient,
  getAllIngredients,
} from "@server/services/ingredient.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
  return validate(getAllIngredientsSchema)(
    {},
    {},
    {},
    response,
    getAllIngredients
  );
}

export async function POST(request: Request, response: NextResponse) {
  const body: createIngredientInput["body"] = await request.json();
  return validate(createIngredientSchema)(body, {}, {}, response, () =>
    createIngredient(body)
  );
}
