import { unstable_noStore as noStore } from "next/cache";

export async function getNukeData() {
  noStore();
  try {
    const res = await fetch("http://localhost:3000/api/codes");

    if (!res.ok) {
      throw new Error("Failed to fetch nuke codes");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching nuke data:", error);
    throw error;
  }
}
