"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWallet,
  faClock,
  faUserGroup,
  faHeart,
  faStar,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./WhyPeopleLove.module.scss";

type LovePoint = {
  title: string;
  desc: string;
  icon: any;
};

const points: LovePoint[] = [
  {
    title: "Fair Everyday Prices",
    desc: "Prices that feel fair for everyday life — premium taste without premium price.",
    icon: faWallet,
  },
  {
    title: "Fast Service",
    desc: "Quick ordering and easy pick-up for busy schedules.",
    icon: faClock,
  },
  {
    title: "Family-Friendly Portions",
    desc: "Boxes that are easy to share for couples, families, and small groups.",
    icon: faUserGroup,
  },
  {
    title: "Made with Gratitude",
    desc: "We cook with care and respect for every customer who trusts us.",
    icon: faHeart,
  },
];

type Testimonial = {
  quote: string;
  name: string;
};

const testimonials: Testimonial[] = [
  { quote: "“Tasty and affordable — perfect for a quick dinner.”", name: "Megan R." },
  { quote: "“Fast service and the hibachi feels like a treat on a normal day.”", name: "Jason T." },
  { quote: "“Fresh sushi and friendly people. We keep coming back.”", name: "Olivia K." },
  { quote: "“Great portions for the price — easy to share with the family.”", name: "Derrick S." },
  { quote: "“Quick pick-up, hot food, and the flavors are always consistent.”", name: "Hailey M." },
  { quote: "“Simple menu, big flavor. Exactly what I want after work.”", name: "Noah P." },
  { quote: "“Feels premium but still fits our weekly budget.”", name: "Emily C." },
];

export default function WhyPeopleLove() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const pausedRef = useRef<boolean>(false);
  const draggingRef = useRef<boolean>(false);

  const [isReducedMotion, setIsReducedMotion] = useState(false);

  const loopItems = useMemo(() => {
    // Duplicate for seamless looping; clones will be aria-hidden.
    return [...testimonials, ...testimonials];
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };

  const resume = () => {
    pausedRef.current = false;
  };

  const scrollByOneCard = (dir: -1 | 1) => {
    const el = trackRef.current;
    if (!el) return;

    // Find first real card (not clone) for width
    const card = el.querySelector<HTMLElement>('[data-card="true"]');
    const cardW = card?.offsetWidth ?? 320;

    // gap read (fallback)
    const cs = window.getComputedStyle(el);
    const gapStr = (cs.columnGap || cs.gap || "0").toString();
    const gap = Number.parseFloat(gapStr) || 0;

    el.scrollBy({
      left: dir * (cardW + gap),
      behavior: "smooth",
    });
  };

  // Auto-scroll: cards move from right to left (content slides left) by increasing scrollLeft
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setIsReducedMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);

    return () => mq.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    if (isReducedMotion) return;

    const SPEED = 0.35; // px per frame @ ~60fps
    let last = performance.now();

    const tick = (now: number) => {
      const dt = now - last;
      last = now;

      if (!pausedRef.current && !draggingRef.current) {
        // Normalize speed for varying FPS
        const step = SPEED * (dt / 16.67);
        el.scrollLeft += step;

        // If we reach the midpoint (end of first set), wrap back seamlessly
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [isReducedMotion]);

  return (
    <section className={styles.section} aria-labelledby="why-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <div className={styles.headerText}>
            <h2 id="why-title" className={styles.title}>
              Why People Love Kansha
            </h2>
            <p className={styles.subtitle}>
              Warm service, honest pricing, and comfort food you’ll want again.
            </p>
          </div>

          <div className={styles.headerCtas}>
            <Link className={styles.ghostBtn} href="/menu">
              View Full Menu
            </Link>
            <Link className={styles.primaryBtn} href="tel:+16604299074">
              Call Now to Order
            </Link>
          </div>
        </header>

        <div className={styles.grid}>
          {points.map((p) => (
            <article key={p.title} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.iconWrap} aria-hidden="true">
                  <FontAwesomeIcon icon={p.icon} className={styles.icon} />
                </span>
                <p className={styles.cardTitle}>{p.title}</p>
              </div>
              <p className={styles.cardDesc}>{p.desc}</p>
            </article>
          ))}
        </div>

        {/* Testimonials slider */}
        <div className={styles.testimonials} aria-label="Customer testimonials">
          <div className={styles.testHeader}>
            <p className={styles.testTitle}>
              <FontAwesomeIcon icon={faStar} aria-hidden="true" />
              <span>Little reviews from real life</span>
            </p>
            {/* <p className={styles.testHint}>Swipe/drag or use arrows.</p> */}
          </div>

          <div className={styles.slider}>
            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.arrowLeft}`}
              aria-label="Previous reviews"
              onClick={() => {
                pause();
                scrollByOneCard(-1);
                setTimeout(resume, 900);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>

            <div
              ref={trackRef}
              className={styles.track}
              role="region"
              aria-roledescription="carousel"
              aria-label="Reviews carousel"
              tabIndex={0}
              onMouseEnter={pause}
              onMouseLeave={resume}
              onFocus={pause}
              onBlur={resume}
              onPointerDown={() => {
                draggingRef.current = true;
                pause();
              }}
              onPointerUp={() => {
                draggingRef.current = false;
                // small delay so it doesn’t instantly fight the user
                setTimeout(resume, 700);
              }}
              onPointerCancel={() => {
                draggingRef.current = false;
                setTimeout(resume, 700);
              }}
            >
              {loopItems.map((t, i) => {
                const isClone = i >= testimonials.length;
                return (
                  <figure
                    key={`${t.name}-${i}`}
                    className={styles.testCard}
                    aria-hidden={isClone}
                    data-card={isClone ? "false" : "true"}
                  >
                    <blockquote className={styles.quote}>{t.quote}</blockquote>
                    <figcaption className={styles.author}>— {t.name}</figcaption>
                  </figure>
                );
              })}
            </div>

            <button
              type="button"
              className={`${styles.arrowBtn} ${styles.arrowRight}`}
              aria-label="Next reviews"
              onClick={() => {
                pause();
                scrollByOneCard(1);
                setTimeout(resume, 900);
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}