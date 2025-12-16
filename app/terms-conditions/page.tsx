// app/terms-conditions/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import styles from "./TermsConditions.module.scss";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "Terms & Conditions | Kansha Hibachi & Sushi",
  description:
    "Read Kansha Hibachi & Sushi Terms & Conditions for website use, ordering, pricing, allergies, third-party services, and policies.",
  alternates: { canonical: "/terms-conditions" },
  openGraph: {
    title: "Terms & Conditions | Kansha Hibachi & Sushi",
    description:
      "Website Terms & Conditions for Kansha Hibachi & Sushi: ordering, pricing, allergies, accuracy, and policies.",
    url: "/terms-conditions",
    type: "website",
    images: ["/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | Kansha Hibachi & Sushi",
    description:
      "Website Terms & Conditions for Kansha Hibachi & Sushi: ordering, pricing, allergies, accuracy, and policies.",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function TermsConditionsPage() {
  const lastUpdated = "2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    url: "https://kanshamissouri.com/terms-conditions",
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
        id="jsonld-terms"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="terms-title">
          <div className="container">
            <p className={styles.kicker}>Legal</p>
            <h1 id="terms-title" className={styles.h1}>
              Terms &amp; Conditions
            </h1>
            <p className={styles.lead}>
              Last updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </section>

        <section className={styles.content} aria-label="Terms content">
          <div className={`container ${styles.grid}`}>
            {/* TOC */}
            <aside className={styles.toc} aria-label="On this page">
              <div className={styles.tocCard}>
                <p className={styles.tocTitle}>On this page</p>
                <nav className={styles.tocNav}>
                  <a href="#about-service">1) About Our Service</a>
                  <a href="#ordering">2) Ordering &amp; Availability</a>
                  <a href="#pricing">3) Pricing &amp; Payments</a>
                  <a href="#accuracy">4) Accuracy of Information</a>
                  <a href="#allergies">5) Food Allergies &amp; Dietary Info</a>
                  <a href="#promotions">6) Promotions &amp; Specials</a>
                  <a href="#ip">7) Intellectual Property</a>
                  <a href="#acceptable-use">8) Acceptable Use</a>
                  <a href="#third-party">9) Third-Party Links &amp; Services</a>
                  <a href="#disclaimer">10) Disclaimer</a>
                  <a href="#liability">11) Limitation of Liability</a>
                  <a href="#privacy">12) Privacy</a>
                  <a href="#changes">13) Changes to These Terms</a>
                  <a href="#contact">14) Contact Us</a>
                </nav>
              </div>
            </aside>

            {/* ARTICLE */}
            <article className={styles.article}>
              <div className={styles.card}>
                <p className={styles.p}>
                  Welcome to {siteName} (“Kansha,” “we,” “our,” “us”). By
                  accessing or using our website, you agree to these Terms &amp;
                  Conditions. If you do not agree, please do not use the
                  website.
                </p>
              </div>

              <section id="about-service" className={styles.section}>
                <h2 className={styles.h2}>1) About Our Service</h2>
                <ul className={styles.ul}>
                  <li>
                    {siteName} is a hibachi and sushi express concept focused on
                    takeout.
                  </li>
                  <li>
                    Our website provides information about our menu, location,
                    hours, and how to order.
                  </li>
                  <li>Orders are typically placed by phone.</li>
                </ul>
              </section>

              <section id="ordering" className={styles.section}>
                <h2 className={styles.h2}>2) Ordering &amp; Availability</h2>
                <ul className={styles.ul}>
                  <li>
                    To place an order, please call:{" "}
                    <a className={styles.link} href="tel:+16604299074">
                      (660) 429-9074
                    </a>
                    .
                  </li>
                  <li>
                    Menu items, prices, portions, and availability may change
                    without notice.
                  </li>
                  <li>
                    We may limit quantities or decline orders in certain
                    situations (for example, high demand, product availability,
                    or safety).
                  </li>
                </ul>
              </section>

              <section id="pricing" className={styles.section}>
                <h2 className={styles.h2}>3) Pricing &amp; Payments</h2>
                <ul className={styles.ul}>
                  <li>
                    Prices shown on the website are for general reference and
                    may be updated at any time.
                  </li>
                  <li>
                    Final pricing is confirmed at the time of order or purchase.
                  </li>
                  <li>Taxes and any applicable fees may apply.</li>
                </ul>
              </section>

              <section id="accuracy" className={styles.section}>
                <h2 className={styles.h2}>4) Accuracy of Information</h2>
                <ul className={styles.ul}>
                  <li>
                    We work hard to keep website information accurate and up to
                    date.
                  </li>
                  <li>
                    We do not guarantee that all content is always complete,
                    current, or error-free.
                  </li>
                  <li>
                    If you notice an issue, please contact us so we can correct
                    it.
                  </li>
                </ul>
              </section>

              <section id="allergies" className={styles.section}>
                <h2 className={styles.h2}>5) Food Allergies &amp; Dietary Info</h2>
                <ul className={styles.ul}>
                  <li>
                    Our kitchen may handle common allergens (such as fish,
                    shellfish, soy, eggs, wheat, and sesame).
                  </li>
                  <li>Cross-contact may occur even with careful preparation.</li>
                  <li>
                    If you have allergies or dietary restrictions, you must
                    inform our staff before ordering.
                  </li>
                  <li>
                    Ingredient details may vary depending on supply and seasonal
                    changes.
                  </li>
                </ul>
              </section>

              <section id="promotions" className={styles.section}>
                <h2 className={styles.h2}>6) Promotions &amp; Specials</h2>
                <p className={styles.p}>
                  Promotions, discounts, or specials (if offered) may have:
                </p>
                <ul className={styles.ul}>
                  <li>Specific time limits</li>
                  <li>Limited availability</li>
                  <li>Additional terms (for example, not combinable with other offers)</li>
                </ul>
                <p className={styles.p}>
                  We may change or end promotions at any time.
                </p>
              </section>

              <section id="ip" className={styles.section}>
                <h2 className={styles.h2}>7) Intellectual Property</h2>
                <ul className={styles.ul}>
                  <li>
                    All website content is owned by Kansha or used with
                    permission, including:
                    <ul className={styles.ulInner}>
                      <li>Logo, branding, images, and designs</li>
                      <li>Text, layout, and visual style</li>
                    </ul>
                  </li>
                  <li>
                    You may not copy, reproduce, modify, or distribute our
                    content without written permission.
                  </li>
                </ul>
              </section>

              <section id="acceptable-use" className={styles.section}>
                <h2 className={styles.h2}>8) Acceptable Use</h2>
                <p className={styles.p}>You agree not to:</p>
                <ul className={styles.ul}>
                  <li>Use the website in a way that violates any law or regulation</li>
                  <li>Attempt to break, damage, or interfere with the website or its security</li>
                  <li>Scrape or automatically collect data without permission</li>
                  <li>Upload or transmit malicious code, spam, or harmful content</li>
                </ul>
              </section>

              <section id="third-party" className={styles.section}>
                <h2 className={styles.h2}>9) Third-Party Links &amp; Services</h2>
                <ul className={styles.ul}>
                  <li>
                    Our website may include links or embedded services (for
                    example, Google Maps).
                  </li>
                  <li>
                    We are not responsible for third-party websites, content,
                    policies, or practices.
                  </li>
                  <li>
                    Use of third-party services is at your own risk and subject
                    to their terms.
                  </li>
                </ul>
              </section>

              <section id="disclaimer" className={styles.section}>
                <h2 className={styles.h2}>10) Disclaimer</h2>
                <ul className={styles.ul}>
                  <li>The website is provided “as is” and “as available.”</li>
                  <li>
                    We do not guarantee uninterrupted access, error-free
                    operation, or perfect accuracy at all times.
                  </li>
                  <li>
                    To the fullest extent permitted by law, we disclaim
                    warranties of any kind (express or implied).
                  </li>
                </ul>
              </section>

              <section id="liability" className={styles.section}>
                <h2 className={styles.h2}>11) Limitation of Liability</h2>
                <p className={styles.p}>Kansha is not liable for damages arising from:</p>
                <ul className={styles.ul}>
                  <li>Use or inability to use the website</li>
                  <li>Reliance on website information</li>
                  <li>Delays, interruptions, or technical issues</li>
                </ul>
                <p className={styles.p}>
                  This limitation applies to the maximum extent permitted by law.
                </p>
              </section>

              <section id="privacy" className={styles.section}>
                <h2 className={styles.h2}>12) Privacy</h2>
                <ul className={styles.ul}>
                  <li>Your use of this website may also be governed by a Privacy Policy (if published).</li>
                  <li>
                    If you contact us by email, you may share personal
                    information voluntarily.
                  </li>
                </ul>
              </section>

              <section id="changes" className={styles.section}>
                <h2 className={styles.h2}>13) Changes to These Terms</h2>
                <ul className={styles.ul}>
                  <li>We may update these Terms &amp; Conditions at any time.</li>
                  <li>Updates will be posted on this page with a revised “Last updated” date.</li>
                  <li>Continued use of the website after updates means you accept the new terms.</li>
                </ul>
              </section>

              <section id="contact" className={styles.section}>
                <h2 className={styles.h2}>14) Contact Us</h2>

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
                  Thank you for visiting Kansha — we appreciate you.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}