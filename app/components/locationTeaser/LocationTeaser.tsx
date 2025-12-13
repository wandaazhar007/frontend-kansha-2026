import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faLocationDot,
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./LocationTeaser.module.scss";

const addressLines = [
  "303 Cooper Blvd Suite I",
  "Warrensburg, MO 64093, United States",
];

const phoneDisplay = "(660) 429-9074";
const phoneHref = "tel:+16604299074";
const email = "ss.kansha@gmail.com";

const hours = [
  { day: "Sun", time: "11.00 AM - 08:00 PM" },
  { day: "Mon", time: "11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM" },
  { day: "Tue", time: "11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM" },
  { day: "Wed", time: "11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM" },
  { day: "Thu", time: "11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM" },
  { day: "Fri", time: "11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM" },
  { day: "Sat", time: "11.00 AM - 02:30 PM & 04:00 PM - 09:00 PM" },
];

export default function LocationTeaser() {
  return (
    <section className={styles.section} aria-labelledby="location-title">
      <div className={`container ${styles.inner}`}>
        {/* LEFT BOX */}
        <div className={styles.left}>
          <header className={styles.header}>
            <h2 id="location-title" className={styles.title}>
              Location & Contact
            </h2>
            <p className={styles.subtitle}>
              Easy pick-up, friendly service, and clear hours.
            </p>
          </header>

          {/* Address */}
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              <FontAwesomeIcon icon={faLocationDot} aria-hidden="true" />
              <span>Address</span>
            </p>
            <address className={styles.address}>
              {addressLines.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </address>

            <div className={styles.ctaRow}>
              <a
                className={styles.ctaPrimary}
                href="https://www.google.com/maps?daddr=303+Cooper+Blvd+Suite+I,+Warrensburg,+MO+64093"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMapLocationDot} />
                <span>Get Directions</span>
              </a>

              <a className={styles.ctaGhost} href={phoneHref}>
                <FontAwesomeIcon icon={faPhone} />
                <span>Call to Order</span>
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              <FontAwesomeIcon icon={faPhone} aria-hidden="true" />
              <span>Contact</span>
            </p>

            <div className={styles.contactList}>
              <a className={styles.contactItem} href={phoneHref}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>Phone</span>
                  <span className={styles.contactValue}>{phoneDisplay}</span>
                </span>
              </a>

              <a className={styles.contactItem} href={`mailto:${email}`}>
                <span className={styles.contactIcon} aria-hidden="true">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                <span className={styles.contactText}>
                  <span className={styles.contactLabel}>E-mail</span>
                  <span className={styles.contactValue}>{email}</span>
                </span>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className={styles.block}>
            <p className={styles.blockTitle}>
              <FontAwesomeIcon icon={faClock} aria-hidden="true" />
              <span>Business Hours</span>
            </p>

            <dl className={styles.hours} aria-label="Business hours">
              {hours.map((h) => (
                <div key={h.day} className={styles.hoursRow}>
                  <dt className={styles.day}>{h.day}</dt>
                  <dd className={styles.time}>
                    <time>{h.time}</time>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className={styles.right} aria-label="Google map">
          <div className={styles.mapWrap}>
            <iframe
              title="Kansha Hibachi Express location map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12441.365464119248!2d-93.734605!3d38.778808!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c3e304e1e59d4d%3A0xd91636cc2fb9e159!2sKansha%20Hibachi%20Express!5e0!3m2!1sen!2sus!4v1765614009547!5m2!1sen!2sus"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <p className={styles.mapHint}>
            Tip: You can drag the map, zoom in, or open directions for the fastest pick-up route.
          </p>
        </div>
      </div>
    </section>
  );
}