"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AnimateOnScroll from "./ui/AnimateOnScroll";
import { submitRSVP, type RSVPData } from "@/lib/api";
import { WEDDING } from "@/lib/constants";

const inputClass = "w-full px-4 py-3 bg-[#f8f2e7] border border-[#c8a96e]/30 rounded text-[#4a3826] text-sm placeholder:text-[#4a3826]/30 focus:outline-none focus:border-[#c8a96e] transition-colors";
const labelClass = "block text-xs tracking-widest uppercase text-[#c8a96e] mb-2";

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
      <section id="rsvp" className="py-20 px-6" style={{ backgroundColor: "#f8f2e7" }}>
        <div className="max-w-xl mx-auto text-center">
          <div className="gold-border-card rounded-lg p-12" style={{ backgroundColor: "#efe1cb" }}>
            <div className="flex justify-center mb-6">
              <div className="w-14 h-14 rounded-full border-2 border-[#c8a96e] flex items-center justify-center">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                  <path d="M5 12l5 5L19 7" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <h3 className="text-3xl heading-gold mb-3" style={{ fontFamily: "var(--font-seasons)" }}>Thank You!</h3>
            <p className="text-[#4a3826]/60 text-sm leading-relaxed">Your RSVP has been received. We look forward to celebrating with you.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="rsvp" className="py-20 px-6" style={{ backgroundColor: "#f8f2e7" }}>
      <div className="max-w-xl mx-auto">
        <AnimateOnScroll>
          <p className="text-xs tracking-[0.25em] uppercase text-[#c8a96e] text-center mb-3">RSVP</p>
          <h2 className="font-light heading-gold text-center mb-3"
            style={{ fontFamily: "var(--font-seasons)", fontSize: "clamp(2rem, 6vw, 3rem)" }}>
            Will You Join Us?
          </h2>
          <p className="text-center text-[#4a3826]/60 text-sm mb-10">
            Please let us know by <strong className="text-[#4a3826]/80">October 20, 2026</strong>
          </p>
        </AnimateOnScroll>

        <AnimateOnScroll delay={0.15}>
          <div className="gold-border-card rounded-lg p-8 md:p-10" style={{ backgroundColor: "#efe1cb" }}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
              <div>
                <label className={labelClass}>Full Name *</label>
                <input type="text" placeholder="Your name" className={inputClass}
                  {...register("name", { required: "Name is required" })} />
                {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Email Address *</label>
                <input type="email" placeholder="your@email.com" className={inputClass}
                  {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })} />
                {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>}
              </div>
              <div>
                <label className={labelClass}>Phone Number</label>
                <input type="tel" placeholder="+91 XXXXX XXXXX" className={inputClass} {...register("phone")} />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>Guests *</label>
                  <select className={inputClass} {...register("guests", { required: true, valueAsNumber: true })}>
                    {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Attending *</label>
                  <select className={inputClass} {...register("attendance", { required: true })}>
                    <option value="both">Both Events</option>
                    <option value="ceremony">Ceremony Only</option>
                    <option value="reception">Reception Only</option>
                  </select>
                </div>
              </div>
              <div>
                <label className={labelClass}>Dietary Preference</label>
                <select className={inputClass} {...register("dietary")}>
                  <option value="vegetarian">Vegetarian</option>
                  <option value="non-vegetarian">Non-Vegetarian</option>
                  <option value="vegan">Vegan</option>
                  <option value="jain">Jain</option>
                  <option value="no-preference">No Preference</option>
                </select>
              </div>
              <div>
                <label className={labelClass}>Special Requirements</label>
                <textarea rows={3} placeholder="Accessibility needs or other requirements..."
                  className={`${inputClass} resize-none`} {...register("requirements")} />
              </div>
              {error && <p className="text-red-400 text-sm text-center">{error}</p>}
              <button type="submit" disabled={submitting}
                className="w-full py-4 bg-[#c8a96e] text-[#4a3826] text-sm tracking-widest uppercase rounded font-medium hover:bg-[#e0c896] transition-colors duration-300 disabled:opacity-60">
                {submitting ? "Sending..." : "Confirm Attendance"}
              </button>
            </form>

            <div className="mt-6 pt-6 border-t border-[#c8a96e]/20 text-center">
              <p className="text-xs text-[#4a3826]/40 mb-3">Prefer to message directly?</p>
              <a href={`https://wa.me/${WEDDING.footer.whatsapp}?text=${whatsappMsg}`}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-[#4a3826]/70 hover:text-[#c8a96e] transition-colors">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-green-400">
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
