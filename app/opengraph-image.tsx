import { join } from "node:path";
import { readFile } from "node:fs/promises";

export const alt = "Athira K & Abhiram TK — Wedding Invitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const data = await readFile(
    join(process.cwd(), "public", "assets", "og-image _Athira2.png")
  );

  return new Response(new Uint8Array(data), {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=3600, must-revalidate",
    },
  });
}
