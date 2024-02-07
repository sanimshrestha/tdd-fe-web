import validate from "@server/middleware/validateResource";
import {
  createGarnishingInput,
  createGarnishingSchema,
  getAllGarnishingsSchema,
} from "@server/schema/garnishing.schema";
import {
  createGarnishing,
  getAllGarnishing,
} from "@server/services/garnishing.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
  return validate(getAllGarnishingsSchema)(
    {},
    {},
    {},
    response,
    getAllGarnishing
  );
}

export async function POST(request: Request, response: NextResponse) {
  const body: createGarnishingInput["body"] = await request.json();
  return validate(createGarnishingSchema)(body, {}, {}, response, () =>
    createGarnishing(body)
  );
}
