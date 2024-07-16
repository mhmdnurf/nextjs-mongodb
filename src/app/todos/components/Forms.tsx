"use client";

import { createTodos } from "@/app/todos/lib/action";
import SubmitButton from "@/app/todos/components/SubmitButton";
import Swal from "sweetalert2";

async function handleSubmit(FormData: FormData) {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You want to add this todo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  });
  if (result.isConfirmed) {
    await createTodos(FormData);
    Swal.fire({
      title: "Todo Added",
      icon: "success",
    });
  }
}

export default function Forms() {
  return (
    <form
      action={handleSubmit}
      className="flex flex-col w-full border-4 rounded-xl p-6"
    >
      <h2 className="text-center text-slate-800 font-bold text-3xl">
        Create Todo
      </h2>
      <label htmlFor="todo" className="py-2">
        Todo
      </label>
      <input
        type="text"
        name="todo"
        className="mb-2 p-2 border-2 rounded-md outline-none"
      />
      <label htmlFor="todoDeadline" className="py-2">
        Deadline
      </label>
      <input
        type="date"
        name="todoDeadline"
        className="p-2 border-2 outline-none rounded-md"
      />
      <SubmitButton />
    </form>
  );
}
