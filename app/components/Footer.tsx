"use client";
import Image from "next/image";
import { WEDDING } from "@/lib/constants";

export default function Footer() {
  const whatsappMsg = encodeURIComponent("Hi! Reaching out regarding Abhiram & Athira's wedding.");
  return (
    <footer className="py-16 px-6" style={{ backgroundColor: "#3d2c1c" }}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center mb-10">
          <Image src="/assets/ornaments/divider.svg" alt="" width={280} height={20} className="opacity-25" />
        </div>
        <p className="italic text-[#c8a96e] text-xl mb-2" style={{ fontFamily: "var(--font-seasons)" }}>With Best Regards,</p>
        <p className="text-2xl text-[#faf7f2]/90" style={{ fontFamily: "var(--font-seasons)" }}>TK Shyam Sundar</p>
        <p className="text-2xl text-[#faf7f2]/90 mb-8" style={{ fontFamily: "var(--font-seasons)" }}>&amp; Vinni Pramod</p>
        <div className="w-16 h-px bg-[#c8a96e] opacity-30 mx-auto mb-8" />
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href={`tel:${WEDDING.footer.contact}`}
            className="inline-flex items-center gap-2 text-sm text-[#c8a96e] hover:text-[#e0c896] transition-colors">
            <svg width="13" height="13" fill="none" viewBox="0 0 16 16">
              <path d="M3 2h3l1.5 3.5L6 7a9 9 0 003 3l1.5-1.5L14 10v3c0 1-1 2-2 1.5C5 12 1 7.5 1.5 4 1 3 2 2 3 2z" stroke="currentColor" strokeWidth="1.2"/>
            </svg>
            {WEDDING.footer.contact}
          </a>
          <a href={`https://wa.me/${WEDDING.footer.whatsapp}?text=${whatsappMsg}`}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-[#c8a96e] hover:text-[#e0c896] transition-colors">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.845L0 24l6.336-1.504A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.595-.508-5.082-1.391L2.5 21.5l.92-4.297A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
        </div>
        <p className="italic text-[#c8a96e] text-lg mb-4" style={{ fontFamily: "var(--font-seasons)" }}>Abhiram TK &amp; Athira K</p>
        <p className="text-xs tracking-widest uppercase text-[#faf7f2]/30">06 – 07 November 2026 · Kerala</p>
        <div className="mt-10 pt-6 border-t border-white/5">
          <p className="text-xs text-[#faf7f2]/20">Made with love for a beautiful union</p>
        </div>
      </div>
    </footer>
  );
}
