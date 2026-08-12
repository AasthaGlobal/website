"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import styles from "./navbar.module.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>

      {/* LOGO */}
      <Link
        href="/"
        className={styles.logoContainer}
        onClick={closeMenu}
      >
        <Image
          src="/logo.png"
          alt="Aastha Global IT Solutions"
          width={125}
          height={60}
          priority
          className={styles.logo}
        />
      </Link>


      {/* DESKTOP NAVIGATION */}
      <ul className={styles.navList}>

        {navItems.map((item) => (
          <li
            key={item.href}
            className={styles.navItem}
          >
            <Link
              href={item.href}
              className={`${styles.navLink} ${
                pathname === item.href
                  ? styles.active
                  : ""
              }`}
            >
              {item.label}
            </Link>
          </li>
        ))}

      </ul>


      {/* GET STARTED */}
      <Link
        href="/contact"
        className={styles.ctaButton}
      >
        Get Started

        <span className={styles.arrow}>
          →
        </span>
      </Link>


      {/* MOBILE BUTTON */}
      <button
        className={styles.menuButton}
        onClick={() =>
          setIsMenuOpen((prev) => !prev)
        }
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}