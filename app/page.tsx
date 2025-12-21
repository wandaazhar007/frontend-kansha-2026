// app/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroMain from "./components/heroMain/HeroMain";
import FeaturedFavorites from "./components/featuredFavorites/FeaturedFavorites";
import HighlightStrip from "./components/highlightStrip/HighlightStrip";
import HowToOrder from "./components/howToOrder/HowToOrder";
import WhyPeopleLove from "./components/whyPeopleLove/WhyPeopleLove";
import LocationTeaser from "./components/locationTeaser/LocationTeaser";

const siteName = "Kansha Hibachi & Sushi";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kanshamissouri.com";

const ogImage = `${siteUrl}/og-kansha.jpg`;

export const metadata: Metadata = {
  title: "Premium Hibachi & Sushi, Simple Everyday Price",
  description:
    "Fresh from the grill and sushi bar to your box — fast, tasty, and friendly for your wallet. Call to order: (660) 429-9074.",
  alternates: { canonical: siteUrl },
  openGraph: {
    title: "Premium Hibachi & Sushi, Simple Everyday Price",
    description:
      "Fresh from the grill and sushi bar to your box — fast, tasty, and friendly for your wallet.",
    url: siteUrl,
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Kansha Hibachi & Sushi — Hibachi & Sushi To-Go",
      },
    ],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Hibachi & Sushi, Simple Everyday Price",
    description:
      "Premium hibachi & sushi to-go in Warrensburg, MO. Call to order: (660) 429-9074.",
    images: [ogImage],
  },
};

export default function HomePage() {
  const homeWebPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Home",
    url: siteUrl,
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: siteUrl,
    },
    about: {
      "@type": "Restaurant",
      name: siteName,
      url: siteUrl,
    },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: ogImage,
      width: 1200,
      height: 630,
    },
  };

  return (
    <>
      <Script
        id="jsonld-home-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeWebPageJsonLd) }}
      />

      <HeroMain />
      <FeaturedFavorites />
      <HighlightStrip />
      <HowToOrder />
      <WhyPeopleLove />
      <LocationTeaser />
    </>
  );
}