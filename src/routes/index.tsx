import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Star,
} from "lucide-react";

import heroImg from "@/assets/hero-roof.jpg";
import teamImg from "@/assets/team-member.jpg";
import classicImg from "@/assets/style-classic.jpg";
import modernImg from "@/assets/style-modern.jpg";
import premiumImg from "@/assets/style-premium.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ironbark Roofing | Registered Roofing Builders SA" },
      {
        name: "description",
        content:
          "Premium roof replacements across Adelaide. Registered builders delivering Colorbond, tile and asbestos roof replacements with full council approval — fixed price, no surprises.",
      },
    ],
  }),
  component: HomePage,
});

const NAV_LINKS = [
  { label: "Roof Replacements", href: "#replacements" },
  { label: "Our Work", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Book Free Inspection", href: "/quote" },
];

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo({ light = false }: { light?: boolean }) {
  const textClass = light ? "text-white" : "text-foreground";
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Ironbark Roofing — Home">
      <svg width="42" height="42" viewBox="0 0 36 36" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 20L18 7l14 13" stroke="currentColor" strokeWidth="2.5" className="text-teal" />
        <path d="M8 18v11h20V18" stroke="currentColor" strokeWidth="2.5" className={textClass} />
      </svg>
      <div className={`leading-none ${textClass}`}>
        <div className="font-display text-[1.2rem] font-semibold tracking-wide uppercase">
          Iron<span className="text-teal">bark</span>
        </div>
        <div className="text-[0.62rem] font-semibold tracking-[0.26em] opacity-70 mt-1 uppercase">
          Roofing Co.
        </div>
      </div>
    </a>
  );
}

// ─── Header ──────────────────────────────────────────────────────────────────

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      role="banner"
      className={`fixed top-0 inset-x-0 z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-[0_1px_0_rgba(32,55,70,0.06),0_10px_30px_-18px_rgba(32,55,70,0.22)]" : ""
      }`}
    >
      {/* slim utility strip — collapses on scroll */}
      <div
        className={`hidden md:block bg-navy text-white/70 overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container-prose flex items-center justify-between h-9 text-[0.72rem] tracking-wide">
          <div className="flex items-center gap-2">
            <MapPin size={12} className="text-teal" aria-hidden="true" />
            <span>Servicing all Adelaide metro suburbs</span>
          </div>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <span className="flex gap-px" aria-hidden="true">
                {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
              </span>
              <span className="text-white/55">5.0 · 47 Google reviews</span>
            </span>
            <span className="h-3 w-px bg-white/15" aria-hidden="true" />
            <span className="text-white/55">Registered Builder SA · BRN XXXXXXX</span>
          </div>
        </div>
      </div>

      {/* main bar */}
      <div
        className={`bg-background/85 backdrop-blur-md border-b transition-colors duration-300 ${
          scrolled ? "border-border" : "border-transparent"
        }`}
      >
        <div className={`container-prose flex items-center justify-between transition-all duration-300 ${scrolled ? "h-[68px]" : "h-[80px]"}`}>
          <Logo />
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.slice(0, -1).map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative text-[0.8rem] font-medium tracking-wide text-foreground/80 hover:text-foreground transition-colors py-1"
              >
                {n.label}
                <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-teal transition-all duration-300 group-hover:w-full" aria-hidden="true" />
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a
              href="tel:YOUR_PHONE_NUMBER"
              className="hidden md:inline-flex items-center gap-2.5 group"
              aria-label="Call us on (08) XXXX XXXX"
            >
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-border text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all duration-200">
                <Phone size={14} aria-hidden="true" />
              </span>
              <span className="leading-tight">
                <span className="block text-[0.6rem] uppercase tracking-[0.18em] text-foreground/40 font-medium">Call us</span>
                <span className="block text-[0.85rem] font-semibold text-foreground group-hover:text-teal transition-colors">(08) XXXX XXXX</span>
              </span>
            </a>
            <span className="hidden lg:block h-8 w-px bg-border" aria-hidden="true" />
            <a href="/quote" className="hidden sm:inline-flex btn-teal btn-teal-hover">Book Free Inspection</a>
            <button className="lg:hidden p-2 -mr-2 text-foreground" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu">
              {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* mobile menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`lg:hidden bg-background border-b border-border overflow-hidden transition-all duration-300 ${
          open ? "max-h-[26rem] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-prose py-3 flex flex-col">
          {NAV_LINKS.slice(0, -1).map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="flex items-center justify-between py-3.5 text-sm font-medium border-b border-border/70 text-foreground/85 hover:text-teal transition-colors"
            >
              {n.label}
              <ChevronRight size={15} className="text-foreground/25" aria-hidden="true" />
            </a>
          ))}
          <div className="flex flex-col gap-3 pt-4 pb-2">
            <a href="/quote" onClick={() => setOpen(false)} className="btn-teal btn-teal-hover w-full">Book Free Inspection</a>
            <a href="tel:YOUR_PHONE_NUMBER" className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-foreground/75 border border-border rounded hover:text-teal hover:border-teal transition-colors">
              <Phone size={14} aria-hidden="true" /> (08) XXXX XXXX
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" aria-label="Ironbark Roofing — Registered Builders" className="relative min-h-[700px] md:min-h-[720px] lg:min-h-[760px] overflow-hidden bg-navy">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroImg} alt="Premium Colorbond roof replacement installed on a Adelaide home by registered builders" className="w-full h-full object-cover hero-zoom" width={1920} height={1280} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,28,38,0.86)_0%,rgba(12,28,38,0.70)_45%,rgba(12,28,38,0.35)_100%)]" />
      </div>
      <div className="relative min-h-[700px] md:min-h-[720px] lg:min-h-[760px] flex items-center">
        <div className="w-full" style={{ paddingLeft: "max(8%, 1.5rem)", paddingRight: "1.5rem" }}>
          <div className="max-w-[700px] text-white reveal">
            <h1 className="font-display uppercase font-semibold text-white" style={{ fontSize: "clamp(2.7rem, 6.2vw, 4.6rem)", lineHeight: "0.94", letterSpacing: "-0.01em" }}>
              Your Roof Replaced.
              <br />
              <span className="teal-italic text-[1.04em]">Done Once. Done Right.</span>
            </h1>
            <p className="mt-7 text-base sm:text-lg text-white/80 max-w-[520px] leading-relaxed">
              Adelaide's registered roofing builders — we handle every permit, every trade, and every council approval. One fixed price. No surprises. Guaranteed.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="/quote" className="btn-teal btn-teal-hover">
                Book My Free Roof Inspection <ArrowRight size={14} className="ml-2" aria-hidden="true" />
              </a>
              <a href="tel:YOUR_PHONE_NUMBER" className="btn-outline-light" aria-label="Call us on (08) XXXX XXXX">
                <Phone size={14} className="mr-2" aria-hidden="true" /> Prefer to call? We're here.
              </a>
            </div>
            <div className="mt-9 flex items-center gap-3 text-white/70">
              <div className="flex gap-0.5" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={15} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
              </div>
              <span className="text-[0.82rem]">
                <span className="font-semibold text-white">5.0</span> from 47 Google reviews · Registered Builder SA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem / Agitation ─────────────────────────────────────────────────────

function Problem() {
  return (
    <section aria-labelledby="problem-heading" className="bg-navy text-white py-16 md:py-20">
      <div className="container-prose max-w-4xl text-center">
        <h2 id="problem-heading" className="font-display uppercase font-semibold text-white" style={{ fontSize: "clamp(1.7rem, 3.4vw, 2.6rem)", lineHeight: "1.08" }}>
          Most Adelaide Homeowners Don't Know
          <br />
          <span className="teal-italic text-[1.08em]">What They're Really Signing Up For</span>
        </h2>
        <p className="mt-8 text-white/65 leading-[1.9] text-[1.02rem] max-w-2xl mx-auto">
          You get a quote. Sounds reasonable. Then the variations roll in — unexpected costs, a crew that disappears, council letters because the permits weren't lodged properly. Most roofing contractors in Adelaide aren't registered builders. They can't legally handle permits or compliance. When things go wrong, it's your home, your liability.
        </p>
      </div>
    </section>
  );
}

// ─── Intro ────────────────────────────────────────────────────────────────────

function Intro() {
  return (
    <section id="replacements" aria-labelledby="intro-heading" className="section-pad bg-background">
      <div className="container-prose text-center">
        <div className="mx-auto h-px w-12 bg-teal mb-8" aria-hidden="true" />
        <p className="eyebrow text-foreground/55">Adelaide's Registered Roof Replacement Specialists</p>
        <h2 id="intro-heading" className="mt-6 mx-auto font-display uppercase font-semibold" style={{ maxWidth: "720px", fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
          Fixed Price. <span className="teal-italic text-[1.1em]">Council Approved.</span> Done in{" "}
          <span className="teal-italic text-[1.1em]">Days.</span>
        </h2>
        <p className="mt-8 mx-auto text-foreground/65 leading-[1.85] text-[1.02rem]" style={{ maxWidth: "780px" }}>
          A roof replacement is one of the biggest investments you'll make in your home. You need someone who won't cut corners, won't hit you with variations, and won't leave you to deal with council on your own. As registered builders, we manage every trade, every permit, and every inspection — so the job is done once, done right, and done to code.
        </p>
        <div className="mt-10">
          <a href="/quote" className="btn-teal btn-teal-hover">Book My Free Roof Inspection</a>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────

function ServiceIcon({ d, title }: { d: string; title: string }) {
  return (
    <svg viewBox="0 0 64 64" className="w-14 h-14 text-foreground" fill="none" stroke="currentColor" strokeWidth="1.4" aria-hidden="true" focusable="false" role="img">
      <title>{title}</title>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICE_ITEMS = [
  {
    title: "Replace Tiles With Colorbond",
    outcome: "Lighter load. Decades of protection.",
    description: "Professional replacement of existing terracotta or concrete roof tiles with premium Colorbond steel roofing in Adelaide.",
    icon: "M8 30L32 14l24 16M14 30v20h36V30M14 38h36M14 44h36",
  },
  {
    title: "Replace Existing Colorbond",
    outcome: "Stronger. Quieter. Better looking.",
    description: "Upgrade worn or damaged Colorbond roofing with new premium Colorbond steel — stronger, longer-lasting finish.",
    icon: "M6 26h52M10 26v24h44V26M10 34h44M10 42h44M10 50h44",
  },
  {
    title: "Replace Asbestos With Tiles",
    outcome: "Safe removal. Peace of mind restored.",
    description: "Safe licensed asbestos roof removal and replacement with quality concrete or terracotta tiles across Adelaide.",
    icon: "M10 28h44l-6-10H16zM14 28v22h36V28M18 32l4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4",
  },
  {
    title: "Replace Asbestos With Colorbond",
    outcome: "Modern, durable, and fully compliant.",
    description: "Safe licensed asbestos roof removal and replacement with durable Colorbond steel roofing for Adelaide homes.",
    icon: "M10 28h44l-6-10H16zM14 28v22h36V28M14 34h36M14 40h36M14 46h36",
  },
];

function Services() {
  return (
    <section id="services" aria-label="Our roof replacement services" className="section-pad bg-soft">
      <div className="container-prose">
        <div className="text-center mb-14">
          <p className="eyebrow text-foreground/55">What We Do</p>
          <h2 className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
            Every Type of <span className="teal-italic text-[1.1em]">Roof Replacement</span>
          </h2>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0" role="list">
          {SERVICE_ITEMS.map((s) => (
            <li key={s.title} className="group bg-background p-8 flex flex-col items-center text-center border border-border/60 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_40px_-22px_rgba(32,55,70,0.28)] hover:border-teal/50">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-105">
                <ServiceIcon d={s.icon} title={s.title} />
              </div>
              <h3 className="text-[0.82rem] tracking-[0.16em] uppercase font-semibold leading-snug font-display">{s.title}</h3>
              <p className="mt-3 text-teal font-semibold text-[0.82rem] leading-snug">{s.outcome}</p>
              <p className="sr-only">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Trust ────────────────────────────────────────────────────────────────────

const TRUST_BLOCKS = [
  {
    title: "Done Once, Done Right",
    body: "A botched roof job is one of the most expensive mistakes a homeowner can make — and one of the hardest to fix. As registered builders, we coordinate every trade from start to finish, ensuring your replacement meets code, handles Adelaide's climate, and doesn't need touching again for decades.",
  },
  {
    title: "What We Quote Is What You Pay",
    body: "We've heard the stories — quotes that looked reasonable, then doubled by the time the last sheet was laid. That won't happen here. Every quote we give is based on a thorough on-site inspection and covers everything. No line items added later. No variations. No excuses.",
  },
  {
    title: "Guaranteed Follow-Through",
    body: "Our accountability doesn't end when the crew packs up. We back our workmanship with a guarantee, and if anything isn't right after the job is done, we come back and fix it. That's what it means to stand behind your work — not just on the day, but for the long term.",
  },
  {
    title: "We Handle the Paperwork",
    body: "Permits. Council submissions. Engineering sign-offs. Compliance certificates. Most homeowners have no idea how much red tape comes with a roof replacement — and most roofers leave it to you to figure out. We handle it all as standard. You don't make a single call to council.",
  },
];

function Trust() {
  return (
    <section id="about" aria-labelledby="trust-heading" className="section-pad bg-background">
      <div className="container-prose grid lg:grid-cols-[0.9fr_1.3fr] gap-16 lg:gap-24">
        <div>
          <p className="eyebrow text-foreground/55 block mb-7">Why Choose Us</p>
          <h2 id="trust-heading" className="font-display uppercase font-semibold" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: "1.02" }}>
            The Only
            <br />
            Roofer You
            <br />
            <span className="teal-italic text-[1.05em]">Need</span>
          </h2>
          <div className="mt-8 h-px w-14 bg-teal" aria-hidden="true" />
          <p className="mt-7 text-foreground/65 leading-[1.85] max-w-sm">
            Most roofing contractors can't legally handle council permits or sign off on compliance. As registered builders, we can — and we do, on every single job.
          </p>
          <div className="mt-8 space-y-2.5">
            {[
              "Registered Builder · BRN XXXXXXX",
              "ABN XX XXX XXX XXX",
              "Member · Master Builders SA",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3 text-sm text-foreground/60">
                <div className="h-px w-5 bg-teal shrink-0" aria-hidden="true" />
                {line}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:border-l lg:border-border lg:pl-16">
          <ul className="space-y-10 list-none p-0 m-0" aria-label="Why choose Ironbark Roofing">
            {TRUST_BLOCKS.map((b) => (
              <li key={b.title}>
                <div className="flex items-center gap-3">
                  <span className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full bg-teal/15 text-teal" aria-hidden="true">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                  <h3 className="font-display text-lg md:text-xl font-semibold uppercase tracking-wide">{b.title}</h3>
                </div>
                <p className="mt-3 text-foreground/65 leading-[1.85]">{b.body}</p>
              </li>
            ))}
          </ul>
          <a href="/quote" className="btn-teal btn-teal-hover mt-12">Get My Fixed-Price Quote</a>
        </div>
      </div>
    </section>
  );
}

// ─── Photo Gallery ────────────────────────────────────────────────────────────

const GALLERY_IMAGES = [
  { src: heroImg, alt: "Aerial view of completed Colorbond roof replacement on a Adelaide home", caption: "Colorbond Replacement — Golden Grove" },
  { src: classicImg, alt: "Classic terracotta tile roof on a brick Adelaide home after replacement", caption: "Tile Roof — Glenelg" },
  { src: modernImg, alt: "Modern dark standing-seam Colorbond roof on a contemporary Adelaide home", caption: "Modern Colorbond — Unley" },
  { src: premiumImg, alt: "Premium Colorbond roof on a two-storey Adelaide home at dusk", caption: "Premium Colorbond — Toorak Gardens" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section-pad bg-soft">
      <div className="container-prose">
        <div className="text-center mb-14">
          <p className="eyebrow text-foreground/55">Our Work</p>
          <h2 id="gallery-heading" className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
            Adelaide Roofs <span className="teal-italic text-[1.1em]">We're Proud Of</span>
          </h2>
          <p className="mt-5 mx-auto text-foreground/60 leading-[1.85]" style={{ maxWidth: "580px" }}>
            Every job is a reflection of our standards. Here's a sample of recent roof replacements
            completed across the Adelaide metro area.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 list-none p-0 m-0" role="list">
          {GALLERY_IMAGES.map((img, idx) => (
            <li key={img.alt}>
              <button
                onClick={() => setActive(idx)}
                className="group relative w-full overflow-hidden bg-navy block"
                style={{ aspectRatio: "4/3" }}
                aria-label={`View larger: ${img.caption}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(12,28,38,0.75)_0%,transparent_55%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-display font-semibold uppercase tracking-wide text-sm">{img.caption}</p>
                </div>
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <a href="/quote" className="btn-teal btn-teal-hover">See What Your Roof Replacement Costs</a>
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY_IMAGES[active].caption}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close image"
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors"
          >
            <X size={28} />
          </button>
          <img
            src={GALLERY_IMAGES[active].src}
            alt={GALLERY_IMAGES[active].alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-display text-sm uppercase tracking-widest">
            {GALLERY_IMAGES[active].caption}
          </p>
        </div>
      )}
    </section>
  );
}

// ─── Reviews ──────────────────────────────────────────────────────────────────

const REVIEWS = [
  { name: "Sarah M.", suburb: "Glenelg", rating: 5, text: "Ironbark Roofing did an outstanding job replacing our old asbestos roof with Colorbond. The team was professional, punctual, and handled all the council approvals without us having to lift a finger. Highly recommend.", date: "2 months ago" },
  { name: "James T.", suburb: "Unley", rating: 5, text: "From the first quote to the final inspection, the process was seamless. The price they quoted was exactly what we paid — no nasty surprises. The new Colorbond roof looks incredible and was done in just two days.", date: "3 months ago" },
  { name: "Linda K.", suburb: "Norwood", rating: 5, text: "We replaced our old terracotta tiles with Colorbond and couldn't be happier. The crew was tidy, respectful of our property, and the finish is perfect. Genuine registered builders who know what they're doing.", date: "4 months ago" },
  { name: "Mark B.", suburb: "Semaphore", rating: 5, text: "Had them replace an asbestos roof — the peace of mind from having a registered builder handle the compliance side was worth every cent. Professional from start to finish. Would use again without hesitation.", date: "1 month ago" },
  { name: "Rachel P.", suburb: "Prospect", rating: 5, text: "Excellent communication throughout. They came out, gave us a thorough quote, explained everything clearly, and delivered exactly what they promised. The new roof has completely transformed the look of our home.", date: "5 months ago" },
  { name: "David H.", suburb: "Burnside", rating: 5, text: "Five stars doesn't feel like enough. Replaced our entire tile roof — the team worked efficiently, cleaned up after themselves each day, and the end result is flawless. Real tradespeople who take pride in their craft.", date: "6 months ago" },
];

const GOOGLE_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" aria-hidden="true">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

function Reviews() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const totalCards = REVIEWS.length;

  const scrollToCard = (idx: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    if (cards[idx]) {
      track.scrollTo({ left: cards[idx].offsetLeft - track.offsetLeft, behavior: "smooth" });
    }
    setCurrent(idx);
  };

  const scroll = (dir: "left" | "right") => {
    const next = dir === "right"
      ? (current + 1) % totalCards
      : (current - 1 + totalCards) % totalCards;
    scrollToCard(next);
  };

  // Auto-advance every 5 seconds, pause on hover
  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => {
      setCurrent((c) => {
        const next = (c + 1) % totalCards;
        scrollToCard(next);
        return next;
      });
    }, 5000);
    return () => clearInterval(id);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused, current]);

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="section-pad bg-background">

      {/* header */}
      <div className="container-prose text-center mb-12">
        <p className="eyebrow text-foreground/55">Customer Reviews</p>
        <h2 id="reviews-heading" className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
          500+ Adelaide Homeowners <span className="teal-italic text-[1.1em]">Have Made the Switch</span>
        </h2>
        <div className="mt-8 inline-flex items-center gap-3 border border-border bg-soft px-5 py-3.5">
          {GOOGLE_ICON}
          <div className="text-left">
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-lg leading-none text-foreground">5.0</span>
              <div className="flex gap-px" aria-label="5 out of 5 stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />)}
              </div>
            </div>
            <p className="text-[0.68rem] text-foreground/40 tracking-wider uppercase mt-0.5">47 Google Reviews</p>
          </div>
        </div>
      </div>

      {/* carousel track */}
      <div
        ref={trackRef}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-[max(calc((100vw-1200px)/2+1.5rem),1.5rem)]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="list"
        aria-label="Customer reviews"
      >
        {REVIEWS.map((r, idx) => (
          <article
            key={r.name}
            data-card
            className="snap-start shrink-0 w-[82vw] sm:w-72 md:w-80 lg:w-[360px] bg-white rounded-2xl p-7 flex flex-col shadow-[0_4px_24px_-8px_rgba(32,55,70,0.12)] border border-border/40"
            role="listitem"
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
            aria-label={`Review by ${r.name} from ${r.suburb}`}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <div className="opacity-25">{GOOGLE_ICON}</div>
            </div>

            <p className="text-foreground/70 leading-[1.9] text-[0.88rem] flex-1" itemProp="reviewBody">
              "{r.text}"
            </p>

            <div className="mt-6 pt-5 border-t border-border/50" itemProp="author" itemScope itemType="https://schema.org/Person">
              <p className="font-display font-semibold uppercase tracking-[0.12em] text-foreground text-[0.75rem]" itemProp="name">{r.name}</p>
              <p className="text-foreground/35 text-[0.68rem] mt-0.5">{r.suburb}, SA · <time>{r.date}</time></p>
            </div>
          </article>
        ))}
        {/* right padding sentinel */}
        <div className="shrink-0 w-4 sm:w-6 lg:w-[max(calc((100vw-1200px)/2+1.5rem),1.5rem)]" aria-hidden="true" />
      </div>

      {/* dot pagination + controls */}
      <div className="container-prose mt-8 flex flex-col sm:flex-row gap-6 items-center sm:justify-between">
        <a href="/quote" className="btn-teal btn-teal-hover">Book My Free Roof Inspection</a>
        <div className="flex items-center gap-4">
          <div className="flex gap-2" role="tablist" aria-label="Review pages">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to review ${i + 1}`}
                onClick={() => scrollToCard(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${i === current ? "bg-teal w-5" : "bg-foreground/20 hover:bg-foreground/40"}`}
              />
            ))}
          </div>
          <div className="flex gap-2" role="group" aria-label="Scroll reviews">
            <button
              onClick={() => scroll("left")}
              aria-label="Previous review"
              className="w-10 h-10 border border-border flex items-center justify-center text-foreground/40 hover:text-teal hover:border-teal transition-colors"
            >
              <ChevronLeft size={17} aria-hidden="true" />
            </button>
            <button
              onClick={() => scroll("right")}
              aria-label="Next review"
              className="w-10 h-10 border border-border flex items-center justify-center text-foreground/40 hover:text-teal hover:border-teal transition-colors"
            >
              <ChevronRight size={17} aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── How It Works (Process) ───────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    n: "01",
    title: "Free On-Site Inspection",
    body: "We come to you. A qualified builder assesses your roof in full, identifies any issues, and answers every question you have — no cost, no obligation.",
  },
  {
    n: "02",
    title: "Fixed-Price Quote",
    body: "You receive a detailed written quote covering all labour, materials, and compliance. What we quote is exactly what you pay — in writing, before a single tile is touched.",
  },
  {
    n: "03",
    title: "We Handle Everything",
    body: "Permits. Council submissions. Engineering. Trades. We coordinate the entire job from start to finish. You don't chase anyone, and you never call council.",
  },
  {
    n: "04",
    title: "Your New Roof — Done",
    body: "Most replacements are complete within 1–3 days. Once we're finished you'll have a fully compliant, guaranteed roof — and we'll still pick up the phone if you ever need us.",
  },
];

function Process() {
  return (
    <section id="how" aria-labelledby="process-heading" className="section-pad bg-soft">
      <div className="container-prose grid lg:grid-cols-[0.85fr_1.3fr] gap-16 lg:gap-24">
        {/* left — heading */}
        <div className="lg:sticky lg:top-28 self-start">
          <p className="eyebrow text-foreground/55 block mb-7">How It Works</p>
          <h2 id="process-heading" className="font-display uppercase font-semibold" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: "1.02" }}>
            Simple.
            <br />
            Transparent.
            <br />
            <span className="teal-italic text-[1.05em]">Done Properly.</span>
          </h2>
          <div className="mt-8 h-px w-14 bg-teal" aria-hidden="true" />
          <p className="mt-7 text-foreground/65 leading-[1.85] max-w-sm">
            From your first call to your final roof — here's exactly what happens when you work with us. No guesswork, no chasing, no surprises.
          </p>
          <a href="/quote" className="btn-teal btn-teal-hover mt-9">Start With a Free Inspection</a>
        </div>

        {/* right — editorial numbered steps */}
        <ol className="list-none p-0 m-0 lg:border-l lg:border-border lg:pl-16">
          {PROCESS_STEPS.map((s, idx) => (
            <li
              key={s.n}
              className={`grid grid-cols-[auto_1fr] gap-6 sm:gap-8 py-8 ${idx === 0 ? "pt-0" : ""} ${idx < PROCESS_STEPS.length - 1 ? "border-b border-border/70" : ""}`}
            >
              <span className="font-display text-[2.6rem] sm:text-[3.2rem] font-semibold text-teal/20 leading-none tabular-nums">{s.n}</span>
              <div className="pt-1">
                <h3 className="font-display font-semibold uppercase tracking-wide text-base md:text-lg">{s.title}</h3>
                <p className="mt-2.5 text-foreground/65 leading-[1.85] text-[0.95rem]">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

// ─── Approval / Credential ────────────────────────────────────────────────────

const PARTNER_BRANDS = [
  { name: "Master Builders Association SA", short: "Master Builders" },
  { name: "Zincalume® Steel", short: "Zincalume®" },
  { name: "Colorbond® Steel", short: "Colorbond®" },
  { name: "Stratco Building Products", short: "Stratco" },
];

function Approval() {
  return (
    <section aria-label="Accreditations and approved products" className="bg-background">
      <div className="container-prose">
        <div className="border-t border-b border-border/60 py-8">
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center list-none p-0 m-0" aria-label="Accreditations and approved products">
            {PARTNER_BRANDS.map((b) => (
              <li key={b.short} className="text-center">
                <span className="font-display font-semibold uppercase tracking-[0.18em] text-sm text-foreground/40 hover:text-foreground/80 transition-colors">{b.short}</span>
                <span className="sr-only"> — {b.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ─── Locals ───────────────────────────────────────────────────────────────────

function Locals() {
  return (
    <section id="repairs" aria-labelledby="locals-heading" className="bg-background">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="relative min-h-[460px] lg:min-h-[600px]">
          <img src={teamImg} alt="Ironbark Roofing team member — locally owned and operated roofing business in South Australia" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={1200} height={1400} />
        </div>
        <div className="bg-navy text-white p-10 md:p-16 lg:p-20 flex items-center">
          <div className="max-w-md">
            <p className="eyebrow text-teal">Locally Owned</p>
            <h2 id="locals-heading" className="mt-6 font-display uppercase font-semibold" style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.02" }}>
              We Know Adelaide.
              <br />
              <span className="teal-italic text-[1.1em]">Every Suburb. Every Roof.</span>
            </h2>
            <div className="mt-7 h-px w-14 bg-teal" aria-hidden="true" />
            <p className="mt-7 text-white/80 leading-[1.85]">
              Adelaide roofs deal with conditions you won't find anywhere else in Australia. Coastal salt air from Glenelg to Henley Beach. Fierce summer heat that warps and fades cheap materials. Heritage bluestone and sandstone villas in the eastern suburbs with non-standard council requirements. Reactive clay soils that shift and stress a roof's structure. Every suburb in Adelaide has its quirks — different council rules, different soil profiles, different neighbour clearances.
            </p>
            <p className="mt-5 text-white/80 leading-[1.85]">
              We're a South Australian–owned business. Not a national chain, not a franchise. We've replaced roofs from Elizabeth to Noarlunga, from Gawler to Semaphore. When we quote your job, we're quoting it based on real knowledge of your home, your suburb, and your council — not a one-size-fits-all template.
            </p>
            <a href="/quote" className="btn-teal btn-teal-hover mt-9">Get My Fixed-Price Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Risk Reversal ────────────────────────────────────────────────────────────

const RISK_ITEMS = [
  { title: "Written Fixed-Price Quote", body: "Before any work begins, you receive a detailed written quote. That number doesn't change — no variations, no extras, no surprises." },
  { title: "Workmanship Guarantee", body: "We stand behind every roof we replace. If something isn't right, we come back and fix it. That guarantee is in writing." },
  { title: "Fully Licensed & Insured", body: "Registered Builder (BRN XXXXXXX), fully insured, SafeWork SA compliant. You're protected at every stage of the job." },
  { title: "Free Inspection — No Obligation", body: "We come to you, assess your roof, and answer every question. Walk away if it's not right for you — no pressure, no hard sell." },
];

function RiskReversal() {
  return (
    <section aria-labelledby="risk-heading" className="section-pad bg-navy text-white">
      <div className="container-prose grid lg:grid-cols-[0.9fr_1.3fr] gap-16 lg:gap-24">
        {/* left — heading */}
        <div>
          <p className="eyebrow text-teal block mb-7">Zero Risk to You</p>
          <h2 id="risk-heading" className="font-display uppercase font-semibold text-white" style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: "1.02" }}>
            Every
            <br />
            Guarantee —
            <br />
            <span className="teal-italic text-[1.05em]">In Writing</span>
          </h2>
          <div className="mt-8 h-px w-14 bg-teal" aria-hidden="true" />
          <p className="mt-7 text-white/70 leading-[1.85] max-w-sm">
            Handing a roofing job to someone new takes trust. So we put everything in writing, before we start — and we make saying no feel unnecessary.
          </p>
          <a href="/quote" className="btn-teal btn-teal-hover mt-9">
            Book My Free Inspection <ArrowRight size={14} className="ml-2" aria-hidden="true" />
          </a>
        </div>

        {/* right — editorial checklist */}
        <ul className="list-none p-0 m-0 lg:border-l lg:border-white/15 lg:pl-16">
          {RISK_ITEMS.map((item, idx) => (
            <li
              key={item.title}
              className={`py-7 ${idx === 0 ? "pt-0" : ""} ${idx < RISK_ITEMS.length - 1 ? "border-b border-white/10" : ""}`}
            >
              <div className="flex items-center gap-3">
                <span className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-teal/20 text-teal" aria-hidden="true">
                  <Check size={14} strokeWidth={2.5} />
                </span>
                <h3 className="font-display font-semibold uppercase tracking-wide text-base text-white">{item.title}</h3>
              </div>
              <p className="mt-3 pl-9 text-white/65 leading-[1.85] text-[0.92rem]">{item.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: "Do you handle council approval for roof replacements?", a: "Yes — and most roofing contractors in Adelaide legally can't. Only registered builders can obtain permits, manage engineering sign-offs, and certify compliance. As a registered builder (BRN XXXXXXX), we handle all of it for you: permits, approvals, engineering, and inspections. Done properly, fully compliant." },
  { q: "How much does a roof replacement cost in Adelaide?", a: "Most residential roof replacements in Adelaide range from $15,000 to $40,000 depending on roof size, pitch, material choice, and whether asbestos removal is involved. We don't give ballpark quotes over the phone — every property is different, and guessing helps no one. After a free on-site inspection, we'll give you a detailed, fixed-price quote with no hidden costs. What we quote is exactly what you pay." },
  { q: "How long does a full roof replacement take?", a: "Most residential roof replacements in Adelaide are completed within 1–3 days. Larger or more complex roofs may take a little longer. We'll give you a precise timeframe during your free inspection — and we stick to it." },
  { q: "What types of roofing do you replace?", a: "We replace terracotta and concrete tiles with Colorbond, replace worn or damaged Colorbond roofing, and safely remove and replace asbestos roofs with either Colorbond steel or quality tiles. Not sure what you have? We'll identify it during your free inspection." },
  { q: "Are there any hidden costs in your quotes?", a: "None. Every quote is based on a thorough on-site inspection and covers all labour, trades, and materials. No line items added later, no surprise variations, no pressure to upgrade. What we quote is what you pay — in writing, before any work begins." },
  { q: "Do you remove asbestos roofing safely?", a: "Yes. We're fully licensed for asbestos removal in SA, and every job is carried out in strict compliance with SafeWork SA regulations. Materials are safely contained, removed, and disposed of through authorised channels — and you receive full documentation confirming it was done to standard." },
  { q: "What warranty do you offer?", a: "We provide a workmanship warranty on all roof replacements. Colorbond steel products also carry BlueScope's own manufacturer warranty. Before work begins, we'll walk you through all warranty details in full — so you know exactly what you're covered for, and for how long." },
  { q: "Which Adelaide suburbs do you service?", a: "We service all Adelaide metro suburbs — the eastern and western suburbs, the northern suburbs, the south, and out to the Adelaide Hills. Give us a call or fill in the form and we'll confirm availability in your area." },
];

function FAQs() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section id="faqs" aria-labelledby="faqs-heading" className="section-pad bg-soft">
      <div className="container-prose">
        <div className="text-center mb-14">
          <p className="eyebrow text-foreground/55">Common Questions</p>
          <h2 id="faqs-heading" className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
            Frequently Asked <span className="teal-italic text-[1.1em]">Questions</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          <dl>
            {FAQS.map((f, idx) => {
              const isOpen = open === idx;
              return (
                <div key={f.q} className={`border-b border-border last:border-b-0 ${idx === 0 ? "border-t" : ""}`}>
                  <dt>
                    <button
                      onClick={() => setOpen(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between gap-4 py-5 text-left"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <span className="font-display font-semibold uppercase tracking-wide text-sm md:text-base">{f.q}</span>
                      <ChevronDown
                        size={18}
                        className={`shrink-0 text-teal transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                  </dt>
                  <dd id={`faq-answer-${idx}`} className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-5" : "max-h-0"}`} aria-hidden={!isOpen}>
                    <p className="text-foreground/65 leading-[1.85]">{f.a}</p>
                  </dd>
                </div>
              );
            })}
          </dl>
          <div className="mt-10 text-center">
            <p className="text-foreground/55 text-sm">Still have questions?</p>
            <a href="/quote" className="btn-teal btn-teal-hover mt-4">Book My Free Roof Inspection</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const formData = new FormData(e.currentTarget);
      const payload = Object.fromEntries(formData);
      payload.access_key = "4da8256a-17ab-43d1-b4f7-178a0bfa1a4d";
      payload.subject = "New Quote Request — Ironbark Roofing";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        console.error("Web3Forms error:", json);
        setError("We couldn't send your request right now. Please call us directly on (08) XXXX XXXX.");
      }
    } catch (err) {
      console.error("Web3Forms fetch error:", err);
      setError("We couldn't send your request right now. Please call us directly on (08) XXXX XXXX.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad bg-background">
      <div className="container-prose">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* left col */}
          <div>
            <p className="eyebrow text-foreground/55 block mb-7">Free · No Obligation · Reply in 1 Business Day</p>
            <h2 id="contact-heading" className="font-display uppercase font-semibold" style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.02" }}>
              Ready to Stop
              <br />
              <span className="teal-italic text-[1.1em]">Worrying About Your Roof?</span>
            </h2>
            <div className="mt-8 h-px w-14 bg-teal" aria-hidden="true" />
            <p className="mt-7 text-foreground/65 leading-[1.85]">
              Fill in the form and we'll call you within one business day to arrange your free on-site inspection. No pressure, no obligation — just straight answers and a fixed-price quote you can rely on.
            </p>
            <address className="not-italic mt-10 space-y-4">
              <a href="tel:YOUR_PHONE_NUMBER" className="flex items-center gap-4 group" aria-label="Call us on (08) XXXX XXXX">
                <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all">
                  <Phone size={15} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-foreground/45 uppercase tracking-widest font-medium">Phone</p>
                  <p className="font-semibold text-foreground group-hover:text-teal transition-colors">(08) XXXX XXXX</p>
                </div>
              </a>
              <a href="mailto:hello@youremail.com.au" className="flex items-center gap-4 group" aria-label="Email hello@youremail.com.au">
                <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-teal group-hover:bg-teal group-hover:text-white group-hover:border-teal transition-all">
                  <Mail size={15} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-foreground/45 uppercase tracking-widest font-medium">Email</p>
                  <p className="font-semibold text-foreground group-hover:text-teal transition-colors">hello@youremail.com.au</p>
                </div>
              </a>
              <div className="flex items-center gap-4">
                <span className="shrink-0 w-10 h-10 border border-border flex items-center justify-center text-teal">
                  <MapPin size={15} aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs text-foreground/45 uppercase tracking-widest font-medium">Location</p>
                  <p className="font-semibold text-foreground">Adelaide, South Australia</p>
                </div>
              </div>
            </address>
          </div>

          {/* right col — form */}
          <div className="bg-soft border border-border/60 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto w-14 h-14 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                  <Check size={26} className="text-teal" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase">Thanks — we'll be in touch.</h3>
                <p className="mt-3 text-foreground/60 leading-relaxed">We'll call you within one business day to arrange your free inspection.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate aria-label="Get a free roof replacement quote">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-widest text-foreground/55">Full Name *</label>
                    <input id="form-name" name="name" type="text" required autoComplete="name" placeholder="John Smith" className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-widest text-foreground/55">Phone *</label>
                    <input id="form-phone" name="phone" type="tel" required autoComplete="tel" placeholder="0400 000 000" className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="form-email" className="text-xs font-semibold uppercase tracking-widest text-foreground/55">Email *</label>
                    <input id="form-email" name="email" type="email" required autoComplete="email" placeholder="john@example.com" className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-suburb" className="text-xs font-semibold uppercase tracking-widest text-foreground/55">Suburb</label>
                    <input id="form-suburb" name="suburb" type="text" autoComplete="address-level2" placeholder="Glenelg" className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-teal transition-colors" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="form-service" className="text-xs font-semibold uppercase tracking-widest text-foreground/55">Service</label>
                    <select id="form-service" name="service" className="border border-border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:border-teal transition-colors appearance-none">
                      <option value="">Select service…</option>
                      <option>Replace Tiles with Colorbond</option>
                      <option>Replace Existing Colorbond</option>
                      <option>Replace Asbestos with Tiles</option>
                      <option>Replace Asbestos with Colorbond</option>
                      <option>Not sure — need advice</option>
                    </select>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:col-span-2">
                    <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-widest text-foreground/55">Message</label>
                    <textarea id="form-message" name="message" rows={4} placeholder="Tell us a little about your roof and what you're looking to do…" className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-teal transition-colors resize-none" />
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-teal btn-teal-hover w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
                  {loading ? "Sending…" : "Book My Free Inspection"}
                </button>
                <p className="mt-4 text-center text-xs text-foreground/40">We'll call you within 1 business day — no spam, ever. We typically book inspections 3–5 days out.</p>
                {error && (
                  <p className="mt-3 text-sm text-red-600 text-center leading-relaxed">{error}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

const FOOTER_LINKS = [
  { label: "Roof Replacements", href: "#replacements" },
  { label: "Our Work", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Book Free Inspection", href: "/quote" },
];

function Footer() {
  return (
    <footer role="contentinfo" className="relative bg-soft pt-16 pb-6 border-t border-border">
      <div className="container-prose">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-border">
          <div>
            <Logo />
            <p className="mt-6 text-sm text-foreground/65 max-w-xs leading-[1.85]">
              We don't just replace roofs. We make sure they're done right — legally, structurally, and for the long term. That's our commitment to every Adelaide homeowner we work with.
            </p>
            <p className="mt-3 text-xs text-foreground/40">ABN XX XXX XXX XXX · BRN XXXXXXX</p>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="eyebrow text-foreground/55">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm text-foreground/75 list-none p-0 m-0">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}><a href={l.href} className="hover:text-teal transition-colors">{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="eyebrow text-foreground/55">Connect</h3>
            <address className="not-italic mt-6 space-y-3 text-sm text-foreground/75">
              <p className="flex items-center gap-3">
                <Mail size={14} className="text-teal shrink-0" aria-hidden="true" />
                <a href="mailto:hello@youremail.com.au" className="hover:text-teal transition-colors">hello@youremail.com.au</a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={14} className="text-teal shrink-0" aria-hidden="true" />
                <a href="tel:YOUR_PHONE_NUMBER" className="hover:text-teal transition-colors">(08) XXXX XXXX</a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={14} className="text-teal shrink-0" aria-hidden="true" />
                <span>Adelaide, South Australia</span>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-6 text-xs text-foreground/50">
          <small>&copy; {new Date().getFullYear()} Ironbark Roofing. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
}

// ─── Reveal hook ──────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const els = ref.current?.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e, idx) => {
          if (e.isIntersecting) {
            const el = e.target as HTMLElement;
            el.style.transitionDelay = `${idx * 80}ms`;
            el.classList.add("reveal");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => {
      el.style.opacity = "0";
      io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return ref;
}

// ─── Page ─────────────────────────────────────────────────────────────────────

function HomePage() {
  const ref = useReveal();
  return (
    <div ref={ref} className="bg-background">
      <Header />
      <main id="main-content" className="pt-[80px]">
        <Hero />
        <div data-reveal><Problem /></div>
        <div data-reveal><Intro /></div>
        <div data-reveal><Services /></div>
        <div data-reveal><Trust /></div>
        <div data-reveal><Gallery /></div>
        <div data-reveal><Reviews /></div>
        <div data-reveal><Process /></div>
        <div data-reveal><Approval /></div>
        <div data-reveal><Locals /></div>
        <div data-reveal><FAQs /></div>
        <div data-reveal><RiskReversal /></div>
        <div data-reveal><ContactForm /></div>
        <Footer />
      </main>
    </div>
  );
}
