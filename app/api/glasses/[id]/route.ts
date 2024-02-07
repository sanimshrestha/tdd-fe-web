import validate from "@server/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@server/schema/common.schema";
import { deleteGlass, findGlassById } from "@server/services/glass.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findGlassById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteGlass({_id: params.id})
  );
}

