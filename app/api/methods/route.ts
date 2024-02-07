import validate from "@server/middleware/validateResource";
import {
  createMethodInput,
  createMethodSchema,
  getAllMethodsSchema,
} from "@server/schema/method.schema";
import { createMethod, getAllMethods } from "@server/services/method.service";
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
