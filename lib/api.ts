export interface RSVPData {
  name: string;
  guestCount: number;
  attendance: "ceremony" | "reception" | "both" | "decline" | "wedding-only" | "wedding-only-decline";
}

export async function submitRSVP(data: RSVPData): Promise<{ success: boolean; message: string }> {
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
    throw new Error(err.message || "Submission failed");
  }
  return res.json();
}
