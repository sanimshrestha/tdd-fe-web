import validate from "@/api/middleware/validateResource";
import { 
  createAccessoryInput, 
  createAccessorySchema, 
  getAllAccessoriesSchema } 
  from "@/api/schema/accessory.schema";
import { 
  createAccessory, 
  getAllAccessory } 
  from "@/api/services/accessory.service";
import {NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
 return validate(getAllAccessoriesSchema)
                ({}, {}, {}, response, getAllAccessory);
}

export async function POST(
  request: Request,
  response: NextResponse
) {
  const body:createAccessoryInput["body"] = await request.json()
  return validate(createAccessorySchema)
                  (body,{},{}, response, ()=>createAccessory(body));
}