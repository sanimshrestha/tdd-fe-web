import validate from "@server/middleware/validateResource";
import {
  createIngredientStyleInput,
  createIngredientStyleSchema,
  getAllIngredientStylesSchema,
} from "@server/schema/ingredientStyle.schema";
import { 
  createIngredientStyle, 
  getAllIngredientStyles 
} from "@server/services/ingredientStyle.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
  return validate(getAllIngredientStylesSchema)
        ({}, {}, {}, response, getAllIngredientStyles);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createIngredientStyleInput["body"] = await request.json();
  return validate(createIngredientStyleSchema)(body, {}, {}, response, () =>
    createIngredientStyle(body)
  );
}
