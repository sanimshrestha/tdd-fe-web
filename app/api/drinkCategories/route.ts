import validate from "@/api/middleware/validateResource";
import {
  createDrinkCategoryInput,
  createDrinkCategorySchema,
  getAllDrinkCategoriesSchema,
} from "@/api/schema/drinkCategory.schema";
import {
  createDrinkCategory,
  getAllDrinkCategory,
} from "@/api/services/drinkCategory.service";
import { NextResponse } from "next/server";

export async function GET(response: NextResponse) {
  return validate(getAllDrinkCategoriesSchema)(
    {},
    {},
    {},
    response,
    getAllDrinkCategory
  );
}

export async function POST(request: Request, response: NextResponse) {
  const body: createDrinkCategoryInput["body"] = await request.json();
  return validate(createDrinkCategorySchema)(body, {}, {}, response, () =>
    createDrinkCategory(body)
  );
}
