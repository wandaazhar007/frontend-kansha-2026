// app/about/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

import HeroAbout from "../components/heroAbout/HeroAbout";
import OurStory from "../components/ourStory/OurStory";
import WarmMessage from "../components/warmMessage/WarmMessage";
import CtaClosing from "../components/ctaClosing/CtaClosing";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "About Kansha — Made with Gratitude, Served with a Smile",
  description:
    "Kansha Hibachi & Sushi is built on gratitude: premium hibachi and sushi to-go with honest, everyday prices in Warrensburg, MO.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Kansha — Made with Gratitude, Served with a Smile",
    description:
      "Learn why Kansha was created and how we serve premium hibachi & sushi to-go with simple, everyday prices in Warrensburg, MO.",
    url: "/about",
    type: "website",
    images: ["/owner-kansha-hibachi.jpeg", "/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kansha — Made with Gratitude, Served with a Smile",
    description:
      "Premium hibachi & sushi to-go with honest, everyday prices in Warrensburg, MO.",
    images: ["/owner-kansha-hibachi.jpeg"],
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Kansha Hibachi & Sushi",
    description:
      "Learn why Kansha was created and how we serve premium hibachi & sushi to-go with honest, everyday prices in Warrensburg, MO.",
    url: "/about",
    mainEntity: {
      "@type": "Restaurant",
      name: "Kansha Hibachi & Sushi",
      url: "/",
      image: ["/owner-kansha-hibachi.jpeg", "/logo-kansha-hibachi-sushi.png"],
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
    },
  };

  return (
    <main id="main-content">
      <Script
        id="kansha-about-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <HeroAbout />
      <OurStory />
      <WarmMessage />
      <CtaClosing />
    </main>
  );
}