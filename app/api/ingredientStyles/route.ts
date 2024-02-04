import validate from "@/api/middleware/validateResource";
import {
  createIngredientStyleInput,
  createIngredientStyleSchema,
  getAllIngredientStylesSchema,
} from "@/api/schema/ingredientStyle.schema";
import { 
  createIngredientStyle, 
  getAllIngredientStyles 
} from "@/api/services/ingredientStyle.service";
import { NextResponse } from "next/server";

export async function GET(response: NextResponse) {
  return validate(getAllIngredientStylesSchema)
        ({}, {}, {}, response, getAllIngredientStyles);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createIngredientStyleInput["body"] = await request.json();
  return validate(createIngredientStyleSchema)(body, {}, {}, response, () =>
    createIngredientStyle(body)
  );
}
