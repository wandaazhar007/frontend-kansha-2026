import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowUpRightFromSquare, faLocationDot, faPhone, faUtensils } from "@fortawesome/free-solid-svg-icons";

import styles from "./HeroMain.module.scss";

export default function HeroMain() {
  return (
    <section className={styles.hero} aria-label="Homepage hero">
      <div className={`container ${styles.inner}`}>
        {/* LEFT BOX */}
        <div className={styles.left}>
          <p className={styles.subheadline}>
            Fast, fresh, and friendly for your wallet
          </p>

          <h1 className={styles.headline}>
            Premium Hibachi & Sushi, <span>Simple Everyday Price</span>
          </h1>

          <p className={styles.copy}>
            Welcome to Kansha Hibachi & Sushi, your new favorite spot for hibachi
            and sushi to-go in Warrensburg. We serve hot, flavorful hibachi and
            fresh sushi with a premium taste, but at prices that feel comfortable
            for everyday meals.
          </p>

          <div className={styles.ctaRow}>
            <Link className={styles.ctaPrimary} href="tel:+16604299074">
              <FontAwesomeIcon icon={faPhone} />
              <span>Call to Order</span>
            </Link>

            <Link className={styles.ctaSecondary} href="/menu">
              <FontAwesomeIcon icon={faUtensils} />
              <span>Our Menu</span>
            </Link>
          </div>

          <p className={styles.note}>
            <FontAwesomeIcon icon={faLocationDot} className={styles.location} />
            <Link href="https://goo.gl/maps/V9qXQh6mKFZmb15Z7" target="_blank">
              Located at 303 Cooper Blvd Suite I, Warrensburg, MO 64093
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} className={styles.arrow} />
            </Link>
          </p>
        </div>

        {/* RIGHT BOX */}
        <div className={styles.right} aria-label="Hero image">
          <div className={styles.imageWrap}>
            <Image
              src="/kansha-sushi-hibachi-hero.png"
              alt="Kansha Hibachi and Sushi to-go"
              fill
              priority
              className={styles.image}
              sizes="(max-width: 980px) 92vw, 520px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}