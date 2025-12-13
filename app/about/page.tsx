// app/about/page.tsx
import type { Metadata } from "next";

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
    images: ["/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Kansha — Made with Gratitude, Served with a Smile",
    description:
      "Premium hibachi & sushi to-go with honest, everyday prices in Warrensburg, MO.",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroAbout />
      <OurStory />
      <WarmMessage />
      <CtaClosing />
    </>
  );
}