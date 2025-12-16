"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faChevronLeft,
  faChevronRight,
  faPhone,
  faFilter,
} from "@fortawesome/free-solid-svg-icons";

import type { Product, ProductCategory, ProductsResponse } from "./types";
import ProductCard from "../components/menu/ProductCard";
import ProductGridSkeleton from "../components/menu/ProductGridSkeleton";
import ProductDetailModal from "../components/menu/ProductDetailModal";

import styles from "./MenuBrowser.module.scss";
import Link from "next/link";

const MIN_SKELETON_MS = 850;
const PER_PAGE = 4;

type CategoryTab = { key: "all" | ProductCategory; label: string };

const categoryTabs: CategoryTab[] = [
  { key: "all", label: "All" },
  { key: "hibachi", label: "Hibachi" },
  { key: "sushi", label: "Sushi" },
  { key: "side", label: "Side" },
  { key: "appetizer", label: "Appetizer" },
];

function normalizeBaseUrl(raw?: string) {
  const v = (raw || "").trim();
  if (!v) return "";
  return v.replace(/\/+$/, "") + "/";
}

function sleep(ms: number) {
  return new Promise<void>((resolve) => setTimeout(resolve, ms));
}

function formatUsd(amount: number) {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  } catch {
    return `$${amount.toFixed(2)}`;
  }
}

export default function MenuBrowser() {
  const API_BASE = useMemo(
    () => normalizeBaseUrl(process.env.NEXT_PUBLIC_API_BASE_URL),
    []
  );

  const [category, setCategory] = useState<CategoryTab["key"]>("all");
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState<Product[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [pagingLoading, setPagingLoading] = useState(false);

  const lastRequestRef = useRef(0);

  // modal state
  const [selected, setSelected] = useState<Product | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedQuery(query.trim()), 320);
    return () => clearTimeout(t);
  }, [query]);

  useEffect(() => {
    setPage(1);
  }, [category, debouncedQuery]);

  useEffect(() => {
    if (!API_BASE) {
      setLoading(false);
      setErrorMsg(
        "Missing API base URL. Please set NEXT_PUBLIC_API_BASE_URL in .env.local."
      );
      return;
    }

    const controller = new AbortController();
    const requestId = Date.now();
    lastRequestRef.current = requestId;

    const load = async () => {
      setLoading(true);
      setErrorMsg(null);

      const started = Date.now();

      try {
        const params = new URLSearchParams();

        if (category !== "all") params.set("category", category);
        if (debouncedQuery) params.set("search", debouncedQuery);

        const url = `${API_BASE}products${params.toString() ? `?${params}` : ""}`;

        const res = await fetch(url, {
          method: "GET",
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });

        const elapsed = Date.now() - started;
        const remaining = Math.max(0, MIN_SKELETON_MS - elapsed);
        if (remaining > 0) await sleep(remaining);

        if (!res.ok) {
          let msg = `Failed to load menu (HTTP ${res.status}).`;
          try {
            const err = await res.json();
            if (err?.error) msg = String(err.error);
          } catch { }
          throw new Error(msg);
        }

        const data = (await res.json()) as ProductsResponse;
        const list = Array.isArray(data?.products) ? data.products : [];

        if (lastRequestRef.current !== requestId) return;
        setProducts(list);
      } catch (err: any) {
        if (controller.signal.aborted) return;
        if (lastRequestRef.current !== requestId) return;

        setProducts([]);
        setErrorMsg(err?.message || "Something went wrong while loading the menu.");
      } finally {
        if (lastRequestRef.current === requestId) {
          setLoading(false);
        }
      }
    };

    load();

    return () => controller.abort();
  }, [API_BASE, category, debouncedQuery]);

  // pagination (client-side)
  const totalItems = products.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / PER_PAGE));

  const safePage = Math.min(Math.max(page, 1), totalPages);
  useEffect(() => {
    if (page !== safePage) setPage(safePage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [safePage]);

  const visible = useMemo(() => {
    const start = (safePage - 1) * PER_PAGE;
    return products.slice(start, start + PER_PAGE);
  }, [products, safePage]);

  const pageNumbers = useMemo(() => {
    const max = 5;
    const pages: number[] = [];

    let start = Math.max(1, safePage - 2);
    let end = Math.min(totalPages, start + max - 1);

    if (end - start + 1 < max) {
      start = Math.max(1, end - max + 1);
    }

    for (let i = start; i <= end; i++) pages.push(i);
    return pages;
  }, [safePage, totalPages]);

  const openProduct = (p: Product) => {
    setSelected(p);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setTimeout(() => setSelected(null), 120);
  };

  const goToPage = async (nextPage: number) => {
    if (pagingLoading) return;
    const clamped = Math.min(Math.max(nextPage, 1), totalPages);
    if (clamped === safePage) return;

    setPagingLoading(true);
    await sleep(MIN_SKELETON_MS);
    setPage(clamped);
    setPagingLoading(false);
  };

  const showSkeleton = loading || pagingLoading;

  return (
    <section className={styles.section} aria-labelledby="menu-browser-title">
      <div className={`container ${styles.inner}`}>
        <header className={styles.header}>
          <h2 id="menu-browser-title" className={styles.title}>
            Browse Our Menu
          </h2>

          <p className={styles.subtext}>
            Simple menu, big flavor — fast, fresh, and made for takeout.
          </p>
        </header>

        <div className={styles.toolbar} role="region" aria-label="Menu filters">
          <div className={styles.searchWrap}>
            <label className={styles.srOnly} htmlFor="menu-search">
              Search menu items
            </label>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={styles.searchIcon}
              aria-hidden="true"
            />
            <input
              id="menu-search"
              className={styles.searchInput}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search (e.g., chicken, roll, shrimp)…"
              autoComplete="off"
              inputMode="search"
            />
          </div>

          <div className={styles.callWrap}>
            <Link className={styles.callBtn} href="tel:+16604299074">
              <FontAwesomeIcon icon={faPhone} />
              <span>(660) 429-9074</span>
            </Link>
          </div>
        </div>

        <div className={styles.tabs} role="tablist" aria-label="Menu categories">
          <span className={styles.tabsLabel}>
            <FontAwesomeIcon icon={faFilter} aria-hidden="true" />
            Category:
          </span>

          {categoryTabs.map((t) => {
            const active = t.key === category;
            return (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={active}
                className={`${styles.tab} ${active ? styles.tabActive : ""}`}
                onClick={() => setCategory(t.key)}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className={styles.statusRow} aria-live="polite">
          {showSkeleton ? (
            <span className={styles.statusMuted}>Loading menu…</span>
          ) : errorMsg ? (
            <span className={styles.statusError}>{errorMsg}</span>
          ) : (
            <span className={styles.statusMuted}>
              Showing{" "}
              <strong>
                {totalItems === 0 ? 0 : (safePage - 1) * PER_PAGE + 1}–
                {Math.min(safePage * PER_PAGE, totalItems)}
              </strong>{" "}
              of <strong>{totalItems}</strong> items.
            </span>
          )}
        </div>

        {showSkeleton ? (
          <ProductGridSkeleton count={PER_PAGE} />
        ) : errorMsg ? (
          <div className={styles.errorBox} role="alert">
            <p className={styles.errorTitle}>We couldn’t load the menu right now.</p>
            <p className={styles.errorText}>
              Please try again in a moment, or call us and we’ll help you order.
            </p>
            <Link className={styles.errorCta} href="tel:+16604299074">
              <FontAwesomeIcon icon={faPhone} />
              <span>Call to Order</span>
            </Link>
          </div>
        ) : totalItems === 0 ? (
          <div className={styles.emptyBox} role="status">
            <p className={styles.emptyTitle}>No items found.</p>
            <p className={styles.emptyText}>
              Try a different search, or switch the category to “All”.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.columns} aria-label="Menu items">
              {visible.map((p) => (
                <div key={p.id} className={styles.columnItem}>
                  <ProductCard
                    id={p.id}
                    name={p.name}
                    description={p.description}
                    priceLabel={formatUsd(p.price)}
                    imageUrl={p.imageUrls?.[0]}
                    onClick={() => openProduct(p)}
                  />
                </div>
              ))}
            </div>

            <nav className={styles.pagination} aria-label="Menu pagination">
              <button
                type="button"
                className={styles.pageBtn}
                onClick={() => goToPage(safePage - 1)}
                disabled={safePage <= 1 || pagingLoading}
                aria-label="Previous page"
              >
                <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
                <span>Prev</span>
              </button>

              <div className={styles.pageNums} aria-label="Page numbers">
                {pageNumbers.map((n) => (
                  <button
                    key={n}
                    type="button"
                    className={`${styles.pageNum} ${n === safePage ? styles.pageNumActive : ""
                      }`}
                    onClick={() => goToPage(n)}
                    disabled={pagingLoading}
                    aria-current={n === safePage ? "page" : undefined}
                  >
                    {n}
                  </button>
                ))}
              </div>

              <button
                type="button"
                className={styles.pageBtn}
                onClick={() => goToPage(safePage + 1)}
                disabled={safePage >= totalPages || pagingLoading}
                aria-label="Next page"
              >
                <span>Next</span>
                <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
              </button>
            </nav>
          </>
        )}
      </div>

      <ProductDetailModal open={modalOpen} product={selected} onClose={closeModal} />
    </section>
  );
}