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
      { title: "Perth Roof Replacements | Registered Roofing Builders WA" },
      {
        name: "description",
        content:
          "Premium roof replacements and repairs across Perth. Registered builders delivering Colorbond, tile and asbestos roof replacements with full council approval.",
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
  { label: "Get a Quote", href: "/quote" },
];

// ─── Logo ────────────────────────────────────────────────────────────────────

function Logo({ light = false }: { light?: boolean }) {
  const textClass = light ? "text-white" : "text-foreground";
  return (
    <a href="#top" className="flex items-center gap-3" aria-label="Perth Roof Replacements — Home">
      <svg width="42" height="42" viewBox="0 0 36 36" fill="none" aria-hidden="true" focusable="false">
        <path d="M4 20L18 7l14 13" stroke="currentColor" strokeWidth="2.5" className="text-teal" />
        <path d="M8 18v11h20V18" stroke="currentColor" strokeWidth="2.5" className={textClass} />
      </svg>
      <div className={`leading-none ${textClass}`}>
        <div className="font-display text-[1.2rem] font-semibold tracking-wide uppercase">
          Perth<span className="text-teal">Roof</span>
        </div>
        <div className="text-[0.62rem] font-semibold tracking-[0.26em] opacity-70 mt-1 uppercase">
          Replacements
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
      className={`fixed top-0 inset-x-0 z-50 bg-background transition-shadow ${
        scrolled ? "shadow-[0_1px_0_rgba(32,55,70,0.08),0_8px_24px_-14px_rgba(32,55,70,0.15)]" : ""
      }`}
    >
      <div className="container-prose flex items-center justify-between h-[80px]">
        <Logo />
        <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.map((n) => (
            <a key={n.href} href={n.href} className="text-[0.82rem] font-medium text-foreground/85 hover:text-teal transition-colors">
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href="tel:YOUR_PHONE_NUMBER" className="hidden md:inline-flex items-center gap-2 text-[0.82rem] font-semibold text-foreground/80 hover:text-teal transition-colors mr-2" aria-label="Call us on (08) XXXX XXXX">
            <Phone size={14} aria-hidden="true" /> (08) XXXX XXXX
          </a>
          <a href="/quote" className="hidden sm:inline-flex btn-teal btn-teal-hover">Get a Free Quote</a>
          <button className="lg:hidden p-2 -mr-2 text-foreground" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation menu" : "Open navigation menu"} aria-expanded={open} aria-controls="mobile-menu">
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-4 flex flex-col gap-1">
            {NAV_LINKS.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="py-3 text-sm font-medium border-b border-border last:border-0">
                {n.label}
              </a>
            ))}
            <a href="/quote" onClick={() => setOpen(false)} className="btn-teal btn-teal-hover mt-3 sm:hidden">Get a Free Quote</a>
          </div>
        </nav>
      )}
    </header>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" aria-label="Perth Roof Replacements — Registered Builders" className="relative min-h-[700px] md:min-h-[720px] lg:min-h-[750px] overflow-hidden bg-navy">
      <div className="absolute inset-0" aria-hidden="true">
        <img src={heroImg} alt="Premium Colorbond roof replacement installed on a Perth home by registered builders" className="w-full h-full object-cover hero-zoom" width={1920} height={1280} fetchPriority="high" decoding="async" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,28,38,0.82)_0%,rgba(12,28,38,0.68)_45%,rgba(12,28,38,0.35)_100%)]" />
      </div>
      <div className="relative min-h-[700px] md:min-h-[720px] lg:min-h-[750px] flex items-center">
        <div className="w-full" style={{ paddingLeft: "max(8%, 1.5rem)", paddingRight: "1.5rem" }}>
          <div className="max-w-[680px] text-white reveal">
            <h1 className="font-display uppercase font-semibold text-white" style={{ fontSize: "clamp(2.6rem, 6vw, 4.4rem)", lineHeight: "0.95", letterSpacing: "-0.01em" }}>
              Perth's Registered
              <br />
              Roof Specialists
            </h1>
            <p className="mt-7 text-base sm:text-lg text-white/80 max-w-md leading-relaxed">
              We handle the permits, the trades, and the council approvals — so you don't have to. <span className="teal-italic text-[1.2em]">One fixed price. Zero stress.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="/quote" className="btn-teal btn-teal-hover">
                Book My Free Roof Inspection <ArrowRight size={14} className="ml-2" aria-hidden="true" />
              </a>
              <a href="tel:YOUR_PHONE_NUMBER" className="btn-outline-light" aria-label="Call us on (08) XXXX XXXX">
                <Phone size={14} className="mr-2" aria-hidden="true" /> (08) XXXX XXXX
              </a>
            </div>
            <p className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.7rem] tracking-[0.18em] uppercase text-white/35 font-medium" aria-label="Trust credentials">
              <span>Registered Builder WA · BRN XXXXXXX</span>
              <span className="h-3 w-px bg-white/20" aria-hidden="true" />
              <span>500+ Roofs Replaced</span>
              <span className="h-3 w-px bg-white/20" aria-hidden="true" />
              <span>5.0★ · 47 Google Reviews</span>
            </p>
          </div>
        </div>
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
        <p className="eyebrow text-foreground/55">Perth's Only Registered Roof Replacement Specialists</p>
        <h2 id="intro-heading" className="mt-6 mx-auto font-display uppercase font-semibold" style={{ maxWidth: "720px", fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
          Fixed Price. <span className="teal-italic text-[1.1em]">Council Approved.</span> Done in{" "}
          <span className="teal-italic text-[1.1em]">Days.</span>
        </h2>
        <p className="mt-8 mx-auto text-foreground/65 leading-[1.85] text-[1.02rem]" style={{ maxWidth: "780px" }}>
          A roof replacement is one of the biggest investments you'll make in your home. You need someone who won't cut corners, won't hit you with variations, and won't leave you to deal with council on your own. As registered builders, we manage every trade, every permit, and every inspection — so the job is done once, done right, and done to code.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="/quote" className="btn-teal btn-teal-hover">Residential Replacements</a>
          <a href="/quote" className="btn-teal btn-teal-hover">Commercial Replacements</a>
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
  { title: "Replace Tiles With Colorbond", description: "Professional replacement of existing terracotta or concrete roof tiles with premium Colorbond steel roofing in Perth.", icon: "M8 30L32 14l24 16M14 30v20h36V30M14 38h36M14 44h36" },
  { title: "Replace Existing Colorbond", description: "Upgrade worn or damaged Colorbond roofing with new premium Colorbond steel — stronger, longer-lasting finish.", icon: "M6 26h52M10 26v24h44V26M10 34h44M10 42h44M10 50h44" },
  { title: "Replace Asbestos With Tiles", description: "Safe licensed asbestos roof removal and replacement with quality concrete or terracotta tiles across Perth.", icon: "M10 28h44l-6-10H16zM14 28v22h36V28M18 32l4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4" },
  { title: "Replace Asbestos With Colorbond", description: "Safe licensed asbestos roof removal and replacement with durable Colorbond steel roofing for Perth homes.", icon: "M10 28h44l-6-10H16zM14 28v22h36V28M14 34h36M14 40h36M14 46h36" },
];

function Services() {
  return (
    <section id="services" aria-label="Our roof replacement services" className="py-20 md:py-28 bg-soft">
      <div className="container-prose">
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0" role="list">
          {SERVICE_ITEMS.map((s) => (
            <li key={s.title} className="group bg-background min-h-[220px] p-8 flex flex-col items-center justify-center text-center border border-border/60 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_40px_-22px_rgba(32,55,70,0.28)] hover:border-teal/50">
              <div className="mb-6 transition-transform duration-300 group-hover:scale-105">
                <ServiceIcon d={s.icon} title={s.title} />
              </div>
              <h3 className="text-[0.82rem] tracking-[0.16em] uppercase font-semibold leading-snug font-display">{s.title}</h3>
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
  { title: "Done Once, Done Right", body: "A botched roof job is one of the most expensive mistakes a homeowner can make — and one of the hardest to fix. As registered builders, we coordinate every trade from start to finish, ensuring your replacement meets code, handles Perth's climate, and doesn't need touching again for decades." },
  { title: "What We Quote Is What You Pay", body: "We've heard the stories — quotes that looked reasonable, then doubled by the time the last sheet was laid. That won't happen here. Every quote we give is based on a thorough on-site inspection and covers everything. No line items added later. No variations. No excuses." },
  { title: "Guaranteed Follow-Through", body: "Our accountability doesn't end when the crew packs up. We back our workmanship with a guarantee, and if anything isn't right after the job is done, we come back and fix it. That's what it means to stand behind your work — not just on the day, but for the long term." },
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
              "Member · Master Builders WA",
            ].map((line) => (
              <div key={line} className="flex items-center gap-3 text-sm text-foreground/60">
                <div className="h-px w-5 bg-teal shrink-0" aria-hidden="true" />
                {line}
              </div>
            ))}
          </div>
        </div>
        <div className="lg:border-l lg:border-border lg:pl-16">
          <ul className="space-y-10 list-none p-0 m-0" aria-label="Why choose Perth Roof Replacements">
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
  { src: heroImg, alt: "Aerial view of completed Colorbond roof replacement on a Perth home", caption: "Colorbond Replacement — Karrinyup" },
  { src: classicImg, alt: "Classic terracotta tile roof on a brick Perth home after replacement", caption: "Tile Roof — Cottesloe" },
  { src: modernImg, alt: "Modern dark standing-seam Colorbond roof on a contemporary Perth home", caption: "Modern Colorbond — Applecross" },
  { src: premiumImg, alt: "Premium Colorbond roof on a two-storey Perth home at dusk", caption: "Premium Colorbond — Dalkeith" },
];

function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="gallery" aria-labelledby="gallery-heading" className="section-pad bg-soft">
      <div className="container-prose">
        <div className="text-center mb-14">
          <p className="eyebrow text-foreground/55">Our Work</p>
          <h2 id="gallery-heading" className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
            Perth Roofs <span className="teal-italic text-[1.1em]">We're Proud Of</span>
          </h2>
          <p className="mt-5 mx-auto text-foreground/60 leading-[1.85]" style={{ maxWidth: "580px" }}>
            Every job is a reflection of our standards. Here's a sample of recent roof replacements
            completed across the Perth metro area.
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
  { name: "Sarah M.", suburb: "Cottesloe", rating: 5, text: "Perth Roof Replacements did an outstanding job replacing our old asbestos roof with Colorbond. The team was professional, punctual, and handled all the council approvals without us having to lift a finger. Highly recommend.", date: "2 months ago" },
  { name: "James T.", suburb: "Applecross", rating: 5, text: "From the first quote to the final inspection, the process was seamless. The price they quoted was exactly what we paid — no nasty surprises. The new Colorbond roof looks incredible and was done in just two days.", date: "3 months ago" },
  { name: "Linda K.", suburb: "Floreat", rating: 5, text: "We replaced our old terracotta tiles with Colorbond and couldn't be happier. The crew was tidy, respectful of our property, and the finish is perfect. Genuine registered builders who know what they're doing.", date: "4 months ago" },
  { name: "Mark B.", suburb: "Fremantle", rating: 5, text: "Had them replace an asbestos roof — the peace of mind from having a registered builder handle the compliance side was worth every cent. Professional from start to finish. Would use again without hesitation.", date: "1 month ago" },
  { name: "Rachel P.", suburb: "Subiaco", rating: 5, text: "Excellent communication throughout. They came out, gave us a thorough quote, explained everything clearly, and delivered exactly what they promised. The new roof has completely transformed the look of our home.", date: "5 months ago" },
  { name: "David H.", suburb: "Nedlands", rating: 5, text: "Five stars doesn't feel like enough. Replaced our entire tile roof — the team worked efficiently, cleaned up after themselves each day, and the end result is flawless. Real tradespeople who take pride in their craft.", date: "6 months ago" },
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
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(true);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 8);
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 8);
  };

  const scroll = (dir: "left" | "right") => {
    trackRef.current?.scrollBy({ left: dir === "right" ? 420 : -420, behavior: "smooth" });
  };

  return (
    <section id="reviews" aria-labelledby="reviews-heading" className="section-pad bg-background">

      {/* header — inside container */}
      <div className="container-prose text-center mb-12">
        <p className="eyebrow text-foreground/55">Customer Reviews</p>
        <h2 id="reviews-heading" className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)", lineHeight: "1.08" }}>
          500+ Perth Homeowners <span className="teal-italic text-[1.1em]">Have Made the Switch</span>
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

      {/* track bleeds edge-to-edge on mobile, respects padding on desktop */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 sm:px-6 lg:px-[max(calc((100vw-1200px)/2+1.5rem),1.5rem)]"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        role="list"
        aria-label="Customer reviews"
      >
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="snap-start shrink-0 w-[82vw] sm:w-72 md:w-80 lg:w-[360px] bg-soft p-7 flex flex-col"
            role="listitem"
            itemProp="review"
            itemScope
            itemType="https://schema.org/Review"
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex gap-0.5" aria-label={`${r.rating} out of 5 stars`}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} className="fill-yellow-400 text-yellow-400" aria-hidden="true" />
                ))}
              </div>
              <div className="opacity-20">{GOOGLE_ICON}</div>
            </div>

            <p className="text-foreground/70 leading-[1.9] text-[0.88rem] flex-1" itemProp="reviewBody">
              "{r.text}"
            </p>

            <div className="mt-6 pt-5 border-t border-border" itemProp="author" itemScope itemType="https://schema.org/Person">
              <p className="font-display font-semibold uppercase tracking-[0.12em] text-foreground text-[0.75rem]" itemProp="name">{r.name}</p>
              <p className="text-foreground/35 text-[0.68rem] mt-0.5">{r.suburb}, WA · <time>{r.date}</time></p>
            </div>
          </article>
        ))}
        {/* right padding sentinel */}
        <div className="shrink-0 w-4 sm:w-6 lg:w-[max(calc((100vw-1200px)/2+1.5rem),1.5rem)]" aria-hidden="true" />
      </div>

      {/* controls — inside container */}
      <div className="container-prose mt-8 flex items-center justify-between">
        <a href="/quote" className="btn-teal btn-teal-hover">Book My Free Roof Inspection</a>
        <div className="flex gap-2" role="group" aria-label="Scroll reviews">
          <button
            onClick={() => scroll("left")}
            disabled={!canLeft}
            aria-label="Previous reviews"
            className="w-10 h-10 border border-border flex items-center justify-center text-foreground/40 hover:text-teal hover:border-teal disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft size={17} aria-hidden="true" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canRight}
            aria-label="Next reviews"
            className="w-10 h-10 border border-border flex items-center justify-center text-foreground/40 hover:text-teal hover:border-teal disabled:opacity-20 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronRight size={17} aria-hidden="true" />
          </button>
        </div>
      </div>

    </section>
  );
}

// ─── Approval / How It Works ──────────────────────────────────────────────────

const PARTNER_BRANDS = [
  { name: "Master Builders Association WA", short: "Master Builders" },
  { name: "Zincalume® Steel", short: "Zincalume®" },
  { name: "Colorbond® Steel", short: "Colorbond®" },
  { name: "Stratco Building Products", short: "Stratco" },
];

function Approval() {
  return (
    <section id="how" aria-labelledby="approval-heading" className="py-20 md:py-28 bg-soft">
      <div className="container-prose text-center max-w-2xl">
        <p className="eyebrow text-foreground/55">A Credential That Matters</p>
        <h2 id="approval-heading" className="mt-5 font-display uppercase font-semibold" style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)", lineHeight: "1.1" }}>
          We Handle <span className="teal-italic text-[1.1em]">Council Approval</span> — Most Roofers Can't
        </h2>
        <p className="mt-7 text-foreground/65 leading-[1.85]">
          Most roofing contractors in Perth are not registered builders. That means they cannot legally obtain permits, manage engineering sign-offs, or certify compliance with the Building Code. If they do the work anyway, you could face issues with your insurer, problems selling your home, or liability for non-compliant work. As a registered builder, Perth Roof Replacements is fully authorised to manage the entire compliance process — council approvals, engineering checks, permits, and inspections. Your roof is legal, insured, and protected.
        </p>
        <a href="/quote" className="btn-teal btn-teal-hover mt-9">See What Your Roof Replacement Costs</a>
      </div>
      <div className="container-prose mt-14">
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
          <img src={teamImg} alt="Perth Roof Replacements team member — locally owned and operated roofing business in Western Australia" className="absolute inset-0 w-full h-full object-cover" loading="lazy" decoding="async" width={1200} height={1400} />
        </div>
        <div className="bg-navy text-white p-10 md:p-16 lg:p-20 flex items-center">
          <div className="max-w-md">
            <p className="eyebrow text-teal">Locally Owned</p>
            <h2 id="locals-heading" className="mt-6 font-display uppercase font-semibold" style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.02" }}>
              Locals You Can
              <br />
              <span className="teal-italic text-[1.1em]">Count On</span>
            </h2>
            <div className="mt-7 h-px w-14 bg-teal" aria-hidden="true" />
            <p className="mt-7 text-white/80 leading-[1.85]">
              We're a West Australian-owned business — not a national chain, not a franchise. We know Perth homes, Perth weather, and the roofing standards that matter here. Every job we take on is one we're willing to put our name to, and our reputation has been built entirely on delivering what we promise. Honest pricing. Quality workmanship. Real accountability.
            </p>
            <a href="/quote" className="btn-teal btn-teal-hover mt-9">Get My Fixed-Price Quote</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQs ─────────────────────────────────────────────────────────────────────

const FAQS = [
  { q: "Do you handle council approval for roof replacements?", a: "Yes — and this is something most roofing contractors in Perth cannot legally do. Only registered builders are authorised to obtain permits, manage engineering sign-offs, and certify compliance with the Building Code. As a registered builder (BRN XXXXXXX), we handle the entire process for you: council approvals, engineering checks, permits, and inspections. If a contractor who isn't a registered builder does this work without the proper compliance, you could face serious problems with your insurer or when selling your home. With us, that risk doesn't exist." },
  { q: "How much does a roof replacement cost in Perth?", a: "Most residential roof replacements in Perth range from $15,000 to $40,000 depending on roof size, pitch, material choice, and whether asbestos removal is involved. We don't give ballpark quotes over the phone — every property is different, and guessing helps no one. After a free on-site inspection, we'll give you a detailed, fixed-price quote with no hidden costs. What we quote is exactly what you pay." },
  { q: "How long does a full roof replacement take?", a: "Most residential roof replacements in Perth are completed within 1–3 days. Larger or more complex roofs may take a little longer. We'll give you a precise timeframe during your free inspection — and we stick to it." },
  { q: "What types of roofing do you replace?", a: "We replace terracotta and concrete tiles with Colorbond, replace worn or damaged Colorbond roofing, and safely remove and replace asbestos roofs with either Colorbond steel or quality tiles. Not sure what you have? We'll identify it during your free inspection." },
  { q: "Are there any hidden costs in your quotes?", a: "Absolutely not. We've heard the stories of quotes that doubled by the time the job was done — and we built our business on being the opposite of that. Every quote we provide is based on a thorough on-site inspection and covers all costs, all trades, all materials. There are no line items added later, no surprise variations, and no pressure to upgrade. What we quote is what you pay, in writing, before work begins." },
  { q: "Do you remove asbestos roofing safely?", a: "Yes. Asbestos removal is not something to take chances with, and we don't. We are fully licensed to carry out asbestos removal in Western Australia, and all work is conducted in strict compliance with WorkSafe WA regulations. Asbestos materials are safely contained, removed, and disposed of through authorised channels. You'll receive full documentation confirming the removal was completed to standard." },
  { q: "What warranty do you offer?", a: "We provide a workmanship warranty on all roof replacements. Colorbond steel products also carry BlueScope's own manufacturer warranty. Before work begins, we'll walk you through all warranty details in full — so you know exactly what you're covered for, and for how long." },
  { q: "Which Perth suburbs do you service?", a: "We service all Perth metro suburbs — western suburbs, northern suburbs, southern suburbs, and the eastern corridor. Give us a call or fill in the form and we'll confirm availability in your area." },
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
      payload.subject = "New Quote Request — Perth Roof Replacements";
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Accept": "application/json", "Content-Type": "application/json" },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        const json = await res.json().catch(() => ({}));
        console.error("Formspree error:", json);
        setError("We couldn't send your request right now. Please call us directly on (08) XXXX XXXX.");
      }
    } catch (err) {
      console.error("Formspree fetch error:", err);
      setError("We couldn't send your request right now. Please call us directly on (08) XXXX XXXX.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-heading" className="section-pad bg-background">
      <div className="container-prose">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-16 lg:gap-24 items-start">
          {/* left col — contact info */}
          <div>
            <p className="eyebrow text-foreground/55 block mb-7">Free · No Obligation</p>
            <h2 id="contact-heading" className="font-display uppercase font-semibold" style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.02" }}>
              Book Your Free
              <br />
              <span className="teal-italic text-[1.1em]">On-Site Inspection</span>
            </h2>
            <div className="mt-8 h-px w-14 bg-teal" aria-hidden="true" />
            <p className="mt-7 text-foreground/65 leading-[1.85]">
              We'll come to you, assess your roof properly, and give you a detailed fixed-price quote — no obligation, no pressure, no surprises. Most inspections are booked within a few days.
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
                  <p className="font-semibold text-foreground">Perth, Western Australia</p>
                </div>
              </div>
            </address>
            {/* trust signals */}
            <div className="mt-10 pt-8 border-t border-border grid grid-cols-1 gap-3">
              {[
                { icon: "✓", text: "Free on-site inspection — we come to you" },
                { icon: "✓", text: "Detailed fixed-price quote — no hidden costs" },
                { icon: "✓", text: "Reply within 1 business day" },
                { icon: "✓", text: "No obligation — walk away anytime" },
              ].map((t) => (
                <div key={t.text} className="flex items-center gap-3">
                  <span className="shrink-0 w-6 h-6 bg-teal/10 border border-teal/30 flex items-center justify-center text-teal text-xs font-bold" aria-hidden="true">{t.icon}</span>
                  <span className="text-sm text-foreground/70">{t.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* right col — form */}
          <div className="bg-soft border border-border/60 p-8 md:p-10">
            {submitted ? (
              <div className="text-center py-10">
                <div className="mx-auto w-14 h-14 rounded-full bg-teal/15 flex items-center justify-center mb-5">
                  <Check size={26} className="text-teal" strokeWidth={2.5} />
                </div>
                <h3 className="font-display text-2xl font-semibold uppercase">Thanks, we'll be in touch!</h3>
                <p className="mt-3 text-foreground/60 leading-relaxed">We'll contact you within one business day to arrange your free inspection.</p>
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
                    <input id="form-suburb" name="suburb" type="text" autoComplete="address-level2" placeholder="Cottesloe" className="border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-teal transition-colors" />
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
                  {loading ? "Sending…" : "Send My Free Quote Request"}
                </button>
                <p className="mt-4 text-center text-xs text-foreground/40">We respect your privacy. No spam, ever.</p>
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
  { label: "Get a Quote", href: "/quote" },
];

function Footer() {
  return (
    <footer role="contentinfo" className="relative bg-soft pt-16 pb-6 border-t border-border">
      <div className="container-prose">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-border">
          <div>
            <Logo />
            <p className="mt-6 text-sm text-foreground/65 max-w-xs leading-[1.85]">
              Perth's trusted registered roof replacement specialists — fixed price, fully compliant, and backed by a workmanship guarantee.
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
                <span>Perth, Western Australia</span>
              </p>
            </address>
          </div>
        </div>
        <div className="mt-6 text-xs text-foreground/50">
          <small>&copy; {new Date().getFullYear()} Perth Roof Replacements. All rights reserved.</small>
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
        <div data-reveal><Intro /></div>
        <div data-reveal><Services /></div>
        <div data-reveal><Trust /></div>
        <div data-reveal><Gallery /></div>
        <div data-reveal><Reviews /></div>
        <div data-reveal><Approval /></div>
        <div data-reveal><Locals /></div>
        <div data-reveal><FAQs /></div>
        <div data-reveal><ContactForm /></div>
        <Footer />
      </main>
    </div>
  );
}
