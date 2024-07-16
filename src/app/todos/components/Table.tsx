import getTodos from "../lib/data";
import DeleteButton from "./DeleteButton";
import Link from "next/link";

export default async function Table() {
  const todos = await getTodos();
  return (
    <>
      <Link
        href={"/todos/create"}
        className="bg-green-500 text-white px-4 py-2 rounded font-semibold mb-6 w-fit"
      >
        Create Todos
      </Link>
      <div className="overflow-x-auto rounded-lg border-2 p-4">
        <table className="w-full">
          <thead className="text-left">
            <tr className="border-b">
              <th className="py-3 px-2">No.</th>
              <th className="py-3 px-2">Todo</th>
              <th className="py-3 px-2">Deadline</th>
              <th className="py-3 px-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {todos?.length === 0 && (
              <tr>
                <td colSpan={4} className="py-3 px-2 text-center">
                  No data
                </td>
              </tr>
            )}
            {todos?.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="py-3 px-2">{index + 1}</td>
                <td className="py-3 px-2">{item.todo}</td>
                <td className="py-3 px-2">{item.todoDeadline}</td>
                <td className="py-3 px-2">
                  <DeleteButton id={String(item._id)} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
