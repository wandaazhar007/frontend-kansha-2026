// app/privacy-policy/page.tsx
import type { Metadata } from "next";
import Script from "next/script";
import styles from "./PrivacyPolicy.module.scss";

const siteName = "Kansha Hibachi & Sushi";

export const metadata: Metadata = {
  title: "Privacy Policy | Kansha Hibachi & Sushi",
  description:
    "Read Kansha Hibachi & Sushi Privacy Policy: what data we collect, how we use it, cookies, third-party services, and your privacy choices.",
  alternates: { canonical: "/privacy-policy" },
  openGraph: {
    title: "Privacy Policy | Kansha Hibachi & Sushi",
    description:
      "Privacy Policy for Kansha Hibachi & Sushi: data collection, cookies, third-party services, and your choices.",
    url: "/privacy-policy",
    type: "website",
    images: ["/logo-kansha-hibachi-sushi.png"],
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Kansha Hibachi & Sushi",
    description:
      "Privacy Policy for Kansha Hibachi & Sushi: data collection, cookies, third-party services, and your choices.",
    images: ["/logo-kansha-hibachi-sushi.png"],
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "2026";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    url: "https://kanshamissouri.com/privacy-policy",
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
        id="jsonld-privacy"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main id="main-content" className={styles.page}>
        <section className={styles.hero} aria-labelledby="privacy-title">
          <div className="container">
            <p className={styles.kicker}>Legal</p>
            <h1 id="privacy-title" className={styles.h1}>
              Privacy Policy
            </h1>
            <p className={styles.lead}>
              Last updated: <strong>{lastUpdated}</strong>
            </p>
          </div>
        </section>

        <section className={styles.content} aria-label="Privacy policy content">
          <div className={`container ${styles.grid}`}>
            {/* TOC */}
            <aside className={styles.toc} aria-label="On this page">
              <div className={styles.tocCard}>
                <p className={styles.tocTitle}>On this page</p>
                <nav className={styles.tocNav}>
                  <a href="#overview">1) Overview</a>
                  <a href="#data-we-collect">2) Information We Collect</a>
                  <a href="#how-we-use">3) How We Use Information</a>
                  <a href="#cookies">4) Cookies &amp; Analytics</a>
                  <a href="#third-party">5) Third-Party Services</a>
                  <a href="#sharing">6) Sharing Your Information</a>
                  <a href="#retention">7) Data Retention</a>
                  <a href="#security">8) Security</a>
                  <a href="#your-choices">9) Your Choices</a>
                  <a href="#children">10) Children’s Privacy</a>
                  <a href="#changes">11) Updates to This Policy</a>
                  <a href="#contact">12) Contact Us</a>
                </nav>
              </div>
            </aside>

            {/* ARTICLE */}
            <article className={styles.article}>
              <div className={styles.card}>
                <p className={styles.p}>
                  This Privacy Policy explains how {siteName} (“Kansha,” “we,”
                  “our,” “us”) collects, uses, and protects information when you
                  visit our website. By using our website, you agree to this
                  policy.
                </p>
              </div>

              <section id="overview" className={styles.section}>
                <h2 className={styles.h2}>1) Overview</h2>
                <ul className={styles.ul}>
                  <li>
                    Our website is mainly informational (menu, location, hours,
                    and how to order).
                  </li>
                  <li>
                    Orders are typically placed by phone, not directly through
                    the website.
                  </li>
                  <li>
                    We aim to collect only what we need to operate and improve
                    the website experience.
                  </li>
                </ul>
              </section>

              <section id="data-we-collect" className={styles.section}>
                <h2 className={styles.h2}>2) Information We Collect</h2>

                <p className={styles.p}>We may collect the following types of information:</p>

                <ul className={styles.ul}>
                  <li>
                    Information you provide voluntarily:
                    <ul className={styles.ulInner}>
                      <li>Name and email (if you contact us by email)</li>
                      <li>Any message or details you include in your email</li>
                    </ul>
                  </li>

                  <li>
                    Basic usage / device information (automatically):
                    <ul className={styles.ulInner}>
                      <li>Pages you visit and approximate time on page</li>
                      <li>Device type, browser type, and operating system</li>
                      <li>General location (approximate, based on IP address)</li>
                      <li>Referral source (how you found our website)</li>
                    </ul>
                  </li>

                  <li>
                    We do not intentionally collect:
                    <ul className={styles.ulInner}>
                      <li>Payment card information through this website</li>
                      <li>Sensitive personal information (unless you send it voluntarily)</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section id="how-we-use" className={styles.section}>
                <h2 className={styles.h2}>3) How We Use Information</h2>
                <p className={styles.p}>We use information to:</p>

                <ul className={styles.ul}>
                  <li>Respond to your questions, feedback, or requests</li>
                  <li>Maintain and improve website performance and usability</li>
                  <li>Understand which pages are helpful (menu, hours, location)</li>
                  <li>Keep our website secure and prevent abuse</li>
                </ul>
              </section>

              <section id="cookies" className={styles.section}>
                <h2 className={styles.h2}>4) Cookies &amp; Analytics</h2>

                <ul className={styles.ul}>
                  <li>
                    Our website may use cookies or similar technologies to
                    support functionality and analytics.
                  </li>
                  <li>
                    Cookies are small files stored on your device that help the
                    website remember basic settings and understand traffic
                    patterns.
                  </li>
                  <li>
                    You can control cookies in your browser settings (block,
                    delete, or limit cookies). Some site features may work less
                    smoothly if cookies are disabled.
                  </li>
                </ul>

                <div className={styles.noteBox}>
                  <p className={styles.noteTitle}>Optional note about analytics</p>
                  <p className={styles.noteText}>
                    If we use analytics tools (for example, to understand traffic and improve
                    pages), those tools may collect basic usage data such as page views and
                    device information.
                  </p>
                </div>
              </section>

              <section id="third-party" className={styles.section}>
                <h2 className={styles.h2}>5) Third-Party Services</h2>

                <p className={styles.p}>Our website may include third-party services such as:</p>
                <ul className={styles.ul}>
                  <li>Google Maps embeds for location and directions</li>
                  <li>External links to third-party websites or platforms</li>
                </ul>

                <p className={styles.p}>
                  These third parties have their own privacy policies. We are not responsible
                  for how third-party services collect or use information.
                </p>
              </section>

              <section id="sharing" className={styles.section}>
                <h2 className={styles.h2}>6) Sharing Your Information</h2>

                <p className={styles.p}>We do not sell your personal information.</p>

                <p className={styles.p}>We may share information only when needed:</p>
                <ul className={styles.ul}>
                  <li>
                    With service providers that help operate the website (for example, hosting
                    or analytics), if used
                  </li>
                  <li>To comply with legal requirements or protect our rights and safety</li>
                  <li>To investigate or prevent fraud, abuse, or security issues</li>
                </ul>
              </section>

              <section id="retention" className={styles.section}>
                <h2 className={styles.h2}>7) Data Retention</h2>
                <ul className={styles.ul}>
                  <li>
                    We keep contact messages (emails) as long as needed to respond and for
                    basic record-keeping.
                  </li>
                  <li>
                    Website analytics data (if used) is typically kept for a limited period set
                    by the analytics provider.
                  </li>
                </ul>
              </section>

              <section id="security" className={styles.section}>
                <h2 className={styles.h2}>8) Security</h2>
                <ul className={styles.ul}>
                  <li>
                    We take reasonable steps to protect information from unauthorized access,
                    misuse, or disclosure.
                  </li>
                  <li>
                    No method of transmission or storage is 100% secure, so we cannot guarantee
                    absolute security.
                  </li>
                </ul>
              </section>

              <section id="your-choices" className={styles.section}>
                <h2 className={styles.h2}>9) Your Choices</h2>
                <ul className={styles.ul}>
                  <li>
                    Cookies: You can manage cookies in your browser settings (block or delete).
                  </li>
                  <li>
                    Email: If you email us, you can request that we update or delete your message
                    history if applicable and legally allowed.
                  </li>
                  <li>
                    Marketing: We do not run email marketing lists through this website unless we
                    explicitly add that feature in the future.
                  </li>
                </ul>
              </section>

              <section id="children" className={styles.section}>
                <h2 className={styles.h2}>10) Children’s Privacy</h2>
                <ul className={styles.ul}>
                  <li>
                    Our website is not intended for children under 13.
                  </li>
                  <li>
                    We do not knowingly collect personal information from children.
                  </li>
                  <li>
                    If you believe a child has provided personal information, contact us and we
                    will take appropriate steps.
                  </li>
                </ul>
              </section>

              <section id="changes" className={styles.section}>
                <h2 className={styles.h2}>11) Updates to This Policy</h2>
                <ul className={styles.ul}>
                  <li>We may update this Privacy Policy from time to time.</li>
                  <li>Updates will be posted on this page with a new “Last updated” date.</li>
                  <li>Continued use of the website means you accept the updated policy.</li>
                </ul>
              </section>

              <section id="contact" className={styles.section}>
                <h2 className={styles.h2}>12) Contact Us</h2>

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
                  We’re grateful you’re here — Kansha means gratitude.
                </p>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}