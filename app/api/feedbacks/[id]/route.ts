import validate from "@/api/middleware/validateResource";
import { paramsIdInput, paramsIdSchema } from "@/api/schema/common.schema";
import {
  deleteFeedback,
  findFeedbackById,
} from "@/api/services/feedback.service";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    findFeedbackById(params.id)
  );
}

export async function DELETE(
  request: Request,
  { params }: paramsIdInput,
  response: NextResponse
) {
  return validate(paramsIdSchema)({}, params, {}, response, () =>
    deleteFeedback({ _id: params.id })
  );
}
