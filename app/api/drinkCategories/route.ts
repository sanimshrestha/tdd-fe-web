import validate from "@server/middleware/validateResource";
import {
  createDrinkCategoryInput,
  createDrinkCategorySchema,
  getAllDrinkCategoriesSchema,
} from "@server/schema/drinkCategory.schema";
import {
  createDrinkCategory,
  getAllDrinkCategory,
} from "@server/services/drinkCategory.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
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
