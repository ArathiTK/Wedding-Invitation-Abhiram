import { NextRequest, NextResponse } from "next/server";
import { after } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, attendance } = data;

    if (!name || !attendance) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    console.log("RSVP Received:", {
      name,
      attendance,
      timestamp: new Date().toISOString(),
    });

    after(async () => {
      try {
        const res = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SHEET_URL!, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            name: data.name,
            guests: data.guestCount,
            attendance: data.attendance,
            targetTab: process.env.NEXT_PUBLIC_TARGET_TAB || "Abhiram",
          }),
        });
        if (!res.ok) {
          const err = await res.json().catch(() => ({}));
          throw new Error(err.message || "Google Sheet submission failed");
        }
      } catch (e) {
        console.error("RSVP background Google Sheet sync failed:", e);
      }
    });

    return NextResponse.json({ success: true, message: "RSVP received! Thank you." });
  } catch {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
