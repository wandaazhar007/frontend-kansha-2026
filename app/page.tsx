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

export const metadata: Metadata = {
  title: "Premium Hibachi & Sushi, Simple Everyday Price",
  description:
    "Fresh from the grill and sushi bar to your box — fast, tasty, and friendly for your wallet. Call to order: (660) 429-9074.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Premium Hibachi & Sushi, Simple Everyday Price",
    description:
      "Fresh from the grill and sushi bar to your box — fast, tasty, and friendly for your wallet.",
    url: "/",
    type: "website",
    images: ["/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Premium Hibachi & Sushi, Simple Everyday Price",
    description:
      "Premium hibachi & sushi to-go in Warrensburg, MO. Call to order: (660) 429-9074.",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Kansha Hibachi & Sushi",
    url: "/",
    image: ["/kansha-sushi-hibachi-hero.png", "/logo-kansha-hibachi-sushi.png"],
    telephone: "+1-660-429-9074",
    email: "ss.kansha@gmail.com",
    priceRange: "$6 - $30",
    servesCuisine: ["Japanese", "Hibachi", "Sushi"],
    address: {
      "@type": "PostalAddress",
      streetAddress: "303 Cooper Blvd Suite I",
      addressLocality: "Warrensburg",
      addressRegion: "MO",
      postalCode: "64093",
      addressCountry: "US",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "16:00",
        closes: "21:00",
      },
      ...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
        (d) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: d,
          opens: "11:00",
          closes: "14:30",
        })
      ),
      ...["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"].map(
        (d) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: d,
          opens: "16:00",
          closes: "21:00",
        })
      ),
    ],
    hasMenu: "/menu",
    sameAs: [],
  };

  return (
    <main id="main-content">
      <Script
        id="kansha-home-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroMain />
      <FeaturedFavorites />
      <HighlightStrip />
      <HowToOrder />
      <WhyPeopleLove />
      <LocationTeaser />
    </main>
  );
}