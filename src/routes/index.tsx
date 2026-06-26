import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
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
          "Expert roof replacements across Perth, WA. Registered builders (BRN BC105894) replacing tiles with Colorbond, asbestos removal & Colorbond upgrades. Free quotes, council approval handled.",
      },
    ],
  }),
  component: HomePage,
});

const NAV_LINKS = [
  { label: "Roof Replacements", href: "#replacements" },
  { label: "Roof Repairs", href: "#repairs" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#how" },
  { label: "Contact", href: "#contact" },
];

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
            <a
              key={n.href}
              href={n.href}
              className="text-[0.82rem] font-medium text-foreground/85 hover:text-teal transition-colors"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="tel:+61861881355"
            className="hidden md:inline-flex items-center gap-2 text-[0.82rem] font-semibold text-foreground/80 hover:text-teal transition-colors mr-2"
            aria-label="Call us on (08) 6188 1355"
          >
            <Phone size={14} aria-hidden="true" /> (08) 6188 1355
          </a>
          <a href="#contact" className="hidden sm:inline-flex btn-teal btn-teal-hover">
            Get a Free Quote
          </a>
          <button
            className="lg:hidden p-2 -mr-2 text-foreground"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-menu" aria-label="Mobile navigation" className="lg:hidden border-t border-border bg-background">
          <div className="container-prose py-4 flex flex-col gap-1">
            {NAV_LINKS.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium border-b border-border last:border-0"
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn-teal btn-teal-hover mt-3 sm:hidden">
              Get a Free Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="top"
      aria-label="Perth Roof Replacements — Registered Roofing Specialists"
      className="relative min-h-[700px] md:min-h-[720px] lg:min-h-[750px] overflow-hidden bg-navy"
    >
      <div className="absolute inset-0" aria-hidden="true">
        <img
          src={heroImg}
          alt="Premium Colorbond roof replacement installed on a Perth home by registered builders"
          className="w-full h-full object-cover hero-zoom"
          width={1920}
          height={1280}
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,28,38,0.82)_0%,rgba(12,28,38,0.68)_45%,rgba(12,28,38,0.35)_100%)]" />
      </div>
      <div className="relative min-h-[700px] md:min-h-[720px] lg:min-h-[750px] flex items-center">
        <div className="w-full" style={{ paddingLeft: "max(8%, 1.5rem)", paddingRight: "1.5rem" }}>
          <div className="max-w-[680px] text-white reveal">
            <p className="eyebrow text-teal block mb-7">Registered Roofing Specialists — Perth, WA</p>
            <h1
              className="font-display uppercase font-semibold text-white"
              style={{
                fontSize: "clamp(2.6rem, 6vw, 4.4rem)",
                lineHeight: "0.95",
                letterSpacing: "-0.01em",
              }}
            >
              Perth Roof
              <br />
              Replacements
            </h1>
            <p className="mt-7 text-base sm:text-lg text-white/80 max-w-md leading-relaxed">
              Built on experience. <span className="teal-italic text-[1.35em]">Driven by quality.</span>
            </p>
            <div className="mt-10 flex flex-wrap gap-4 items-center">
              <a href="#contact" className="btn-teal btn-teal-hover">
                Get a Free Quote <ArrowRight size={14} className="ml-2" aria-hidden="true" />
              </a>
              <a href="#how" className="btn-outline-light">
                How It Works
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  return (
    <section id="replacements" aria-labelledby="intro-heading" className="section-pad bg-background">
      <div className="container-prose text-center">
        <div className="mx-auto h-px w-12 bg-teal mb-8" aria-hidden="true" />
        <p className="eyebrow text-foreground/55">Built on experience · Driven by quality</p>
        <h2
          id="intro-heading"
          className="mt-6 mx-auto font-display uppercase font-semibold"
          style={{
            maxWidth: "720px",
            fontSize: "clamp(1.9rem, 3.6vw, 2.9rem)",
            lineHeight: "1.08",
            letterSpacing: "0",
          }}
        >
          Premium <span className="teal-italic text-[1.1em]">Roof Replacements</span> for Perth Homes and{" "}
          <span className="teal-italic text-[1.1em]">Businesses</span>
        </h2>
        <p className="mt-8 mx-auto text-foreground/65 leading-[1.85] text-[1.02rem]" style={{ maxWidth: "780px" }}>
          A new roof is a significant investment — one you want done right the first time. As registered
          builders, we coordinate every trade ourselves to deliver a seamless, compliant, and
          high-quality roof replacement that holds its value for decades to come.
        </p>
        <div className="mt-10 flex flex-wrap gap-3 justify-center">
          <a href="#contact" className="btn-teal btn-teal-hover">Residential</a>
          <a href="#contact" className="btn-teal btn-teal-hover">Commercial</a>
        </div>
      </div>
    </section>
  );
}

function ServiceIcon({ d, title }: { d: string; title: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className="w-14 h-14 text-foreground"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      aria-hidden="true"
      focusable="false"
      role="img"
    >
      <title>{title}</title>
      <path d={d} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const SERVICE_ITEMS = [
  {
    title: "Replace Tiles With Colorbond",
    description: "Professional replacement of existing terracotta or concrete roof tiles with premium Colorbond steel roofing in Perth.",
    icon: "M8 30L32 14l24 16M14 30v20h36V30M14 38h36M14 44h36",
  },
  {
    title: "Replace Existing Colorbond",
    description: "Upgrade worn or damaged Colorbond roofing with new premium Colorbond steel — stronger, longer-lasting finish.",
    icon: "M6 26h52M10 26v24h44V26M10 34h44M10 42h44M10 50h44",
  },
  {
    title: "Replace Asbestos With Tiles",
    description: "Safe licensed asbestos roof removal and replacement with quality concrete or terracotta tiles across Perth.",
    icon: "M10 28h44l-6-10H16zM14 28v22h36V28M18 32l4 4 4-4 4 4 4-4 4 4 4-4 4 4 4-4",
  },
  {
    title: "Replace Asbestos With Colorbond",
    description: "Safe licensed asbestos roof removal and replacement with durable Colorbond steel roofing for Perth homes.",
    icon: "M10 28h44l-6-10H16zM14 28v22h36V28M14 34h36M14 40h36M14 46h36",
  },
];

function Services() {
  return (
    <section id="services" aria-labelledby="services-heading" className="py-20 md:py-28 bg-soft">
      <div className="container-prose">
        <div className="text-center mb-14">
          <p className="eyebrow text-foreground/55">Our Services</p>
          <h2 id="services-heading" className="mt-5 font-display uppercase font-semibold text-3xl md:text-4xl">
            Roof Replacement <span className="teal-italic text-[1.1em]">Specialists</span>
          </h2>
        </div>
        <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 list-none p-0 m-0" role="list">
          {SERVICE_ITEMS.map((s) => (
            <li
              key={s.title}
              className="group bg-background min-h-[220px] p-8 flex flex-col items-center justify-center text-center border border-border/60 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-[0_18px_40px_-22px_rgba(32,55,70,0.28)] hover:border-teal/50"
            >
              <div className="mb-6 transition-transform duration-300 group-hover:scale-105">
                <ServiceIcon d={s.icon} title={s.title} />
              </div>
              <h3 className="text-[0.82rem] tracking-[0.16em] uppercase font-semibold leading-snug font-display">
                {s.title}
              </h3>
              <p className="sr-only">{s.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

const TRUST_BLOCKS = [
  {
    title: "Done Once, Done Right",
    body: "We don't patch problems — we replace them with lasting solutions. As registered builders, we coordinate every trade to ensure your roof meets code, withstands local weather, and performs for years to come.",
  },
  {
    title: "What We Quote Is What You Pay",
    body: "No hidden costs. No surprise fees. Transparent pricing built on thorough inspections — because trust is built on certainty, not guesswork.",
  },
  {
    title: "Guaranteed Follow-Through",
    body: "If something goes wrong, we make it right. We stand by our work and stay accountable long after the last sheet is laid.",
  },
];

function Trust() {
  return (
    <section id="about" aria-labelledby="trust-heading" className="section-pad bg-background">
      <div className="container-prose grid lg:grid-cols-[0.9fr_1.3fr] gap-16 lg:gap-24">
        <div>
          <p className="eyebrow text-foreground/55 block mb-7">Why Choose Us</p>
          <h2
            id="trust-heading"
            className="font-display uppercase font-semibold"
            style={{ fontSize: "clamp(2.2rem, 4vw, 3.2rem)", lineHeight: "1.02" }}
          >
            Registered
            <br />
            Reliable
            <br />
            <span className="teal-italic text-[1.05em]">Ready</span>
          </h2>
          <div className="mt-8 h-px w-14 bg-teal" aria-hidden="true" />
          <p className="mt-7 text-foreground/65 leading-[1.85] max-w-sm">
            A West Australian roofing business backed by registered building credentials and a decade
            of replacements delivered to the highest standard.
          </p>
        </div>
        <div className="lg:border-l lg:border-border lg:pl-16">
          <ol className="space-y-12 list-none p-0 m-0" aria-label="Why choose Perth Roof Replacements">
            {TRUST_BLOCKS.map((b, idx) => (
              <li key={b.title} className="grid grid-cols-[auto_1fr] gap-7">
                <div
                  className="font-display text-teal text-[2rem] leading-none font-semibold tabular-nums pt-1"
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-semibold uppercase tracking-wide">
                    {b.title}
                  </h3>
                  <div className="mt-3 h-px w-10 bg-teal/60" aria-hidden="true" />
                  <p className="mt-4 text-foreground/65 leading-[1.85]">{b.body}</p>
                </div>
              </li>
            ))}
          </ol>
          <a href="#contact" className="btn-teal btn-teal-hover mt-12">
            Get a Free Quote
          </a>
        </div>
      </div>
    </section>
  );
}

const STYLE_SLIDES = [
  {
    tag: "Classic",
    image: classicImg,
    body: "After timeless elegance? Classic Colorbond shades like Surfmist® or Dune® are always in style. Your roof is a major design feature — make it extraordinary.",
  },
  {
    tag: "Modern",
    image: modernImg,
    body: "Crisp standing seams and dark metal profiles. The contemporary look that defines new West Australian architecture — clean, considered, built to last.",
  },
  {
    tag: "Premium",
    image: premiumImg,
    body: "Architect-grade roofing for homes that deserve a statement. Premium Colorbond materials, expert installation, a finish that holds its value for decades.",
  },
];

function StyleCarousel() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % STYLE_SLIDES.length);
  const prev = () => setI((p) => (p - 1 + STYLE_SLIDES.length) % STYLE_SLIDES.length);
  const s = STYLE_SLIDES[i];
  return (
    <section id="styles" aria-labelledby="styles-heading" className="py-20 md:py-28 bg-soft">
      <div className="container-prose">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow text-foreground/55">Roof Styles</p>
          <h2
            id="styles-heading"
            className="mt-5 font-display uppercase font-semibold"
            style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.05" }}
          >
            A Roof That <span className="teal-italic text-[1.1em]">Matches Your Style</span>
          </h2>
        </div>
        <div
          className="grid lg:grid-cols-[1fr_1.2fr] gap-0 items-stretch bg-background border border-border/60"
          role="region"
          aria-label={`Roof style: ${s.tag} — ${i + 1} of ${STYLE_SLIDES.length}`}
          aria-live="polite"
        >
          <div className="p-10 md:p-12 flex flex-col justify-between min-h-[440px]">
            <div>
              <div className="flex items-center gap-4 mb-6" aria-hidden="true">
                <span className="font-display text-teal text-2xl font-semibold tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="h-px flex-1 bg-border" />
                <span className="font-display text-foreground/40 text-sm tabular-nums">
                  0{STYLE_SLIDES.length}
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl font-semibold uppercase tracking-wide">
                {s.tag}
              </h3>
              <p className="mt-6 text-foreground/65 leading-[1.85] max-w-md">{s.body}</p>
            </div>
            <div className="mt-10 flex items-center justify-between">
              <a href="#contact" className="btn-teal btn-teal-hover">Learn More</a>
              <div className="flex gap-2" role="group" aria-label="Carousel navigation">
                <button
                  onClick={prev}
                  aria-label="Previous roof style"
                  className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-white hover:border-foreground transition-colors"
                >
                  <ChevronLeft size={18} aria-hidden="true" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next roof style"
                  className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-white hover:border-foreground transition-colors"
                >
                  <ChevronRight size={18} aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
          <div className="relative min-h-[360px] lg:min-h-[520px] overflow-hidden">
            <img
              key={s.image}
              src={s.image}
              alt={`${s.tag} Colorbond roof style installed by Perth Roof Replacements`}
              className="absolute inset-0 w-full h-full object-cover reveal"
              loading="lazy"
              decoding="async"
              width={1400}
              height={1000}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const PARTNER_BRANDS = [
  { name: "Master Builders Association WA", short: "Master Builders" },
  { name: "Zincalume® Steel", short: "Zincalume®" },
  { name: "Colorbond® Steel", short: "Colorbond®" },
  { name: "Stratco Building Products", short: "Stratco" },
];

function Approval() {
  return (
    <section id="how" aria-labelledby="approval-heading" className="py-20 md:py-28 bg-background">
      <div className="container-prose text-center max-w-2xl">
        <p className="eyebrow text-foreground/55">How It Works</p>
        <h2
          id="approval-heading"
          className="mt-5 font-display uppercase font-semibold"
          style={{ fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)", lineHeight: "1.1" }}
        >
          We Get <span className="teal-italic text-[1.1em]">Council Approval</span> For You
        </h2>
        <p className="mt-7 text-foreground/65 leading-[1.85]">
          As a registered builder in Western Australia (BRN BC105894), we're authorised to handle the
          entire compliance process — council approvals, engineering checks, and permits. Your new
          roof meets every regulation, and you won't hit a single hurdle when it's time to sell.
        </p>
        <a href="#contact" className="btn-teal btn-teal-hover mt-8">
          How It Works
        </a>
      </div>
      <div className="container-prose mt-14">
        <div className="border-t border-b border-border py-8">
          <ul
            className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center list-none p-0 m-0"
            aria-label="Accreditations and approved products"
          >
            {PARTNER_BRANDS.map((b) => (
              <li key={b.short} className="text-center">
                <span className="font-display font-semibold uppercase tracking-[0.18em] text-sm text-foreground/40 hover:text-foreground/80 transition-colors">
                  {b.short}
                </span>
                <span className="sr-only"> — {b.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Locals() {
  return (
    <section id="repairs" aria-labelledby="locals-heading" className="bg-soft">
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="relative min-h-[460px] lg:min-h-[600px]">
          <img
            src={teamImg}
            alt="Perth Roof Replacements team member — locally owned and operated roofing business in Western Australia"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            width={1200}
            height={1400}
          />
        </div>
        <div className="bg-navy text-white p-10 md:p-16 lg:p-20 flex items-center">
          <div className="max-w-md">
            <p className="eyebrow text-teal">Locally Owned &amp; Operated</p>
            <h2
              id="locals-heading"
              className="mt-6 font-display uppercase font-semibold"
              style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", lineHeight: "1.02" }}
            >
              Locals You Can
              <br />
              <span className="teal-italic text-[1.1em]">Count On</span>
            </h2>
            <div className="mt-7 h-px w-14 bg-teal" aria-hidden="true" />
            <p className="mt-7 text-white/80 leading-[1.85]">
              As a West Australian-owned business, we understand local homes, local weather, and the
              roofing standards that protect them best. Built on honesty, workmanship, and real
              accountability across Perth and surrounds.
            </p>
            <a href="#contact" className="btn-teal btn-teal-hover mt-9">Get in Touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FOOTER_LINKS = [
  { label: "Roof Replacements", href: "#replacements" },
  { label: "Roof Repairs", href: "#repairs" },
  { label: "Colorbond Roofing", href: "#replacements" },
  { label: "Asbestos Removal", href: "#replacements" },
  { label: "Council Approvals", href: "#how" },
];

function Footer() {
  return (
    <footer id="contact" role="contentinfo" className="relative bg-background pt-20 pb-6">
      <div className="container-prose">
        <div className="grid md:grid-cols-3 gap-12 pb-12 border-b border-border">
          <div>
            <Logo />
            <p className="mt-6 text-sm text-foreground/65 max-w-xs leading-[1.85]">
              Registered building roof replacement specialists serving Perth and Western Australia.
              Registered Builder BRN BC105894.
            </p>
            <div className="mt-6 flex gap-3" aria-label="Social media links">
              <a
                href="https://www.facebook.com/perthroofreplacements"
                aria-label="Perth Roof Replacements on Facebook"
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 border border-border flex items-center justify-center text-foreground/60 hover:text-teal hover:border-teal transition-colors"
              >
                <Facebook size={15} aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/perthroofreplacements"
                aria-label="Perth Roof Replacements on Instagram"
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 border border-border flex items-center justify-center text-foreground/60 hover:text-teal hover:border-teal transition-colors"
              >
                <Instagram size={15} aria-hidden="true" />
              </a>
              <a
                href="https://www.linkedin.com/company/perthroofreplacements"
                aria-label="Perth Roof Replacements on LinkedIn"
                rel="noopener noreferrer"
                target="_blank"
                className="w-9 h-9 border border-border flex items-center justify-center text-foreground/60 hover:text-teal hover:border-teal transition-colors"
              >
                <Linkedin size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <h3 className="eyebrow text-foreground/55">Quick Links</h3>
            <ul className="mt-6 space-y-3 text-sm text-foreground/75 list-none p-0 m-0">
              {FOOTER_LINKS.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-teal transition-colors">{l.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <h3 className="eyebrow text-foreground/55">Contact</h3>
            <address className="not-italic mt-6 space-y-3 text-sm text-foreground/75">
              <p className="flex items-center gap-3">
                <Mail size={14} className="text-teal shrink-0" aria-hidden="true" />
                <a href="mailto:admin@perthroof.com.au" className="hover:text-teal transition-colors">
                  admin@perthroof.com.au
                </a>
              </p>
              <p className="flex items-center gap-3">
                <Phone size={14} className="text-teal shrink-0" aria-hidden="true" />
                <a href="tel:+61861881355" className="hover:text-teal transition-colors">
                  (08) 6188 1355
                </a>
              </p>
              <p className="flex items-center gap-3">
                <MapPin size={14} className="text-teal shrink-0" aria-hidden="true" />
                <span>Perth, Western Australia</span>
              </p>
              <p className="pt-3 text-foreground/50 text-xs">
                ABN 57 682 105 015 &middot; BRN BC105894
              </p>
            </address>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-foreground/50">
          <div>
            <small>&copy; {new Date().getFullYear()} Perth Roof Replacements. All rights reserved.</small>
          </div>
          <nav aria-label="Legal links" className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-teal transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-teal transition-colors">Terms</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

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
        <div data-reveal><StyleCarousel /></div>
        <div data-reveal><Approval /></div>
        <div data-reveal><Locals /></div>
        <Footer />
      </main>
    </div>
  );
}
