"use server";

import Todo from "@/models/todo";
import { revalidatePath } from "next/cache";
import { connectToMongoDB } from "@/lib/mongodb";
import { redirect } from "next/navigation";

export async function createTodos(formData: FormData) {
  await connectToMongoDB();

  const data = Object.fromEntries(formData.entries());

  const { todo, todoDeadline } = data;

  try {
    const newTodo = await Todo.create({
      todo,
      todoDeadline,
    });

    newTodo.save();
    return newTodo.toString();
  } catch (error) {
    console.log(error);
    return {
      message: "Error creating todo",
    };
  } finally {
    revalidatePath("/todos");
    redirect("/todos");
  }
}

export async function deleteTodo(id: FormData) {
  const todoId = id.get("id");

  try {
    await Todo.deleteOne({
      _id: todoId,
    });

    return "Todo deleted";
  } catch (error) {
    return {
      message: "Error deleting todo",
    };
  } finally {
    revalidatePath("/todos");
  }
}
