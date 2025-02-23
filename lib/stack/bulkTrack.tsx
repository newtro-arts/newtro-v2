const API_URL = "https://track.stack.so/event";
const API_KEY = process.env.STACK_KEY as string;

export async function bulkTrack(events: any[]) {
  if (!Array.isArray(events) || events.length === 0) return;

  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("x-api-key", API_KEY);

  const response = await fetch(API_URL, {
    method: "POST",
    headers: headers,
    body: JSON.stringify(events.slice(0, 99)),
  });

  if (!response.ok) {
    console.error(response);
    throw new Error(`Failed to track events: ${response.statusText}`);
  }

  return response.json();
}
