import { connectToMongoDB } from "@/lib/mongodb";
import Todo from "@/models/todo";
import { unstable_noStore as noStore } from "next/cache";

export default async function getTodos() {
  noStore();
  await connectToMongoDB();
  try {
    const todos = await Todo.find({});
    return todos;
  } catch (error) {
    console.log(error);
  }
}
