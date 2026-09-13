import { NextRequest, NextResponse, after } from "next/server";

const ATTENDANCE_CODES: Record<string, string> = {
  "Pre-Wedding, Wedding & Reception": "all-events",
  "Pre-Wedding & Wedding": "pre-wedding-wedding",
  "Wedding & Reception": "wedding-reception",
  "Pre-Wedding & Reception": "pre-wedding-reception",
  "Pre-Wedding Only": "pre-wedding-only",
  "Wedding Only": "wedding-only",
  "Reception Only": "reception-only",
  "Declined": "decline-all",
};

function resolveAttendanceLabel(selections: string[]): string {
  if (selections.includes("decline")) return "Declined";

  const hasPreWedding = selections.includes("preWeddingReception");
  const hasWedding = selections.includes("ceremony");
  const hasReception = selections.includes("reception");

  if (hasPreWedding && hasWedding && hasReception) return "Pre-Wedding, Wedding & Reception";
  if (hasPreWedding && hasWedding) return "Pre-Wedding & Wedding";
  if (hasWedding && hasReception) return "Wedding & Reception";
  if (hasPreWedding && hasReception) return "Pre-Wedding & Reception";
  if (hasPreWedding) return "Pre-Wedding Only";
  if (hasWedding) return "Wedding Only";
  if (hasReception) return "Reception Only";

  return "Declined";
}

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, guestCount, attendance } = data;

    if (!name || !Array.isArray(attendance) || attendance.length === 0) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const attendanceLabel = resolveAttendanceLabel(attendance);
    const attendanceCode = ATTENDANCE_CODES[attendanceLabel];

    const payload = {
      name,
      guests: attendanceLabel === "Declined" ? 0 : guestCount ?? 0,
      attendance: attendanceCode,
      targetTab: "ATHIRA",
      timestamp: new Date().toISOString(),
    };

    const sheetUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL;
    if (sheetUrl) {
      // Google Apps Script webhooks can take longer than typical serverless
      // function limits to respond, even though the write itself succeeds.
      // Don't block the user-facing response on it — record the RSVP after
      // the response has been sent, and only log if it truly fails.
      after(async () => {
        try {
          const sheetRes = await fetch(sheetUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
          });
          if (!sheetRes.ok) {
            console.error("Google Sheet submission failed:", sheetRes.status, await sheetRes.text().catch(() => ""));
          }
        } catch (e) {
          console.error("Google Sheet submission error:", e);
        }
      });
    } else {
      console.log("RSVP Received (no sheet URL configured):", payload);
    }

    return NextResponse.json({ success: true, message: "RSVP received! Thank you." });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
