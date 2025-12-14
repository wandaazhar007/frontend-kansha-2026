"use client";

import styles from "./ProductGridSkeleton.module.scss";

type Props = {
  count?: number;
};

export default function ProductGridSkeleton({ count = 14 }: Props) {
  return (
    <div className={styles.columns} aria-label="Loading menu items">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className={styles.item} aria-hidden="true">
          <div className={styles.row}>
            <div className={styles.thumb} />
            <div className={styles.info}>
              <div className={styles.top}>
                <div className={styles.lineTitle} />
                <div className={styles.linePrice} />
              </div>
              <div className={styles.lineDesc} />
              <div className={styles.lineDesc2} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}