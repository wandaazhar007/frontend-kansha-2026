"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import styles from "./FeaturedFavorites.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

type FavoriteItem = {
  title: string;
  price: string;
  description: string;
  image: string;
};

export default function FeaturedFavorites() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  // GANTI nomor telpon di sini
  const PHONE_NUMBER = "+12081234567"; // contoh format E.164
  const PHONE_LABEL = "(208) 123-4567"; // label yang tampil di tombol

  const [selected, setSelected] = useState<FavoriteItem | null>(null);

  const items: FavoriteItem[] = useMemo(
    () => [
      {
        title: "Hibachi Chicken",
        price: "$12.99",
        image: "/kansha-hibachi-chicken-square.jpg",
        description:
          "Juicy chicken grilled hibachi-style, glazed with savory-sweet teriyaki, served with fried rice and crisp mixed vegetables—plus yum yum sauce on the side for the perfect dip",
      },
      {
        title: "Hibachi Steak",
        price: "$13.99",
        image: "/kansha-hibachi-steak-square.jpg",
        description:
          "Tender, flavorful steak grilled to bring out that rich hibachi taste, finished with teriyaki over mixed veggies and fried rice—comforting, filling, and seriously satisfying",
      },
      {
        title: "Hibachi Lobster",
        price: "Market Price",
        image: "/kansha-hibachi-lobster-square.jpg",
        description:
          "A premium treat—hibachi-grilled lobster with a buttery, savory finish, topped with teriyaki and served with fried rice and mixed vegetables. Yum yum sauce on the side makes every bite even better",
      },
      {
        title: "Hibachi Shrimp",
        price: "$12.99",
        image: "/kansha-hibachi-shrimp-square.jpg",
        description:
          "Plump shrimp grilled with hibachi seasoning, drizzled with teriyaki over mixed vegetables and fried rice—light, flavorful, and super easy to love with yum yum sauce on the side",
      },
      {
        title: "California Roll",
        price: "$12.99",
        image: "/kansha-sushi-california-roll-square.jpg",
        description:
          "A classic favorite with crab-style filling, cucumber, and avocado wrapped in seasoned sushi rice—fresh, creamy, and perfect for sushi beginners or longtime fans",
      },
      {
        title: "Salmon Roll",
        price: "$12.99",
        image: "/kansha-sushi-salmon-roll-square.jpg",
        description:
          "Clean, simple, and delicious—fresh salmon wrapped with seasoned sushi rice for a smooth, savory bite that feels light but still satisfying",
      },
    ],
    []
  );

  const scrollByCards = (direction: "prev" | "next") => {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector<HTMLElement>(`[data-card="true"]`);
    if (!firstCard) return;

    const gap = 16; // harus sama dengan gap di CSS (1rem = 16px)
    const cardWidth = firstCard.offsetWidth + gap;
    const amount = cardWidth * 2;

    track.scrollBy({
      left: direction === "next" ? amount : -amount,
      behavior: "smooth",
    });
  };

  const openModal = (item: FavoriteItem) => setSelected(item);
  const closeModal = () => setSelected(null);

  // ESC untuk close + lock scroll saat modal open
  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <section className={styles.section} aria-label="Featured Favorites">
      <div className={styles.header}>
        <h2 className={styles.title}>Featured Favorites</h2>
        <p className={styles.subtitle}>
          Hibachi meals come with fried rice, mixed vegetables, teriyaki sauce,
          and yum yum sauce on the side.
        </p>
      </div>

      <div className={styles.carousel}>
        <button
          type="button"
          className={`${styles.navBtn} ${styles.prev}`}
          onClick={() => scrollByCards("prev")}
          aria-label="Scroll left"
        >
          &lt;
        </button>

        <div ref={trackRef} className={styles.track}>
          {items.map((item) => (
            <article
              key={item.title}
              className={styles.card}
              data-card="true"
              role="button"
              tabIndex={0}
              aria-label={`Open details for ${item.title}`}
              onClick={() => openModal(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") openModal(item);
              }}
            >
              <div className={styles.imageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>

              <div className={styles.cardBody}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <span className={styles.price}>{item.price}</span>
                </div>

                <p className={styles.desc}>{item.description}</p>

                <button
                  type="button"
                  className={styles.detailBtn}
                  onClick={(e) => {
                    e.stopPropagation(); // biar gak double trigger
                    openModal(item);
                  }}
                  aria-label={`View details for ${item.title}`}
                >
                  <FontAwesomeIcon icon={faEye} className={styles.iconEye} />
                  Detail
                </button>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className={`${styles.navBtn} ${styles.next}`}
          onClick={() => scrollByCards("next")}
          aria-label="Scroll right"
        >
          &gt;
        </button>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} details`}
          onClick={closeModal}
        >
          <div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            role="document"
          >
            <button
              type="button"
              className={styles.modalClose}
              onClick={closeModal}
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className={styles.modalContent}>
              <div className={styles.modalImageWrap}>
                <img
                  src={selected.image}
                  alt={selected.title}
                  className={styles.modalImage}
                />
              </div>

              <div className={styles.modalBody}>
                <div className={styles.modalTop}>
                  <h3 className={styles.modalTitle}>{selected.title}</h3>
                  <span className={styles.modalPrice}>{selected.price}</span>
                </div>

                <p className={styles.modalDesc}>{selected.description}</p>

                <div className={styles.modalNote}>
                  Hibachi meals come with fried rice, mixed vegetables, teriyaki
                  sauce, and yum yum sauce on the side.
                </div>

                <div className={styles.modalActions}>
                  <a
                    className={styles.callBtn}
                    href={`tel:${PHONE_NUMBER}`}
                    aria-label={`Call to order: ${PHONE_LABEL}`}
                  >
                    Call to Order — {PHONE_LABEL}
                  </a>

                  <button
                    type="button"
                    className={styles.secondaryBtn}
                    onClick={closeModal}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}