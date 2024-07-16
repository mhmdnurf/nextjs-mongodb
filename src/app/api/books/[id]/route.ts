import connectMongoDB from "@/lib/mongodb";
import Book from "@/models/book";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  res: NextResponse,
  {
    params,
  }: {
    params: {
      id: string;
    };
  }
) => {
  connectMongoDB();
  const { id } = params;
  const { title, author, year } = await req.json();
  const book = await Book.findByIdAndUpdate(
    id,
    { title, author, year },
    { new: true }
  );

  return NextResponse.json({ book });
};
