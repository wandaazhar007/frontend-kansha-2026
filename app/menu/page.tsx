// app/menu/page.tsx
import type { Metadata } from "next";
import Script from "next/script";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "Menu — Hibachi & Sushi To-Go in Warrensburg, MO | Kansha",
  description:
    "Explore the Kansha Hibachi & Sushi menu: hibachi chicken, steak, shrimp, lobster, sushi, and California Roll. To-go in Warrensburg, MO. Call to order: (660) 429-9074.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Menu — Hibachi & Sushi To-Go in Warrensburg, MO | Kansha",
    description:
      "Hibachi & sushi to-go in Warrensburg, MO. See favorites like hibachi chicken, steak, shrimp, lobster, sushi, and California Roll.",
    url: "/menu",
    type: "website",
    images: ["/kansha-sushi-hibachi-hero.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu — Hibachi & Sushi To-Go in Warrensburg, MO | Kansha",
    description:
      "Hibachi & sushi to-go in Warrensburg, MO. Call to order: (660) 429-9074.",
    images: ["/kansha-sushi-hibachi-hero.png"],
  },
};

export default function MenuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Kansha Hibachi & Sushi",
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
    url: "/menu",
    hasMenu: "/menu",
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
  };

  return (
    <main id="main-content">
      <Script
        id="kansha-menu-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NOTE: UI menu list will be added next (fetch from backend). Keep SEO-friendly H1 here. */}
      <section className="container" style={{ padding: "28px 0 12px" }}>
        <h1 style={{ margin: 0 }}>
          Kansha Menu — Hibachi &amp; Sushi To-Go in Warrensburg, MO
        </h1>
        <p style={{ margin: "10px 0 0" }}>
          Browse hibachi and sushi favorites with premium taste at simple, everyday
          prices. Call to order: <a href="tel:+16604299074">(660) 429-9074</a>.
        </p>
      </section>

      {/* Menu sections/components will be rendered here (categories, products, etc.) */}
    </main>
  );
}