// app/menu/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import MenuBrowser from "./MenuBrowser";
import styles from "./MenuPage.module.scss";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "Kansha Menu — Hibachi & Sushi To-Go in Warrensburg, MO",
  description:
    "Simple menu, big flavor. Premium taste at friendly everyday prices. Call to order: (660) 429-9074.",
  alternates: { canonical: "/menu" },
  openGraph: {
    title: "Kansha Menu — Hibachi & Sushi To-Go in Warrensburg, MO",
    description:
      "Browse hibachi, sushi, sides, and appetizers. Fast, fresh, and made for takeout in Warrensburg, MO.",
    url: "/menu",
    type: "website",
    images: ["/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kansha Menu — Hibachi & Sushi To-Go in Warrensburg, MO",
    description:
      "Browse hibachi, sushi, sides, and appetizers. Fast, fresh, and made for takeout in Warrensburg, MO.",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function MenuPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Menu",
    name: "Kansha Menu",
    url: "https://kanshamissouri.com/menu",
    inLanguage: "en",
    provider: {
      "@type": "Restaurant",
      name: "Kansha Hibachi & Sushi",
      telephone: "+1-660-429-9074",
      address: {
        "@type": "PostalAddress",
        streetAddress: "303 Cooper Blvd Suite I",
        addressLocality: "Warrensburg",
        addressRegion: "MO",
        postalCode: "64093",
        addressCountry: "US",
      },
    },
  };

  return (
    <>
      <Script
        id="jsonld-menu"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={styles.hero} aria-labelledby="menu-hero-title">
        <div className="container">
          <h1 id="menu-hero-title" className={styles.h1}>
            Kansha Menu — Hibachi &amp; Sushi To-Go in Warrensburg, MO
          </h1>
          <p className={styles.lead}>
            Simple menu, big flavor. Premium taste at friendly everyday prices.
            Call to order: (660) 429-9074.
          </p>
        </div>
      </section>

      <MenuBrowser />
    </>
  );
}