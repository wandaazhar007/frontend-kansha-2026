// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./styles/_globals.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const siteName = "Kansha Hibachi & Sushi";
const siteDescription =
  "Premium hibachi & sushi with simple everyday prices. Fast, fresh to-go in Warrensburg, MO. Call to order: +1 660 429 9074.";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://kanshamissouri.com";

const ogImagePath = "/og-kansha.jpg"; // in /public
const ogImageAbs = `${siteUrl}${ogImagePath}`;

// Existing icon (ico). If you later add an apple touch icon PNG,
// create: /public/apple-touch-icon.png (180x180) and keep the line below.
const faviconIco = "/icon-kansha-hibachi-sushi.ico";
const appleTouchIconPng = "/apple-touch-icon.png"; // OPTIONAL if you add the file

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | Premium Taste, Simple Price, Fast & Fresh`,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Kansha Hibachi and Sushi",
    "Kansha Hibachi & Sushi Warrensburg",
    "Hibachi Express Warrensburg MO",
    "Sushi Warrensburg MO",
    "Japanese takeout Warrensburg",
    "Affordable hibachi near me",
    "California Roll Warrensburg",
    "Fast hibachi and sushi",
    "Hibachi to-go Warrensburg",
    "Sushi to-go Warrensburg",
  ],
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: faviconIco, type: "image/x-icon" }],
    shortcut: faviconIco,
    // Keep ICO as fallback; prefer PNG if/when available
    apple: [
      { url: appleTouchIconPng, type: "image/png" },
      { url: faviconIco, type: "image/x-icon" },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: `${siteName} | Premium Taste, Simple Price, Fast & Fresh`,
    description: siteDescription,
    siteName,
    locale: "en_US",
    images: [
      {
        url: ogImageAbs,
        width: 1200,
        height: 630,
        alt: `${siteName} — Hibachi & Sushi To-Go`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Taste, Simple Price, Fast & Fresh`,
    description: siteDescription,
    images: [ogImageAbs],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffe08a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const restaurantJsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    "@id": `${siteUrl}/#restaurant`,
    name: siteName,
    url: siteUrl,
    image: [
      `${siteUrl}${ogImagePath}`,
      `${siteUrl}/kansha-sushi-hibachi-hero.png`,
      `${siteUrl}/logo-kansha-hibachi-sushi.png`,
    ],
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
    geo: {
      "@type": "GeoCoordinates",
      // NOTE: isi dengan koordinat real kalau kamu punya (lebih kuat untuk local SEO)
      // latitude: 38.7623,
      // longitude: -93.7367,
    },
    hasMap: "https://goo.gl/maps/V9qXQh6mKFZmb15Z7",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Monday",
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Tuesday",
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Wednesday",
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Thursday",
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Friday",
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "11:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "11:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/kanshahibachiexpress/",
      "https://www.instagram.com/kansha_express/",
      "https://goo.gl/maps/V9qXQh6mKFZmb15Z7",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* Sitewide JSON-LD */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </head>

      <body>
        <div className="siteShell">
          <Navbar />
          <main className="main" id="main-content">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}