import validate from "@/api/middleware/validateResource";
import {
  createMethodInput,
  createMethodSchema,
  getAllMethodsSchema,
} from "@/api/schema/method.schema";
import { createMethod, getAllMethods } from "@/api/services/method.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
  return validate(getAllMethodsSchema)({}, {}, {}, response, getAllMethods);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createMethodInput["body"] = await request.json();
  return validate(createMethodSchema)(body, {}, {}, response, () =>
    createMethod(body)
  );
}
