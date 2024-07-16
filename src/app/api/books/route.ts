import connectMongoDB from "@/lib/mongodb";
import Book from "@/models/book";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest, res: NextResponse) => {
  connectMongoDB();
  const books = await Book.find();
  return NextResponse.json(
    {
      message: "Books fetched successfully!",
      data: books,
    },
    { status: 200 }
  );
};

export const POST = async (req: NextRequest, res: NextResponse) => {
  connectMongoDB();
  const { title, author, year } = await req.json();
  const book = new Book({ title, author, year });
  await book.save();
  return NextResponse.json(
    {
      message: "Book created successfully!",
      data: book,
    },
    {
      status: 201,
    }
  );
};

export const DELETE = async (req: NextRequest, res: NextResponse) => {
  connectMongoDB();
  const id = req.nextUrl.searchParams.get("id");
  await Book.findByIdAndDelete(id);
  return NextResponse.json({ message: "Book deleted successfully!" });
};
