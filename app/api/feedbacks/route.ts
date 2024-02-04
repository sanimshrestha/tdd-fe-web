import validate from "@/api/middleware/validateResource";
import {
  createFeedbackInput,
  createFeedbackSchema,
  getAllFeedbacksSchema,
} from "@/api/schema/feedback.schema";
import {
  createFeedback,
  getAllFeedback,
} from "@/api/services/feedback.service";
import { NextResponse } from "next/server";

export async function GET(response: NextResponse) {
  return validate(getAllFeedbacksSchema)({}, {}, {}, response, getAllFeedback);
}

export async function POST(request: Request, response: NextResponse) {
  const body: createFeedbackInput["body"] = await request.json();
  return validate(createFeedbackSchema)(body, {}, {}, response, () =>
    createFeedback(body)
  );
}
