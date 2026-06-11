import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-invitation-abhiram.vercel.app"),
  title: "Abhiram TK & Athira K — Wedding Invitation",
  description:
    "You are cordially invited to the wedding of Abhiram TK & Athira K. Ceremony on 06 November 2026 at Nova Auditorium Palazhi, Kozhikode. Reception on 07 November 2026 at Sreevalksam Auditorium, Payyanur.",
  openGraph: {
    title: "Abhiram TK & Athira K — Wedding Invitation",
    description: "Join us to celebrate the wedding of Abhiram TK & Athira K, November 2026.",
    type: "website",
    images: [{ url: "/assets/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abhiram TK & Athira K — Wedding Invitation",
    description: "Join us to celebrate the wedding of Abhiram TK & Athira K, November 2026.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable} h-full`}>
      <body className="min-h-full bg-[#faf7f2] text-[#3a3a3a] antialiased">
        {children}
      </body>
    </html>
  );
}
