import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./Footer.module.scss";

export default function Footer() {
  const year = 2025;

  return (
    <footer className={styles.footer} aria-label="Site footer">
      <div className={`container ${styles.inner}`}>
        {/* Top */}
        <div className={styles.top}>
          {/* Brand */}
          <div className={styles.brandCol}>
            <Link
              href="/"
              className={styles.brand}
              aria-label="Go to Kansha Hibachi & Sushi home"
            >
              <span className={styles.logoWrap} aria-hidden="true">
                <Image
                  src="/logo-kansha-hibachi-sushi.png"
                  alt=""
                  width={44}
                  height={44}
                />
              </span>

              <span className={styles.brandText}>
                <span className={styles.brandName}>Kansha Hibachi & Sushi</span>
                <span className={styles.brandTagline}>
                  Premium Taste, Simple Price, Fast & Fresh
                </span>
              </span>
            </Link>

            <p className={styles.brandDesc}>
              Premium hibachi and sushi to-go in Warrensburg — fast, fresh, and
              friendly for your wallet.
            </p>

            <div className={styles.quickRow}>
              <Link className={styles.pill} href="tel:+16604299074">
                <FontAwesomeIcon icon={faPhone} />
                <span>+1 660 429 9074</span>
              </Link>

              <Link className={styles.pillGhost} href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank">
                <FontAwesomeIcon icon={faLocationArrow} />
                <span>Get Directions</span>
              </Link>
            </div>
          </div>

          {/* Links */}
          <nav className={styles.linksCol} aria-label="Footer navigation">
            <p className={styles.colTitle}>Pages</p>

            <ul className={styles.linkList}>
              <li>
                <Link className={styles.link} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/menu">
                  Menu
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className={styles.link} href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div className={styles.contactCol}>
            <p className={styles.colTitle}>Contact</p>

            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Address</span>
              </p>
              <address className={styles.infoValue}>
                303 Cooper Blvd Suite I,
                {/* <br /> */}
                Warrensburg, MO 64093
              </address>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>
                <FontAwesomeIcon icon={faPhone} />
                <span>Phone: </span>
              </p>
              <Link className={styles.infoValueLink} href="tel:+16604299074">
                +1 660 429 9074
              </Link>
            </div>

            <div className={styles.infoBlock}>
              <p className={styles.infoLabel}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email</span>
              </p>
              <Link className={styles.infoValueLink} href="mailto:ss.kansha@gmail.com">
                ss.kansha@gmail.com
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className={styles.bottom}>
          <p className={styles.copyLeft}>
            © {year} Kansha Sushi & Hibachi. All rights reserved.
          </p>

          <p className={styles.copyRight}>
            Build with <span className={styles.heart} aria-hidden="true">❤️</span> by{" "}
            <Link
              className={styles.authorLink}
              href="https://wandaazhar.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wanda Azhar
            </Link>{" "}
            in Detroit, MI. USA
          </p>
        </div>
      </div>
    </footer>
  );
}