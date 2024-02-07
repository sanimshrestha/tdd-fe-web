import validate from "@server/middleware/validateResource";
import { 
  createGlassInput, 
  createGlassSchema, 
  getAllGlassSchema } 
  from "@server/schema/glass.schema";
import { createGlass, getAllGlasses } from "@server/services/glass.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
 return validate(getAllGlassSchema)({}, {}, {}, response, getAllGlasses);
}

export async function POST(
  request: Request,
  response: NextResponse
) {
  const body:createGlassInput["body"] = await request.json()
  return validate(createGlassSchema)
                  (body,{},{}, response, ()=>createGlass(body));
}

