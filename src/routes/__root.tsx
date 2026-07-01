import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

const SITE_URL = "https://www.ironbarkroofing.com.au";

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "RoofingContractor"],
  name: "Ironbark Roofing",
  alternateName: "Ironbark Roofing Co.",
  description:
    "Registered building roof replacement specialists serving Adelaide and South Australia. We replace tiles with Colorbond, replace existing Colorbond, and safely remove asbestos roofing.",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  image: `${SITE_URL}/og-image.jpg`,
  telephone: "YOUR_PHONE_NUMBER",
  email: "hello@youremail.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Adelaide",
    addressRegion: "SA",
    addressCountry: "AU",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -34.9285,
    longitude: 138.6007,
  },
  areaServed: [
    { "@type": "City", name: "Adelaide" },
    { "@type": "State", name: "South Australia" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
  ],
  hasCredential: [
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Registered Builder", name: "XXXXXXX" },
    { "@type": "EducationalOccupationalCredential", credentialCategory: "Master Builders Association Member" },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
  identifier: [
    { "@type": "PropertyValue", name: "ABN", value: "XX XXX XXX XXX" },
    { "@type": "PropertyValue", name: "BRN", value: "XXXXXXX" },
  ],
  priceRange: "$$",
  currenciesAccepted: "AUD",
  paymentAccepted: "Cash, Credit Card, Bank Transfer",
  sameAs: [
    "https://www.facebook.com/ironbarkroofing",
    "https://www.instagram.com/ironbarkroofing",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Roof Replacement Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Replace Tiles with Colorbond", description: "Professional replacement of existing roof tiles with premium Colorbond steel roofing." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Replace Existing Colorbond", description: "Upgrade or replace worn Colorbond roofing with new premium Colorbond steel." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Replace Asbestos with Tiles", description: "Safe asbestos roof removal and replacement with quality roof tiles." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Replace Asbestos with Colorbond", description: "Safe asbestos roof removal and replacement with Colorbond steel roofing." } },
    ],
  },
};

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do you handle council approval for roof replacements in Adelaide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. As a registered builder in South Australia (BRN XXXXXXX), Ironbark Roofing handles the entire compliance process including council approvals, engineering checks, and permits. Your new roof meets every regulation.",
      },
    },
    {
      "@type": "Question",
      name: "What types of roofing do you replace?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We replace tiles with Colorbond, replace existing Colorbond roofing, and safely remove and replace asbestos roofs with either tiles or Colorbond steel.",
      },
    },
    {
      "@type": "Question",
      name: "Are there hidden costs in your roof replacement quotes?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Ironbark Roofing provides fully-inclusive quotes based on thorough inspections. What we quote is what you pay — no hidden costs, no surprise fees.",
      },
    },
    {
      "@type": "Question",
      name: "What areas do you service?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We service Adelaide and all surrounding suburbs across South Australia.",
      },
    },
  ],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Ironbark Roofing | Registered Roofing Builders SA" },
      {
        name: "description",
        content:
          "Expert roof replacements across Adelaide. Registered builders (BRN XXXXXXX) delivering Colorbond, tile and asbestos roof replacements with full council approval. Get a free quote today.",
      },
      { name: "robots", content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" },
      { name: "author", content: "Ironbark Roofing" },
      { name: "geo.region", content: "AU-SA" },
      { name: "geo.placename", content: "Adelaide, South Australia" },
      { name: "geo.position", content: "-31.9505;115.8605" },
      { name: "ICBM", content: "-31.9505, 115.8605" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_AU" },
      { property: "og:site_name", content: "Ironbark Roofing" },
      { property: "og:title", content: "Ironbark Roofing | Registered Roofing Builders SA" },
      {
        property: "og:description",
        content:
          "Expert roof replacements across Adelaide. Registered builders delivering Colorbond, tile and asbestos roof replacements with full council approval.",
      },
      { property: "og:url", content: SITE_URL },
      {
        property: "og:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2627ee49-50e6-48eb-b414-a2913f20d3d0/id-preview-4c12cfeb--3574d406-0a8f-4a28-8bda-19e5ab67b8af.lovable.app-1782438978779.png",
      },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Ironbark Roofing — Registered Roofing Builders SA" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ironbark Roofing | Registered Roofing Builders SA" },
      {
        name: "twitter:description",
        content:
          "Expert roof replacements across Adelaide. Registered builders delivering Colorbond, tile and asbestos roof replacements with full council approval.",
      },
      {
        name: "twitter:image",
        content:
          "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/2627ee49-50e6-48eb-b414-a2913f20d3d0/id-preview-4c12cfeb--3574d406-0a8f-4a28-8bda-19e5ab67b8af.lovable.app-1782438978779.png",
      },
    ],
    links: [
      { rel: "canonical", href: SITE_URL },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Oswald:wght@400;500;600;700&family=Cormorant+Garamond:ital,wght@1,500;1,600&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(LOCAL_BUSINESS_SCHEMA),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(FAQ_SCHEMA),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-AU">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
