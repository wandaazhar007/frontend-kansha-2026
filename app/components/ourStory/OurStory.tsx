import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faBagShopping,
  faListCheck,
  faBoxOpen,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./OurStory.module.scss";

const bullets = [
  {
    title: "Hibachi express, made for to-go",
    desc: "A takeout-focused concept that keeps ordering simple and service fast.",
    icon: faBagShopping,
  },
  {
    title: "A small, focused menu",
    desc: "Only the most-loved hibachi and sushi options — easy to choose when you’re hungry.",
    icon: faListCheck,
  },
  {
    title: "Simple packaging that keeps prices friendly",
    desc: "Plain boxes and mika containers so we can focus our cost on flavor and freshness.",
    icon: faBoxOpen,
  },
  {
    title: "One clear promise",
    desc: "Premium Taste, Simple Price, Fast & Fresh.",
    icon: faStar,
  },
];

export default function OurStory() {
  return (
    <section className={styles.section} aria-labelledby="our-story-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>
            <FontAwesomeIcon icon={faCircleQuestion} aria-hidden="true" />
            <span>Our Story</span>
          </p>

          <h2 id="our-story-title" className={styles.title}>
            Why Kansha Was Created
          </h2>

          <p className={styles.subtitle}>
            We started with one simple question:{" "}
            <span>
              “Why should premium Japanese food feel like a luxury that only
              some people can enjoy?”
            </span>
          </p>
        </header>

        <div className={styles.contentGrid}>
          <div className={styles.copyBox}>
            <p className={styles.copy}>
              We saw a lot of people who loved hibachi and sushi, but only ate
              it on special occasions—birthdays, anniversaries, or when they had
              “extra money.” Real life is full of normal days: work, school,
              bills, tired evenings, and quick meals in between.
            </p>

            <p className={styles.copy}>
              So we built Kansha Hibachi &amp; Sushi as a warm, affordable hibachi
              express—focused on to-go orders and made with gratitude. We keep
              things simple on purpose: clear choices, consistent cooking, and
              honest pricing, so you can enjoy that “treat yourself” feeling
              anytime.
            </p>
          </div>

          <ul className={styles.bullets} aria-label="Kansha core points">
            {bullets.map((b) => (
              <li key={b.title} className={styles.bulletCard}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <FontAwesomeIcon icon={b.icon} className={styles.icon} />
                </span>
                <div className={styles.bulletText}>
                  <p className={styles.bulletTitle}>{b.title}</p>
                  <p className={styles.bulletDesc}>{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}