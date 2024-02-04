import validate from "@/api/middleware/validateResource";
import { 
  createDrinkInput, 
  createDrinkSchema, 
  getAllDrinksSchema } 
  from "@/api/schema/drink.schema";
import { 
  createDrink, 
  getAllDrinks } from 
  "@/api/services/drink.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  response: NextResponse
) {
  return validate(getAllDrinksSchema)({},{},{}, response, getAllDrinks);
}

export async function POST(
  request: Request,
  response: NextResponse
) {
  const body:createDrinkInput["body"] = await request.json()
  return validate(createDrinkSchema)
                  (body,{},{}, response, ()=>createDrink(body));
}
