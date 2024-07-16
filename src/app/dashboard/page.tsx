import { getData } from "@/app/dashboard/lib/data";

export default async function Page() {
  const data = await getData();
  return (
    <>
      <div>
        <h1>Dashboard: {data}</h1>
      </div>
    </>
  );
}
