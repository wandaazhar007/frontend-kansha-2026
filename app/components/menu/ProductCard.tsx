"use client";

import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

import styles from "./ProductCard.module.scss";

type Props = {
  id: string;
  name: string;
  description: string;
  priceLabel: string;
  imageUrl?: string;
  onClick: () => void;
};

function isRemoteUrl(url?: string) {
  if (!url) return false;
  return /^https?:\/\//i.test(url);
}

export default function ProductCard({
  name,
  description,
  priceLabel,
  imageUrl,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      className={styles.row}
      onClick={onClick}
      aria-label={`View details for ${name}`}
      aria-haspopup="dialog"
    >
      <span className={styles.thumb}>
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={name}
            fill
            className={styles.thumbImg}
            sizes="56px"
            unoptimized={isRemoteUrl(imageUrl)}
          />
        ) : (
          <span className={styles.thumbFallback} aria-hidden="true">
            <FontAwesomeIcon icon={faImage} />
          </span>
        )}
      </span>

      <span className={styles.info}>
        <span className={styles.top}>
          <span className={styles.name}>{name}</span>
          <span className={styles.price}>{priceLabel}</span>
        </span>

        <span className={styles.desc}>{description}</span>
      </span>
    </button>
  );
}