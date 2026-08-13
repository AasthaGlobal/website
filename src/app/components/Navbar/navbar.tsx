"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

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

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>

        {/* ================================
            LOGO
        ================================= */}

        <Link
          href="/"
          className={styles.logoBox}
          onClick={closeMenu}
        >
          <Image
            src="/logo.png"
            alt="Aastha Global IT Solutions"
            width={120}
            height={65}
            priority
            className={styles.logo}
          />
        </Link>


        {/* ================================
            DESKTOP NAVIGATION
        ================================= */}

        <div className={styles.desktopNav}>

          {navItems.map((item) => {
            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`${styles.navLink} ${
                  isActive ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}

        </div>


        {/* ================================
            GET STARTED
        ================================= */}

        <Link
          href="/contact"
          className={styles.getStarted}
        >
          <span>Get Started</span>

          <span className={styles.arrow}>
            →
          </span>
        </Link>


        {/* ================================
            MOBILE MENU BUTTON
        ================================= */}

        <button
          type="button"
          className={styles.menuButton}
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>

      </nav>


      {/* ================================
          MOBILE NAVIGATION
      ================================= */}

      {menuOpen && (
        <div className={styles.mobileMenu}>

          {navItems.map((item) => {
            const isActive =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`${styles.mobileLink} ${
                  isActive
                    ? styles.mobileActive
                    : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href="/contact"
            onClick={closeMenu}
            className={styles.mobileGetStarted}
          >
            Get Started →
          </Link>

        </div>
      )}

    </header>
  );
}