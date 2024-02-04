import validate from "@/api/middleware/validateResource";
import {
  createIngredientCategoryInput,
  createIngredientCategorySchema,
  getAllIngredientCategoriesSchema,
} from "@/api/schema/ingredientCategory.schema";
import { 
  createIngredientCategory, 
  getAllIngredientCategories 
} from "@/api/services/ingredientCategory.service";
import { NextResponse } from "next/server";

export async function GET(response: NextResponse) {
  return validate(getAllIngredientCategoriesSchema)
                  ({}, {}, {}, response, getAllIngredientCategories);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createIngredientCategoryInput["body"] = await request.json();
  return validate(createIngredientCategorySchema)
                (body, {}, {}, response, () => createIngredientCategory(body));
}
