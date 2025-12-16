import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faUtensils,
  faBolt,
  faLocationDot,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./HowToOrder.module.scss";

type Step = {
  title: string;
  description: string;
  icon: any;
};

const steps: Step[] = [
  {
    title: "Call Us",
    description: "Call us at +1 660 429 9074.",
    icon: faPhone,
  },
  {
    title: "Tell Your Choices",
    description: "Tell us your hibachi and sushi choices.",
    icon: faUtensils,
  },
  {
    title: "We Cook Fresh & Fast",
    description: "We prepare your order fresh and fast.",
    icon: faBolt,
  },
  {
    title: "Pick Up",
    description: "Pick up at 303 Cooper Blvd Suite I, Warrensburg, MO 64093.",
    icon: faLocationDot,
  },
  {
    title: "Enjoy Anywhere",
    description: "Enjoy your meal at home, at work, or on the go.",
    icon: faFaceSmile,
  },
];

export default function HowToOrder() {
  return (
    <section className={styles.section} aria-labelledby="how-to-order-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="how-to-order-title" className={styles.title}>
              How to Order
            </h2>
            <p className={styles.subtitle}>
              Call, choose, pick up, and enjoy — simple and stress-free.
            </p>
          </div>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="tel:+16604299074">
              <FontAwesomeIcon icon={faPhone} />
              <span>Call Now to Order</span>
            </Link>

            <Link className={styles.ctaSecondary} href="/contact">
              <FontAwesomeIcon icon={faLocationDot} />
              <span>Plan Your Pick-Up</span>
            </Link>
          </div>
        </header>

        <ol className={styles.grid} aria-label="Step by step ordering">
          {steps.map((s, idx) => (
            <li key={s.title} className={styles.card}>
              <div className={styles.top}>
                <span className={styles.stepNum} aria-hidden="true">
                  {idx + 1}
                </span>
                <span className={styles.iconWrap} aria-hidden="true">
                  <FontAwesomeIcon icon={s.icon} className={styles.icon} />
                </span>
              </div>

              <p className={styles.cardTitle}>{s.title}</p>
              <p className={styles.cardDesc}>{s.description}</p>
            </li>
          ))}
        </ol>

        <div className={styles.noteBox}>
          <p className={styles.note}>
            <strong>Phone:</strong> +1 660 429 9074 &nbsp;•&nbsp;
            <strong>Address:</strong> 303 Cooper Blvd Suite I, Warrensburg, MO
            64093
          </p>
        </div>
      </div>
    </section>
  );
}