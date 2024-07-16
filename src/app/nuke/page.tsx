import { getNukeData } from "./lib/data";

export default async function Page() {
  const data = await getNukeData();
  const codes = data.codes;
  console.log(codes);
  codes.forEach((code: any) => {
    console.log(code);
  });
  return (
    <>
      <div>
        <h1>List</h1>
        <ul>
          {codes.map((item: any) => (
            <li key={item.id}>
              <p>
                <strong>Subtitle:</strong> {String(item.subtitle)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
