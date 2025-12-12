// app/layout.tsx
import type { Metadata, Viewport } from "next";
import "./styles/_globals.scss";

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const siteName = "Kansha Hibachi & Sushi";
const siteDescription =
  "Premium hibachi & sushi with simple everyday prices. Fast, fresh to-go in Warrensburg, MO. Call to order: +1 660 429 9074.";

// NOTE: Update this to your real domain when ready
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kanshamissouri.com";

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
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/icon-kansha-hibachi-sushi.ico",
    shortcut: "/icon-kansha-hibachi-sushi.ico",
    apple: "/icon-kansha-hibachi-sushi.ico",
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${siteName} | Premium Taste, Simple Price, Fast & Fresh`,
    description: siteDescription,
    siteName,
    locale: "en_US",
    images: [
      {
        url: "/logo-kansha-hibachi-sushi.png",
        width: 1200,
        height: 630,
        alt: `${siteName} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteName} | Premium Taste, Simple Price, Fast & Fresh`,
    description: siteDescription,
    images: ["/logo-kansha-hibachi-sushi.png"],
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
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteName,
    url: siteUrl,
    telephone: "+16604299074",
    servesCuisine: ["Japanese", "Hibachi", "Sushi"],
    priceRange: "$6-$30",
    address: {
      "@type": "PostalAddress",
      streetAddress: "303 Cooper Blvd Suite I",
      addressLocality: "Warrensburg",
      addressRegion: "MO",
      postalCode: "64093",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div className="siteShell">
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}