import { NextResponse } from "next/server";
import { unstable_noStore as noStore } from "next/cache";

export async function GET() {
  noStore();
  try {
    const res = await fetch("http://localhost:8000/api/v1/codes", {
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch codes");
    }
    const responseData = await res.json();
    return NextResponse.json(
      {
        message: "Codes fetched successfully!",
        codes: responseData.data.codes,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch codes",
        error: error,
      },
      { status: 500 }
    );
  }
}
