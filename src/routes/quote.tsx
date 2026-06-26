import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Phone, Star, Shield, Clock, FileText } from "lucide-react";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Get a Free Roof Inspection | Perth Roof Replacements" },
      {
        name: "description",
        content:
          "Book your free on-site roof inspection with Perth's registered roofing builders. Fixed-price quotes, no obligation, reply within one business day.",
      },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: QuotePage,
});

const NEXT_STEPS = [
  {
    icon: Phone,
    title: "We call you",
    body: "Within one business day, one of our team will call to confirm your details and find a time that suits.",
  },
  {
    icon: FileText,
    title: "Free on-site inspection",
    body: "A qualified builder visits your property, assesses the roof in full, and answers any questions you have.",
  },
  {
    icon: Check,
    title: "Fixed-price quote delivered",
    body: "You receive a detailed, fully-inclusive written quote. No hidden costs. No pressure to proceed.",
  },
];

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setName((form.elements.namedItem("name") as HTMLInputElement)?.value?.split(" ")[0] ?? "");
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 900);
  }

  return (
    <div className="min-h-screen bg-background">
      {/* slim nav */}
      <header className="border-b border-border bg-background">
        <div className="container-prose flex items-center justify-between h-16">
          <Link to="/" aria-label="Back to Perth Roof Replacements">
            <div className="flex items-center gap-3">
              <svg width="34" height="34" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <path d="M4 20L18 7l14 13" stroke="currentColor" strokeWidth="2.5" className="text-teal" />
                <path d="M8 18v11h20V18" stroke="currentColor" strokeWidth="2.5" className="text-foreground" />
              </svg>
              <div className="leading-none">
                <div className="font-display text-[1.1rem] font-semibold tracking-wide uppercase text-foreground">
                  Perth<span className="text-teal">Roof</span>
                </div>
              </div>
            </div>
          </Link>
          <a href="tel:YOUR_PHONE_NUMBER" className="hidden sm:flex items-center gap-2 text-[0.82rem] font-semibold text-foreground/70 hover:text-teal transition-colors">
            <Phone size={14} aria-hidden="true" /> (08) XXXX XXXX
          </a>
        </div>
      </header>

      {submitted ? (
        /* ── Confirmation ── */
        <div className="container-prose max-w-2xl py-20 md:py-28">
          <div className="text-center mb-14">
            <div className="mx-auto w-16 h-16 bg-teal/10 flex items-center justify-center mb-7">
              <Check size={30} className="text-teal" strokeWidth={2.5} />
            </div>
            <h1 className="font-display uppercase font-semibold text-foreground" style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: "1.05" }}>
              {name ? `Thanks, ${name}.` : "Request received."}
              <br />
              <span className="teal-italic text-[1.05em]">We'll be in touch.</span>
            </h1>
            <p className="mt-6 text-foreground/60 leading-[1.85] max-w-md mx-auto">
              Your request has been sent. One of our team will be in touch within one business day to lock in your free inspection.
            </p>
          </div>

          {/* next steps */}
          <div className="border-t border-border pt-12">
            <p className="eyebrow text-foreground/45 text-center mb-10">What happens next</p>
            <ol className="space-y-0 list-none p-0 m-0">
              {NEXT_STEPS.map((s, i) => (
                <li key={s.title} className="flex gap-6 pb-10 last:pb-0 relative">
                  {/* connector line */}
                  {i < NEXT_STEPS.length - 1 && (
                    <div className="absolute left-[19px] top-[44px] bottom-0 w-px bg-border" aria-hidden="true" />
                  )}
                  <div className="shrink-0 w-10 h-10 bg-teal/10 border border-teal/20 flex items-center justify-center z-10">
                    <s.icon size={17} className="text-teal" aria-hidden="true" />
                  </div>
                  <div className="pt-1.5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[0.62rem] font-bold tracking-[0.2em] uppercase text-teal/60">Step {i + 1}</span>
                    </div>
                    <h2 className="font-display font-semibold uppercase tracking-wide text-foreground">{s.title}</h2>
                    <p className="mt-2 text-foreground/60 leading-[1.85] text-sm">{s.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-14 pt-10 border-t border-border text-center">
            <p className="text-sm text-foreground/50 mb-5">Have questions in the meantime?</p>
            <a href="tel:YOUR_PHONE_NUMBER" className="btn-teal btn-teal-hover">
              <Phone size={14} className="mr-2" aria-hidden="true" /> Call (08) XXXX XXXX
            </a>
          </div>
        </div>
      ) : (
        /* ── Form ── */
        <div className="container-prose max-w-5xl py-14 md:py-20">
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-14 lg:gap-20 items-start">

            {/* left — closer copy */}
            <div className="lg:sticky lg:top-24">
              <p className="eyebrow text-foreground/45 mb-6">Free · No Obligation</p>
              <h1 className="font-display uppercase font-semibold text-foreground" style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.02" }}>
                Book Your
                <br />
                <span className="teal-italic text-[1.1em]">Free Roof Inspection</span>
              </h1>
              <div className="mt-7 h-px w-12 bg-teal" aria-hidden="true" />
              <p className="mt-7 text-foreground/60 leading-[1.85]">
                Fill in your details and we'll be in touch within one business day to arrange a free on-site inspection — at a time that suits you.
              </p>

              {/* micro trust */}
              <ul className="mt-8 space-y-3 list-none p-0 m-0">
                {[
                  { icon: Check, text: "Fixed-price quote — no surprise variations" },
                  { icon: Shield, text: "Registered builders · Licensed & insured" },
                  { icon: Clock, text: "Reply within one business day" },
                ].map((t) => (
                  <li key={t.text} className="flex items-center gap-3 text-sm text-foreground/65">
                    <t.icon size={14} className="text-teal shrink-0" aria-hidden="true" />
                    {t.text}
                  </li>
                ))}
              </ul>

              {/* social proof */}
              <div className="mt-10 pt-8 border-t border-border">
                <div className="flex items-center gap-2 mb-3">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
                  <span className="font-display font-bold text-foreground ml-1">5.0</span>
                  <span className="text-xs text-foreground/40">· 47 Google Reviews</span>
                </div>
                <blockquote className="text-sm text-foreground/55 leading-[1.8] italic border-l-2 border-teal/30 pl-4">
                  "The price they quoted was exactly what we paid — no nasty surprises."
                  <footer className="not-italic mt-1 text-foreground/35 text-xs">— James T., Applecross</footer>
                </blockquote>
              </div>
            </div>

            {/* right — form */}
            <div className="bg-soft border border-border p-8 md:p-10">

              {/* urgency nudge */}
              <div className="flex items-center gap-2.5 bg-teal/8 border border-teal/20 px-4 py-3 mb-8">
                <div className="w-2 h-2 rounded-full bg-teal animate-pulse shrink-0" aria-hidden="true" />
                <p className="text-xs text-foreground/70 font-medium">Now booking free inspections — limited slots available this month.</p>
              </div>

              <form onSubmit={handleSubmit} noValidate aria-label="Book a free roof inspection">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="q-name" className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Full Name *</label>
                    <input id="q-name" name="name" type="text" required autoComplete="name" placeholder="John Smith" className="border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="q-phone" className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Phone *</label>
                    <input id="q-phone" name="phone" type="tel" required autoComplete="tel" placeholder="0400 000 000" className="border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="q-suburb" className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Suburb *</label>
                    <input id="q-suburb" name="suburb" type="text" required autoComplete="address-level2" placeholder="Cottesloe" className="border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="q-service" className="text-xs font-semibold uppercase tracking-widest text-foreground/50">What do you need?</label>
                    <select id="q-service" name="service" className="border border-border bg-background px-4 py-3.5 text-sm text-foreground focus:outline-none focus:border-teal transition-colors appearance-none">
                      <option value="">Select service…</option>
                      <option>Replace Tiles with Colorbond</option>
                      <option>Replace Existing Colorbond</option>
                      <option>Replace Asbestos with Tiles</option>
                      <option>Replace Asbestos with Colorbond</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="q-message" className="text-xs font-semibold uppercase tracking-widest text-foreground/50">Anything else we should know?</label>
                    <textarea id="q-message" name="message" rows={3} placeholder="e.g. roof size, urgency, access notes…" className="border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-teal transition-colors resize-none" />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-teal btn-teal-hover w-full mt-7 text-base py-4 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? "Sending…" : (
                    <span className="flex items-center justify-center gap-2">
                      Book My Free Inspection <ArrowRight size={15} aria-hidden="true" />
                    </span>
                  )}
                </button>
                <p className="mt-4 text-center text-[0.7rem] text-foreground/35 tracking-wide">No obligation · No pushy sales · 100% free</p>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
