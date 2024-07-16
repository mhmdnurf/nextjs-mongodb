export async function getData() {
  const status = false;

  if (status) {
    return "Data";
  } else {
    throw new Error("Failed to fetch data");
  }
}
