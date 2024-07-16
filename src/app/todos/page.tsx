import Table from "@/app/todos/components/Table";

export default function Page() {
  return (
    <div className="flex flex-col w-full px-10 h-screen">
      <h1 className=" text-4xl font-bold mt-12 mb-12">To Do App</h1>
      <Table />
    </div>
  );
}
