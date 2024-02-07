import validate from "@server/middleware/validateResource";
import {
  createFeedbackInput,
  createFeedbackSchema,
  getAllFeedbacksSchema,
} from "@server/schema/feedback.schema";
import {
  createFeedback,
  getAllFeedback,
} from "@server/services/feedback.service";
import { NextResponse } from "next/server";

export async function GET(request:Request, response: NextResponse) {
  return validate(getAllFeedbacksSchema)({}, {}, {}, response, getAllFeedback);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createFeedbackInput["body"] = await request.json();
  return validate(createFeedbackSchema)(body, {}, {}, response, () =>
    createFeedback(body)
  );
}
