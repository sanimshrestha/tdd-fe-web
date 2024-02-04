import { NextResponse } from "next/server";
import { ZodType } from "zod";

const validate =
  (schema: ZodType) =>
  (body:unknown, params:unknown, query:unknown, 
    res: NextResponse, next: () => void) => {
    try {
      schema.parse({
        body: body,
        params: params,
        query: query,
      });
      return next();
    } catch (e: any) {
      return NextResponse.json({ error: e.errors }, { status: 400 });
    }
  };

export default validate;
