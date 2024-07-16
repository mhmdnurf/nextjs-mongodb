import Forms from "@/app/todos/components/Forms";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="p-4">
        <Link
          href={"/todos"}
          className="bg-slate-500 p-2 text-white font-semibold rounded"
        >
          Back to Home
        </Link>
      </div>
      <Forms />
    </>
  );
}
