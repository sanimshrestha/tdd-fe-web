import validate from "@server/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@server/schema/common.schema";
import {
  deleteAccessory,
  findAccessoryById,
} from "@server/services/accessory.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findAccessoryById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteAccessory({ _id: params.id })
  );
}
