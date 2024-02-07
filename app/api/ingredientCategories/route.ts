import validate from "@server/middleware/validateResource";
import {
  createIngredientCategoryInput,
  createIngredientCategorySchema,
  getAllIngredientCategoriesSchema,
} from "@server/schema/ingredientCategory.schema";
import { 
  createIngredientCategory, 
  getAllIngredientCategories 
} from "@server/services/ingredientCategory.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
  return validate(getAllIngredientCategoriesSchema)
                  ({}, {}, {}, response, getAllIngredientCategories);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createIngredientCategoryInput["body"] = await request.json();
  return validate(createIngredientCategorySchema)
                (body, {}, {}, response, () => createIngredientCategory(body));
}
