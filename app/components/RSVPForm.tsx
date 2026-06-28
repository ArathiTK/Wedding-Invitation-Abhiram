"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { submitRSVP, type RSVPData } from "@/lib/api";
import { WEDDING } from "@/lib/constants";

const inputClass = "w-full px-4 py-3 bg-[#1f2519] border border-[#c9a876]/30 rounded text-[#f0e6da] text-sm placeholder:text-[#f0e6da]/30 focus:outline-none focus:border-[#c9a876] transition-colors";
const labelClass = "block heading-display text-xs text-[#c9a876] mb-2";

export default function RSVPForm() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const { register, handleSubmit, formState: { errors } } = useForm<RSVPData>();

  async function onSubmit(data: RSVPData) {
    setSubmitting(true); setError("");
    try { await submitRSVP(data); setSubmitted(true); }
    catch (e) { setError(e instanceof Error ? e.message : "Something went wrong."); }
    finally { setSubmitting(false); }
  }

  const whatsappMsg = encodeURIComponent("Hi! I'd like to RSVP for Abhiram TK & Athira K's wedding. My name is: ");

  if (submitted) {
    return (
      <section id="rsvp" className="bg-flip-y h-[100dvh] flex flex-col justify-center overflow-y-auto py-10 px-6" style={{ "--flip-bg": "url('/assets/bg.png')" } as React.CSSProperties}>
        <div className="max-w-3xl mx-auto w-full text-center">
          <div className="gold-border-card card-flip-y rounded-lg p-12" style={{ "--flip-bg": "url('/assets/bg.png')" } as React.CSSProperties}>
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-[#c9a876] flex items-center justify-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12l5 5L19 7" stroke="#c9a876" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-2xl heading-gold heading-display mb-3">Thank You!</h3>
            <p className="text-[#f0e6da]/60 text-sm leading-relaxed">Your RSVP has been received. We look forward to celebrating with you.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="bg-flip-y h-[100dvh] flex flex-col justify-center overflow-y-auto py-[clamp(1.5rem,5vh,2.5rem)] px-6" style={{ "--flip-bg": "url('/assets/bg.png')" } as React.CSSProperties}>
      <div className="max-w-3xl mx-auto w-full">
        <AnimateOnScroll>
          <p className="heading-display text-xs text-[#c9a876] text-center mb-[clamp(0.5rem,2vh,0.75rem)]">RSVP</p>
          <h2 className="heading-gold heading-display text-center mb-[clamp(0.5rem,2vh,0.75rem)]"
            style={{ fontSize: "clamp(1.25rem, 5vw, 1.75rem)", letterSpacing: "0.1em" }}>
            Will You Join Us?
          </h2>
          <p className="text-center text-[#f0e6da]/60 text-sm mb-[clamp(1rem,4vh,1.5rem)]">
            Please let us know by <strong className="text-[#f0e6da]/80">October 15, 2026</strong>
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="gold-border-card card-flip-y rounded-lg p-6 md:p-8 w-full" style={{ "--flip-bg": "url('/assets/bg.png')" } as React.CSSProperties}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-[clamp(0.75rem,3vh,1rem)]" noValidate>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" placeholder="Your name" className={inputClass}
                  {...register("name", { required: "Name is required" })} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Are You Attending? *</label>
                <div className="flex flex-col gap-2">
                  {[
                    { value: "both", label: "Wedding & Reception" },
                    { value: "ceremony", label: "Wedding Only" },
                    { value: "reception", label: "Reception Only" },
                    { value: "decline", label: "Regretfully Decline" },
                  ].map(({ value, label }) => (
                    <label key={value} className="flex items-center gap-3 text-[#f0e6da] text-sm cursor-pointer">
                      <input type="radio" value={value} className="accent-[#c9a876]"
                        {...register("attendance", { required: "Please select an option" })} />
                      {label}
                    </label>
                  ))}
                </div>
                {errors.attendance && <p className="text-red-400 text-xs mt-1">{errors.attendance.message}</p>}
              </div>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <div className="flex justify-center">
                <button type="submit" disabled={submitting}
                  className="px-8 py-2 bg-[#c9a876] text-[#2b2017] text-sm tracking-wide rounded-full font-semibold shadow-md hover:bg-[#dcc296] hover:shadow-lg transition-all duration-300 disabled:opacity-60">
                  {submitting ? "Sending..." : "Confirm"}
                </button>
              </div>
            </form>

            <div className="mt-[clamp(1rem,4vh,1.5rem)] pt-[clamp(1rem,4vh,1.5rem)] border-t border-[#c9a876]/20 text-center">
              <p className="text-xs text-[#f0e6da]/40 mb-3">Prefer to message directly?</p>
              <a href={`https://wa.me/${WEDDING.footer.whatsapp}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="relative flex items-center justify-center text-sm text-[#f0e6da]/70 hover:text-[#c9a876] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400 absolute" style={{ right: "calc(50% + 4.7em)" }}>
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.116 1.524 5.845L0 24l6.336-1.504A11.946 11.946 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.854 0-3.595-.508-5.082-1.391L2.5 21.5l.92-4.297A9.955 9.955 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                </svg>
                RSVP via WhatsApp
              </a>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
