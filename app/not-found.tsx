// app/not-found.tsx
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faUtensils,
  faPhone,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <main id="main-content" className={styles.page} aria-labelledby="nf-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <div className={styles.brandRow}>
            <span className={styles.logoWrap} aria-hidden="true">
              <Image
                src="/logo-kansha-hibachi-sushi.png"
                alt=""
                width={52}
                height={52}
                priority
              />
            </span>

            <div className={styles.brandText}>
              <p className={styles.kicker}>404 • Page Not Found</p>
              <h1 id="nf-title" className={styles.h1}>
                Oops — this page doesn’t exist.
              </h1>
              <p className={styles.lead}>
                The link may be outdated, or the address might be typed wrong.
                Let’s get you back to something tasty.
              </p>
            </div>
          </div>

          <div className={styles.actions} aria-label="Helpful links">
            <Link className={styles.primaryBtn} href="/">
              <FontAwesomeIcon icon={faHouse} />
              <span>Back to Home</span>
            </Link>

            <Link className={styles.secondaryBtn} href="/menu">
              <FontAwesomeIcon icon={faUtensils} />
              <span>View Menu</span>
            </Link>

            <a className={styles.ghostBtn} href="tel:+16604299074">
              <FontAwesomeIcon icon={faPhone} />
              <span>Call to Order</span>
            </a>

            <a
              className={styles.ghostBtn}
              href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLocationArrow} />
              <span>Get Directions</span>
            </a>
          </div>

          <div className={styles.divider} />

          <div className={styles.help}>
            <p className={styles.helpTitle}>Popular pages</p>
            <ul className={styles.helpLinks}>
              <li>
                <Link href="/about">About Kansha</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-conditions">Terms &amp; Conditions</Link>
              </li>
            </ul>
          </div>

          <p className={styles.smallNote}>
            Address: 303 Cooper Blvd Suite I, Warrensburg, MO 64093 • Phone:{" "}
            <a className={styles.inlineLink} href="tel:+16604299074">
              (660) 429-9074
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}