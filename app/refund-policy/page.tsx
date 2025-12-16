// app/refund-policy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import styles from "./RefundPolicy.module.scss";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "Refund Policy | Kansha Hibachi & Sushi",
  description:
    "Read Kansha Hibachi & Sushi Refund Policy for takeout orders: how to report issues, what we can do, and how refunds or replacements are handled.",
  alternates: { canonical: "/refund-policy" },
  openGraph: {
    title: "Refund Policy | Kansha Hibachi & Sushi",
    description:
      "Refund Policy for Kansha Hibachi & Sushi takeout orders: reporting issues, refunds, replacements, and support.",
    url: "/refund-policy",
    type: "website",
    images: ["/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Kansha Hibachi & Sushi",
    description:
      "Refund Policy for Kansha Hibachi & Sushi takeout orders: reporting issues, refunds, replacements, and support.",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function RefundPolicyPage() {
  const lastUpdated = "2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Refund Policy",
    url: "https://kanshamissouri.com/refund-policy",
    inLanguage: "en",
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: "https://kanshamissouri.com",
    },
    about: {
      "@type": "Restaurant",
      name: siteName,
      telephone: "+1-660-429-9074",
      email: "ss.kansha@gmail.com",
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
        id="jsonld-refund"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="refund-title">
          <div className="container">
            <p className={styles.kicker}>Legal</p>
            <h1 id="refund-title" className={styles.h1}>
              Refund Policy
            </h1>
            <p className={styles.lead}>
              Last updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </section>

        <section className={styles.content} aria-label="Refund policy content">
          <div className={`container ${styles.grid}`}>
            {/* TOC */}
            <aside className={styles.toc} aria-label="On this page">
              <div className={styles.tocCard}>
                <p className={styles.tocTitle}>On this page</p>
                <nav className={styles.tocNav}>
                  <a href="#overview">1) Overview</a>
                  <a href="#how-to-report">2) How to Report an Issue</a>
                  <a href="#what-we-can-do">3) What We Can Do</a>
                  <a href="#not-eligible">4) Not Eligible for Refund</a>
                  <a href="#allergies">5) Allergies &amp; Dietary Requests</a>
                  <a href="#timing">6) Timing &amp; Resolution</a>
                  <a href="#contact">7) Contact Us</a>
                </nav>
              </div>
            </aside>

            {/* ARTICLE */}
            <article className={styles.article}>
              <div className={styles.card}>
                <p className={styles.p}>
                  At {siteName}, we cook with care and we want every customer to
                  feel satisfied. Because our food is prepared fresh for takeout,
                  refunds and replacements are handled case-by-case.
                </p>
              </div>

              <section id="overview" className={styles.section}>
                <h2 className={styles.h2}>1) Overview</h2>
                <ul className={styles.ul}>
                  <li>
                    This policy applies to takeout orders placed by phone or in-person.
                  </li>
                  <li>
                    If there’s an issue with your order, please contact us as soon as possible.
                  </li>
                  <li>
                    We’ll do our best to make it right in a fair and respectful way.
                  </li>
                </ul>
              </section>

              <section id="how-to-report" className={styles.section}>
                <h2 className={styles.h2}>2) How to Report an Issue</h2>
                <p className={styles.p}>To help us resolve your issue quickly, please:</p>

                <ul className={styles.ul}>
                  <li>
                    Call us at{" "}
                    <a className={styles.link} href="tel:+16604299074">
                      (660) 429-9074
                    </a>
                    .
                  </li>
                  <li>Share your order details (items, approximate time, and what went wrong).</li>
                  <li>
                    If possible, keep the receipt and packaging so we can verify the order.
                  </li>
                  <li>
                    If the issue is about missing items, please contact us right away after pickup.
                  </li>
                </ul>

                <div className={styles.noteBox}>
                  <p className={styles.noteTitle}>Helpful tip</p>
                  <p className={styles.noteText}>
                    The sooner you contact us, the easier it is to confirm and fix the issue.
                  </p>
                </div>
              </section>

              <section id="what-we-can-do" className={styles.section}>
                <h2 className={styles.h2}>3) What We Can Do</h2>
                <p className={styles.p}>
                  Depending on the situation, we may offer one of the following:
                </p>

                <ul className={styles.ul}>
                  <li>Replace the item (remake) at no extra cost</li>
                  <li>Provide a partial refund for the affected item</li>
                  <li>Provide store credit for a future visit</li>
                </ul>

                <p className={styles.p}>
                  The option we choose depends on what happened and what is most reasonable for both sides.
                </p>
              </section>

              <section id="not-eligible" className={styles.section}>
                <h2 className={styles.h2}>4) Not Eligible for Refund</h2>
                <p className={styles.p}>In general, we may not be able to issue a refund for:</p>

                <ul className={styles.ul}>
                  <li>Food that has been fully consumed or mostly consumed</li>
                  <li>Requests made long after pickup (timing matters for fresh food)</li>
                  <li>
                    Personal taste preferences (for example, “I didn’t like the flavor”) after the order was made correctly
                  </li>
                  <li>
                    Issues caused by improper handling after pickup (for example, leaving food out too long)
                  </li>
                </ul>
              </section>

              <section id="allergies" className={styles.section}>
                <h2 className={styles.h2}>5) Allergies &amp; Dietary Requests</h2>
                <ul className={styles.ul}>
                  <li>
                    Please inform our staff of allergies or dietary restrictions before ordering.
                  </li>
                  <li>
                    Our kitchen may handle common allergens, and cross-contact may occur.
                  </li>
                  <li>
                    If we miss a clearly communicated allergy request, please contact us immediately and we will review it.
                  </li>
                </ul>
              </section>

              <section id="timing" className={styles.section}>
                <h2 className={styles.h2}>6) Timing &amp; Resolution</h2>
                <ul className={styles.ul}>
                  <li>Most issues can be resolved fastest by calling us right away.</li>
                  <li>
                    If a refund is approved, the timing may depend on the payment method used at the restaurant.
                  </li>
                  <li>
                    We may ask simple follow-up questions to confirm the issue and protect against mistakes or misuse.
                  </li>
                </ul>
              </section>

              <section id="contact" className={styles.section}>
                <h2 className={styles.h2}>7) Contact Us</h2>

                <div className={styles.contactCard}>
                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Business</span>
                    <span className={styles.contactValue}>{siteName}</span>
                  </div>

                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Address</span>
                    <span className={styles.contactValue}>
                      303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States
                    </span>
                  </div>

                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Phone</span>
                    <a className={styles.contactLink} href="tel:+16604299074">
                      (660) 429-9074
                    </a>
                  </div>

                  <div className={styles.contactRow}>
                    <span className={styles.contactLabel}>Email</span>
                    <a className={styles.contactLink} href="mailto:ss.kansha@gmail.com">
                      ss.kansha@gmail.com
                    </a>
                  </div>
                </div>
              </section>

              <div className={styles.bottomNote} aria-label="End note">
                <p className={styles.small}>
                  Thank you for giving us a chance to make it right — we appreciate you.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}