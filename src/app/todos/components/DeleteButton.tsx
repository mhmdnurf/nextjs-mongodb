"use client";

import { FaTrash } from "react-icons/fa";
import { deleteTodo } from "../lib/action";
import Swal from "sweetalert2";

async function handleDelete(id: FormData) {
  const result = await Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  });
  if (result.isConfirmed) {
    deleteTodo(id);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
  }
}

export default function DeleteButton({ id }: { id: string }) {
  return (
    <>
      <form action={handleDelete}>
        <input hidden type="text" name="id" defaultValue={id} />
        <button type="submit">
          <FaTrash color="fill-slate-900" />
        </button>
      </form>
    </>
  );
}
