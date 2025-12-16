import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";

import styles from "./CtaClosing.module.scss";

export default function CtaClosing() {
  return (
    <section className={styles.section} aria-labelledby="cta-closing-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <div className={styles.left}>
            <p className={styles.eyebrow}>Ready for a simple, satisfying meal?</p>

            <h2 id="cta-closing-title" className={styles.title}>
              Premium taste, simple price — <span>fast &amp; fresh to-go.</span>
            </h2>

            <p className={styles.subtitle}>
              Call ahead for quick pick-up, or view the menu first.
            </p>

            <div className={styles.ctaRow}>
              <Link className={styles.primaryBtn} href="/menu">
                <FontAwesomeIcon icon={faUtensils} />
                <span>View Menu</span>
              </Link>

              <Link className={styles.ghostBtn} href="tel:+16604299074">
                <FontAwesomeIcon icon={faPhone} />
                <span>Call to Order</span>
              </Link>
            </div>

            <p className={styles.address}>
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              <span>303 Cooper Blvd Suite I, Warrensburg, MO 64093, United States</span>
            </p>
          </div>

          {/* RIGHT (Image) */}
          <div className={styles.right} aria-label="Kansha hibachi and sushi photo">
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

            <div className={styles.imageOverlay} aria-hidden="true">
              <span className={styles.overlayPill}>Premium Taste</span>
              <span className={styles.overlayPill}>Simple Price</span>
              <span className={styles.overlayPill}>Fast &amp; Fresh</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}