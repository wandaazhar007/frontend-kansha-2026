import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faTag,
  faBolt,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./HighlightStrip.module.scss";

type StripItem = {
  title: string;
  description: string;
  icon: any;
};

const items: StripItem[] = [
  {
    title: "Premium Taste",
    description:
      "Enjoy flavors usually found in high-end Japanese restaurants at friendly, simple prices.",
    icon: faStar,
  },
  {
    title: "Simple Price",
    description:
      "Meals from around $6–$30, comfortable for lunch, dinner, or sharing.",
    icon: faTag,
  },
  {
    title: "Fast & Fresh",
    description:
      "Call ahead, pick up hot hibachi or chilled sushi without a long wait.",
    icon: faBolt,
  },
  {
    title: "To-Go Friendly",
    description:
      "Easy takeout and convenient pick-up at 303 Cooper Blvd Suite I, Warrensburg, MO 64093.",
    icon: faBagShopping,
  },
];

export default function HighlightStrip() {
  return (
    <section className={styles.strip} aria-labelledby="usp-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="usp-title" className={styles.title}>
            Premium Taste. Simple Price. Fast & Fresh. To-Go Friendly.
          </h2>
        </header>

        <ul className={styles.grid} aria-label="Kansha highlights">
          {items.map((item) => (
            <li key={item.title} className={styles.card}>
              <span className={styles.iconWrap} aria-hidden="true">
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
              </span>

              <div className={styles.content}>
                <p className={styles.cardTitle}>
                  <FontAwesomeIcon icon={item.icon} className={styles.iconTitle} />
                  {item.title}
                </p>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}