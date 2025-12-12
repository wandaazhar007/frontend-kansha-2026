"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.scss";

type NavItem = {
  href: string;
  label: string;
};

const navItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const panelRef = useRef<HTMLDivElement | null>(null);
  const menuBtnRef = useRef<HTMLButtonElement | null>(null);

  const closeMenu = () => setOpen(false);
  const toggleMenu = () => setOpen((v) => !v);

  // Close on route change
  useEffect(() => {
    closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Lock body scroll when menu open (mobile)
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on Escape + click outside (but ignore clicks on menu button)
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    const onPointerDown = (e: PointerEvent) => {
      const panel = panelRef.current;
      const btn = menuBtnRef.current;
      const target = e.target as Node | null;

      if (!target) return;

      // If click is inside the panel, do nothing
      if (panel && panel.contains(target)) return;

      // IMPORTANT: If click is on the menu button (X / hamburger), do nothing here.
      // Let the button's onClick handle open/close.
      if (btn && btn.contains(target)) return;

      // Otherwise, it's an outside click → close
      closeMenu();
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open]);

  return (
    <header className={styles.header}>
      {/* Optional skip link (works best if your <main> has id="main-content") */}
      <a className={styles.skipLink} href="#main-content">
        Skip to content
      </a>

      <div className={`container ${styles.inner}`}>
        <div className={styles.left}>
          <Link href="/" className={styles.brand} aria-label="Go to Kansha home">
            <span className={styles.logoWrap} aria-hidden="true">
              <Image
                src="/logo-kansha-hibachi-sushi.png"
                alt=""
                width={40}
                height={40}
                priority
              />
            </span>
            <span className={styles.brandText}>
              <span className={styles.brandName}>Kansha Hibachi & Sushi</span>
              <span className={styles.brandTag}>
                Premium Taste, Simple Price, Fast & Fresh
              </span>
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <nav className={styles.nav} aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href} className={styles.navItem}>
                  <Link
                    href={item.href}
                    className={`${styles.navLink} ${active ? styles.active : ""}`}
                    aria-current={active ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <a className={styles.callBtn} href="tel:+16604299074">
            <FontAwesomeIcon icon={faPhone} />
            <span>Call: +1 660 429 9074</span>
          </a>
        </nav>

        {/* Mobile controls */}
        <div className={styles.mobileControls}>
          <a
            className={styles.callIconBtn}
            href="tel:+16604299074"
            aria-label="Call to order"
            onClick={closeMenu}
          >
            <FontAwesomeIcon icon={faPhone} />
          </a>

          <button
            ref={menuBtnRef}
            type="button"
            className={styles.menuBtn}
            onClick={toggleMenu}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span
              className={`${styles.hamburger} ${open ? styles.hamburgerOpen : ""
                }`}
            >
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        className={`${styles.mobilePanel} ${open ? styles.mobilePanelOpen : ""}`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          <ul className={styles.mobileList}>
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <li key={item.href} className={styles.mobileItem}>
                  <Link
                    href={item.href}
                    className={`${styles.mobileLink} ${active ? styles.mobileActive : ""
                      }`}
                    aria-current={active ? "page" : undefined}
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className={styles.mobileCtas}>
            <a
              className={styles.mobileCallBtn}
              href="tel:+16604299074"
              onClick={closeMenu}
            >
              <FontAwesomeIcon icon={faPhone} />
              Call to Order
            </a>
            <Link className={styles.mobileGhostBtn} href="/contact" onClick={closeMenu}>
              Get Directions
            </Link>
          </div>
        </nav>
      </div>

      {/* Overlay (click to close) */}
      <button
        type="button"
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        aria-hidden={!open}
        tabIndex={open ? 0 : -1}
        onClick={closeMenu}
      />
    </header>
  );
}