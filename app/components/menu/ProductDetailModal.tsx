"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faXmark,
  faChevronLeft,
  faChevronRight,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

import type { Product } from "../../menu/types";
import styles from "./ProductDetailModal.module.scss";
import Link from "next/link";

type Props = {
  open: boolean;
  product: Product | null;
  onClose: () => void;
};

function clampIndex(i: number, len: number) {
  if (len <= 0) return 0;
  if (i < 0) return 0;
  if (i > len - 1) return len - 1;
  return i;
}

export default function ProductDetailModal({ open, product, onClose }: Props) {
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const images = useMemo(() => {
    const arr = product?.imageUrls?.filter(Boolean) || [];
    return arr;
  }, [product]);

  const hasMany = images.length > 1;

  // active & previous index for animation
  const [idx, setIdx] = useState(0);
  const [prevIdx, setPrevIdx] = useState(0);
  const [dir, setDir] = useState<"next" | "prev">("next");

  const lastAnimRef = useRef<number>(0);

  const setIndexAnimated = (nextIndex: number) => {
    if (!hasMany) return;
    const now = Date.now();
    // prevent double spam clicks that look glitchy
    if (now - lastAnimRef.current < 180) return;
    lastAnimRef.current = now;

    setPrevIdx(idx);
    setDir(nextIndex > idx ? "next" : "prev");
    setIdx(clampIndex(nextIndex, images.length));
  };

  useEffect(() => {
    if (open) {
      setIdx(0);
      setPrevIdx(0);
      setDir("next");
    }
  }, [open, product?.id]);

  // lock body scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC + arrows
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!hasMany) return;

      if (e.key === "ArrowLeft") setIndexAnimated(idx - 1);
      if (e.key === "ArrowRight") setIndexAnimated(idx + 1);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose, hasMany, idx, images.length]);

  // swipe support
  const touchStartX = useRef<number | null>(null);
  const onTouchStart = (e: React.TouchEvent) => {
    if (!hasMany) return;
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (!hasMany) return;

    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX ?? null;
    touchStartX.current = null;

    if (start == null || end == null) return;

    const delta = end - start;
    if (Math.abs(delta) < 45) return;

    if (delta < 0) setIndexAnimated(idx + 1);
    if (delta > 0) setIndexAnimated(idx - 1);
  };

  if (!open || !product) return null;

  const activeImg = images[idx];
  const previousImg = images[prevIdx];

  return (
    <>
      <button
        type="button"
        className={styles.overlay}
        aria-label="Close dialog"
        onClick={onClose}
      />

      <div
        className={styles.wrap}
        role="dialog"
        aria-modal="true"
        aria-label={`${product.name} details`}
      >
        <div className={styles.dialog} ref={dialogRef}>
          <div className={styles.topbar}>
            <div className={styles.topText}>
              {/* <p className={styles.kicker}>Menu Detail</p> */}
              <h3 className={styles.title}>{product.name}</h3>
            </div>

            <button
              type="button"
              className={styles.closeBtn}
              onClick={onClose}
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </div>

          <div className={styles.content}>
            <div
              className={styles.media}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              {/* Animated image stage */}
              {activeImg ? (
                <div className={styles.stage} aria-label="Product photos">
                  {/* previous image */}
                  {hasMany && prevIdx !== idx && previousImg ? (
                    <div
                      key={`prev-${prevIdx}`}
                      className={`${styles.slide} ${styles.slidePrev} ${dir === "next" ? styles.dirNext : styles.dirPrev
                        }`}
                      aria-hidden="true"
                    >
                      <Image
                        src={previousImg}
                        alt=""
                        fill
                        className={styles.image}
                        sizes="(max-width: 980px) 92vw, 520px"
                      />
                    </div>
                  ) : null}

                  {/* active image */}
                  <div
                    key={`active-${idx}`}
                    className={`${styles.slide} ${styles.slideActive} ${dir === "next" ? styles.dirNext : styles.dirPrev
                      }`}
                  >
                    <Image
                      src={activeImg}
                      alt={product.name}
                      fill
                      className={styles.image}
                      sizes="(max-width: 980px) 92vw, 520px"
                      priority
                    />
                  </div>
                </div>
              ) : (
                <div className={styles.noImage} aria-label="No image available">
                  <FontAwesomeIcon icon={faImage} />
                </div>
              )}

              {/* arrows + dots only if multiple images */}
              {hasMany && (
                <>
                  <button
                    type="button"
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={() => setIndexAnimated(idx - 1)}
                    aria-label="Previous photo"
                  >
                    <FontAwesomeIcon icon={faChevronLeft} />
                  </button>

                  <button
                    type="button"
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={() => setIndexAnimated(idx + 1)}
                    aria-label="Next photo"
                  >
                    <FontAwesomeIcon icon={faChevronRight} />
                  </button>

                  <div className={styles.dots} aria-label="Photo indicators">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        type="button"
                        className={`${styles.dot} ${i === idx ? styles.dotActive : ""
                          }`}
                        onClick={() => setIndexAnimated(i)}
                        aria-label={`View photo ${i + 1}`}
                        aria-current={i === idx ? "true" : undefined}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            <div className={styles.body}>
              <p className={styles.price}>
                {typeof product.price === "number"
                  ? new Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "USD",
                  }).format(product.price)
                  : ""}
              </p>

              <p className={styles.desc}>{product.description}</p>

              <div className={styles.ctas}>
                <Link className={styles.primaryBtn} href="tel:+16604299074">
                  <FontAwesomeIcon icon={faPhone} />
                  <span>Call to Order</span>
                </Link>

                <p className={styles.note}>
                  We’ll confirm your pick-up time on the phone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}