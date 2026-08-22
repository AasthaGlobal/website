"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

import styles from "./navbar.module.css";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Industries",
    href: "/industries",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /*
   * Checks whether the current page matches
   * the navigation item's route.
   */
  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return (
      pathname === href ||
      pathname.startsWith(`${href}/`)
    );
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>

        {/* =========================
            LOGO
        ========================== */}
        <Link
          href="/"
          className={styles.logo}
          onClick={closeMenu}
          aria-label="Aastha Global IT Solutions home"
        >
          <img
            src="/Aasthalogo.png"
            alt="Aastha Global IT Solutions"
            className={styles.logoImage}
          />
        </Link>

        {/* =========================
            DESKTOP NAVIGATION
        ========================== */}
        <nav
          className={styles.desktopNav}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href);
            const isContact = item.label === "Contact";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={
                  isContact
                    ? `${styles.contactButton} ${
                        isActive
                          ? styles.contactActive
                          : ""
                      }`
                    : `${styles.navLink} ${
                        isActive
                          ? styles.active
                          : ""
                      }`
                }
                onClick={closeMenu}
              >
                {isContact ? (
                  <>
                    <span>Contact Us</span>

                    <span
                      className={styles.contactArrow}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </>
                ) : (
                  <span>{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* =========================
            MOBILE MENU BUTTON
        ========================== */}
        <button
          type="button"
          className={styles.menuButton}
          onClick={() =>
            setMenuOpen((open) => !open)
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? (
            <X size={24} aria-hidden="true" />
          ) : (
            <Menu size={24} aria-hidden="true" />
          )}
        </button>
      </div>

      {/* =========================
          MOBILE MENU
      ========================== */}
      <div
        id="mobile-navigation"
        className={`${styles.mobileMenu} ${
          menuOpen
            ? styles.mobileMenuOpen
            : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href);
            const isContact = item.label === "Contact";

            return (
              <Link
                key={item.label}
                href={item.href}
                className={
                  isContact
                    ? `${styles.mobileContactButton} ${
                        isActive
                          ? styles.mobileContactActive
                          : ""
                      }`
                    : `${styles.mobileLink} ${
                        isActive
                          ? styles.mobileActive
                          : ""
                      }`
                }
                onClick={closeMenu}
              >
                {isContact ? (
                  <>
                    <span>Contact Us</span>

                    <span
                      className={styles.contactArrow}
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </>
                ) : (
                  <span>{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}