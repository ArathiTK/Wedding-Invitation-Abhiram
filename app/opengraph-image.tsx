import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Abhiram TK & Athira K — Wedding Invitation";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function getFont() {
  return fetch(
    "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_qE6KnTOjw.ttf"
  ).then((res) => res.arrayBuffer());
}

export default async function Image() {
  const [bgData, andData, fontLight] = await Promise.all([
    readFile(join(process.cwd(), "public/assets/og-image 2.png")),
    readFile(join(process.cwd(), "public/assets/ornaments/and.png")),
    getFont(),
  ]);

  const bgSrc = `data:image/png;base64,${bgData.toString("base64")}`;
  const andSrc = `data:image/png;base64,${andData.toString("base64")}`;

  const nameStyle = {
    fontFamily: "Cormorant Garamond",
    fontWeight: 300,
    fontSize: 34,
    letterSpacing: "5px",
    textTransform: "uppercase" as const,
    color: "#fff9f3",
  };

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={bgSrc}
          width={1200}
          height={630}
          style={{ position: "absolute", top: 0, left: 0 }}
        />
        <div
          style={{
            position: "absolute",
            top: 165,
            left: 380,
            width: 440,
            height: 300,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.14)",
            border: "1px solid rgba(255,249,243,0.3)",
            borderRadius: 16,
          }}
        >
          <div style={nameStyle}>Athira K</div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={andSrc}
            width={100}
            height={56}
            style={{ filter: "brightness(0) invert(1)" }}
          />
          <div style={nameStyle}>Abhiram TK</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Cormorant Garamond", data: fontLight, style: "normal", weight: 300 }],
    }
  );
}
