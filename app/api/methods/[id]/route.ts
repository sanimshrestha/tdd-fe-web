import validate from "@/api/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@/api/schema/common.schema";
import { deleteMethod, findMethodById } from "@/api/services/method.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findMethodById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteMethod({ _id: params.id })
  );
}
