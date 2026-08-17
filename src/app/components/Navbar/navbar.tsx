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
    href: "/#about",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={styles.navbar}>
      <div className={styles.navContainer}>
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

        <nav
          className={styles.desktopNav}
          aria-label="Main navigation"
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/services"
                  ? pathname === "/services"
                  : false;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.navLink} ${
                  isActive ? styles.active : ""
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>
      </div>

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        <nav aria-label="Mobile navigation">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : item.href === "/services"
                  ? pathname === "/services"
                  : false;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={`${styles.mobileLink} ${
                  isActive
                    ? styles.mobileActive
                    : ""
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}