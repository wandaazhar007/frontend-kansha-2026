import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faUtensils, faHeart } from "@fortawesome/free-solid-svg-icons";

import styles from "./HeroAbout.module.scss";

export default function HeroAbout() {
  return (
    <section className={styles.hero} aria-labelledby="about-hero-title">
      <div className={`container ${styles.inner}`}>
        {/* LEFT */}
        <div className={styles.left}>
          <p className={styles.eyebrow}>
            <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
            <span>Made with Gratitude</span>
          </p>

          <h1 id="about-hero-title" className={styles.title}>
            Made with Gratitude, <span>Served with a Smile</span>
          </h1>

          <p className={styles.subtitle}>
            Kansha Hibachi &amp; Sushi is built on one simple promise: premium
            taste that normal people can enjoy every day.
          </p>

          <p className={styles.copy}>
            “Kansha” is a Japanese word that means gratitude. We’re grateful for
            every customer who chooses us, and we show that gratitude through
            warm service, honest pricing, and carefully cooked hibachi and sushi
            made for real life — lunch breaks, busy evenings, and family meals
            to-go.
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

          <ul className={styles.miniStrip} aria-label="Kansha promise">
            <li>Premium Taste</li>
            <li>Simple Price</li>
            <li>Fast &amp; Fresh</li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className={styles.right} aria-label="Owner photo">
          <div className={styles.imageWrap}>
            <Image
              src="/owner-kansha-hibachi.jpeg"
              alt="Owner of Kansha Hibachi & Sushi"
              fill
              priority
              className={styles.image}
              sizes="(max-width: 980px) 92vw, 520px"
            />
          </div>

          <div className={styles.caption}>
            <p className={styles.captionTitle}>Kansha means gratitude.</p>
            <p className={styles.captionText}>
              We cook with care and respect for every customer who trusts us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}