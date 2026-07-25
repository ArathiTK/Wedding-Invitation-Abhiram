import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://wedding-invitation-abhiram.vercel.app"),
  title: process.env.NEXT_PUBLIC_SITE_TITLE || "Abhiram TK & Athira K — Wedding Invitation",
  description:
    "Join us to celebrate the wedding of Abhiram TK & Athira K",
  openGraph: {
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "Abhiram TK & Athira K — Wedding Invitation",
    description: "Join us to celebrate the wedding of Abhiram TK & Athira K.",
    type: "website",
    images: [{ url: "/assets/og-image.png?v=2", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: process.env.NEXT_PUBLIC_SITE_TITLE || "Abhiram TK & Athira K — Wedding Invitation",
    description: "Join us to celebrate the wedding of Abhiram TK & Athira K.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} h-full`}>
      <body className="min-h-full antialiased" style={{ backgroundColor: "#1f2519" }}>
        {/* Mobile-width container — centred on desktop, full-width on mobile */}
        <div
          className="relative mx-auto overflow-x-hidden w-full md:max-w-[430px]"
          style={{ minHeight: "100svh", backgroundColor: "#1f2519" }}
        >
          {children}
        </div>
      </body>
    </html>
  );
}
