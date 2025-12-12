// app/page.tsx
import type { Metadata } from "next";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "Premium Hibachi & Sushi, Simple Everyday Price",
  description:
    "Fresh from the grill and sushi bar to your box — fast, tasty, and friendly for your wallet. Call to order: +1 660 429 9074.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Premium Hibachi & Sushi, Simple Everyday Price",
    description:
      "Fresh from the grill and sushi bar to your box — fast, tasty, and friendly for your wallet.",
    url: "/",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function HomePage() {
  return (
    <>
      {/*<HeroMain/> */}
    </>
  );
}