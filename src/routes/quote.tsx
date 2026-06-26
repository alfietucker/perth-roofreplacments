import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Check, Phone } from "lucide-react";

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
    n: "01",
    title: "We'll call you",
    body: "Within one business day, one of our team will call to confirm your details and arrange a time that suits.",
  },
  {
    n: "02",
    title: "Free on-site inspection",
    body: "A qualified builder visits, assesses the roof in full, and answers any questions you have — no cost, no pressure.",
  },
  {
    n: "03",
    title: "Fixed-price quote",
    body: "You receive a detailed written quote, fully inclusive. What we quote is exactly what you pay.",
  },
];

const inputCls = "border border-border bg-background px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/25 focus:outline-none focus:border-teal transition-colors w-full";
const labelCls = "text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-foreground/45 mb-1.5 block";

function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setFirstName((data.get("name") as string)?.split(" ")[0] ?? "");
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/4da8256a-17ab-43d1-b4f7-178a0bfa1a4d", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!res.ok) throw new Error("submission failed");
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      alert("Something went wrong — please call us directly on (08) XXXX XXXX.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">

      {/* nav */}
      <header className="border-b border-border shrink-0">
        <div className="container-prose flex items-center justify-between h-16">
          <Link to="/" aria-label="Back to home">
            <div className="flex items-center gap-3">
              <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
                <path d="M4 20L18 7l14 13" stroke="currentColor" strokeWidth="2.5" className="text-teal" />
                <path d="M8 18v11h20V18" stroke="currentColor" strokeWidth="2.5" className="text-foreground" />
              </svg>
              <span className="font-display text-[1.05rem] font-semibold tracking-wide uppercase text-foreground">
                Perth<span className="text-teal">Roof</span>
              </span>
            </div>
          </Link>
          <a
            href="tel:YOUR_PHONE_NUMBER"
            className="hidden sm:flex items-center gap-2 text-[0.8rem] font-medium text-foreground/55 hover:text-teal transition-colors"
          >
            <Phone size={13} aria-hidden="true" /> (08) XXXX XXXX
          </a>
        </div>
      </header>

      <main className="flex-1">
        {submitted ? (

          /* ── Confirmation ───────────────────────────── */
          <div className="container-prose max-w-xl py-20 md:py-28 text-center">
            <div className="mx-auto w-14 h-14 bg-teal/10 flex items-center justify-center mb-8">
              <Check size={26} className="text-teal" strokeWidth={2.5} />
            </div>

            <h1 className="font-display uppercase font-semibold" style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", lineHeight: "1.05" }}>
              {firstName ? `Thanks, ${firstName}.` : "Request received."}
              <br />
              <span className="teal-italic">We'll be in touch.</span>
            </h1>

            <p className="mt-6 text-foreground/55 leading-[1.9] max-w-sm mx-auto">
              We'll call you within one business day to arrange your free inspection.
            </p>

            <div className="mt-16 text-left border-t border-border pt-12 space-y-10">
              {NEXT_STEPS.map((s) => (
                <div key={s.n} className="flex gap-7">
                  <span className="font-display text-[2rem] font-semibold text-teal/20 leading-none shrink-0 w-10">{s.n}</span>
                  <div>
                    <p className="font-display font-semibold uppercase tracking-wide text-foreground">{s.title}</p>
                    <p className="mt-1.5 text-sm text-foreground/55 leading-[1.85]">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 pt-10 border-t border-border">
              <a href="tel:YOUR_PHONE_NUMBER" className="btn-teal btn-teal-hover">
                <Phone size={13} className="mr-2" aria-hidden="true" /> (08) XXXX XXXX
              </a>
              <p className="mt-4 text-xs text-foreground/35">Prefer not to wait? Call us directly.</p>
            </div>
          </div>

        ) : (

          /* ── Form ───────────────────────────────────── */
          <div className="container-prose max-w-5xl py-14 md:py-20">
            <div className="grid lg:grid-cols-[1fr_1.45fr] gap-14 lg:gap-24 items-start">

              {/* left */}
              <div className="lg:sticky lg:top-20">
                <h1 className="font-display uppercase font-semibold" style={{ fontSize: "clamp(2rem, 3.6vw, 2.9rem)", lineHeight: "1.02" }}>
                  Book Your Free
                  <br />
                  <span className="teal-italic text-[1.08em]">Roof Inspection</span>
                </h1>
                <div className="mt-6 h-px w-10 bg-teal" aria-hidden="true" />
                <p className="mt-6 text-foreground/55 leading-[1.9] text-[0.95rem]">
                  Tell us about your roof and we'll arrange a free on-site inspection at a time that suits — no obligation, no cost.
                </p>

                <div className="mt-10 space-y-8">
                  {NEXT_STEPS.map((s) => (
                    <div key={s.n} className="flex gap-5">
                      <span className="font-display text-[1.6rem] font-semibold text-teal/25 leading-none shrink-0 w-8 pt-0.5">{s.n}</span>
                      <div>
                        <p className="font-display font-semibold uppercase tracking-wide text-foreground text-sm">{s.title}</p>
                        <p className="mt-1 text-xs text-foreground/45 leading-[1.85]">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* right — form */}
              <div>
                <form onSubmit={handleSubmit} noValidate aria-label="Book a free roof inspection" className="space-y-5">
                  <div>
                    <label htmlFor="q-name" className={labelCls}>Full Name *</label>
                    <input id="q-name" name="name" type="text" required autoComplete="name" placeholder="John Smith" className={inputCls} />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="q-phone" className={labelCls}>Phone *</label>
                      <input id="q-phone" name="phone" type="tel" required autoComplete="tel" placeholder="0400 000 000" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="q-suburb" className={labelCls}>Suburb *</label>
                      <input id="q-suburb" name="suburb" type="text" required autoComplete="address-level2" placeholder="Cottesloe" className={inputCls} />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="q-email" className={labelCls}>Email</label>
                    <input id="q-email" name="email" type="email" autoComplete="email" placeholder="john@example.com" className={inputCls} />
                  </div>

                  <div>
                    <label htmlFor="q-service" className={labelCls}>What do you need?</label>
                    <select id="q-service" name="service" className={`${inputCls} appearance-none`}>
                      <option value="">Select a service…</option>
                      <option>Replace Tiles with Colorbond</option>
                      <option>Replace Existing Colorbond</option>
                      <option>Replace Asbestos with Tiles</option>
                      <option>Replace Asbestos with Colorbond</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="q-message" className={labelCls}>Anything else?</label>
                    <textarea id="q-message" name="message" rows={3} placeholder="Roof size, urgency, access — anything helpful…" className={`${inputCls} resize-none`} />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-teal btn-teal-hover w-full py-4 text-[0.9rem] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {loading ? "Sending…" : (
                        <span className="flex items-center justify-center gap-2">
                          Book My Free Inspection <ArrowRight size={14} aria-hidden="true" />
                        </span>
                      )}
                    </button>
                    <p className="mt-3.5 text-center text-[0.68rem] text-foreground/30 tracking-[0.12em] uppercase">
                      No obligation · Fixed-price quote · Reply within 1 business day
                    </p>
                  </div>
                </form>
              </div>

            </div>
          </div>

        )}
      </main>
    </div>
  );
}
