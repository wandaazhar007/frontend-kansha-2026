import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faUsers,
  faGraduationCap,
  faBriefcase,
  faHouse,
  faLaptop,
  faCar,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./WarmMessage.module.scss";

const audiences = [
  { label: "Families", icon: faUsers },
  { label: "Students", icon: faGraduationCap },
  { label: "Workers", icon: faBriefcase },
];

const moments = [
  { label: "At home", icon: faHouse },
  { label: "At work", icon: faLaptop },
  { label: "On the go", icon: faCar },
];

export default function WarmMessage() {
  return (
    <section className={styles.section} aria-labelledby="warm-title">
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <header className={styles.header}>
            <p className={styles.eyebrow}>
              <FontAwesomeIcon icon={faHeart} aria-hidden="true" />
              <span>Warm & Family-Oriented</span>
            </p>

            <h2 id="warm-title" className={styles.title}>
              Made for real life — and real people.
            </h2>

            <p className={styles.subtitle}>
              Kansha is for families, students, workers, and anyone who wants a
              good meal without stress.
            </p>
          </header>

          <div className={styles.grid}>
            <div className={styles.copy}>
              <p className={styles.paragraph}>
                Bring home a hibachi box for your kids, share sushi rolls with
                your friends, or grab something quick after a long day. Our hope
                is that every order brings not just full stomachs, but also a
                little comfort, togetherness, and happiness — wherever you eat.
              </p>

              <div className={styles.pillGroups} aria-label="Who Kansha is for and where to enjoy it">
                <div className={styles.pillGroup}>
                  <p className={styles.pillTitle}>Perfect for</p>
                  <ul className={styles.pills}>
                    {audiences.map((a) => (
                      <li key={a.label} className={styles.pill}>
                        <FontAwesomeIcon icon={a.icon} aria-hidden="true" />
                        <span>{a.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.pillGroup}>
                  <p className={styles.pillTitle}>Enjoy it</p>
                  <ul className={styles.pills}>
                    {moments.map((m) => (
                      <li key={m.label} className={styles.pill}>
                        <FontAwesomeIcon icon={m.icon} aria-hidden="true" />
                        <span>{m.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className={styles.side} aria-label="Comfort message">
              <div className={styles.sideBox}>
                <p className={styles.sideTitle}>A small reminder</p>
                <p className={styles.sideText}>
                  You don’t need a birthday or a special occasion to enjoy
                  hibachi and sushi. Kansha is here for your normal days — made
                  with gratitude and priced for everyday life.
                </p>
              </div>

              <div className={styles.sideBoxSoft}>
                <p className={styles.sideTextStrong}>
                  Premium Taste • Simple Price • Fast &amp; Fresh
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}