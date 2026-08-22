"use client";

import Link from "next/link";
import { ArrowUp, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import styles from "./footer.module.css";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" }, 
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const services = [
  { label: "Cloud Consulting", href: "/services" },
  { label: "AI & Digital Transformation", href: "/services" },
  { label: "Web Application Development", href: "/services" },
  { label: "Mobile App Development", href: "/services" },
  { label: "DevOps & Automation", href: "/services" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "/",
    icon: FaLinkedinIn,
  },
  {
    label: "GitHub",
    href: "/",
    icon: FaGithub,
  },
  {
    label: "YouTube",
    href: "/",
    icon: FaYoutube,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      {/* Decorative Background */}
      <div
        className={styles.footerGlow}
        aria-hidden="true"
      />

      <div
        className={styles.footerGrid}
        aria-hidden="true"
      />

      <div className={styles.container}>
        {/* CTA */}
        <section className={styles.footerCta}>
          <div className={styles.ctaContent}>
            <span className={styles.eyebrow}>
              LET&apos;S BUILD THE FUTURE
            </span>

            <h2>
              Ready to turn your
              <span> ideas into impact?</span>
            </h2>

            <p>
              Let&apos;s work together to build innovative,
              scalable, and future-ready technology solutions
              for your business.
            </p>
          </div>

          <Link
            href="/contact"
            className={styles.ctaButton}
          >
            Get in Touch
            <ArrowUpRight size={20} aria-hidden="true" />
          </Link>
        </section>

        {/* Main Footer */}
        <div className={styles.footerMain}>
          {/* Company */}
          <div className={styles.companyColumn}>
            <Link
              href="/"
              className={styles.logo}
              aria-label="Aastha Global IT Solutions home"
            >
              <img
                src="/Aasthalogo.png"
                alt="Aastha Global IT Solutions"
                className={styles.logoImage}
              />
            </Link>

            <p className={styles.companyDescription}>
              Delivering innovative Cloud, AI, Application
              Development, and Digital Transformation solutions
              for businesses worldwide.
            </p>

            <div className={styles.follow}>
              <span>FOLLOW US</span>

              <div className={styles.socialLinks}>
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                      aria-label={`Visit our ${social.label} page`}
                    >
                      <Icon
                        size={19}
                        strokeWidth={1.8}
                        aria-hidden="true"
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linkColumn}>
            <h3>Quick Links</h3>

            <nav aria-label="Footer quick links">
              <ul>
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href}>
                      <span>{link.label}</span>
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Services */}
          <div className={styles.linkColumn}>
            <h3>Services</h3>

            <nav aria-label="Footer services">
              <ul>
                {services.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href}>
                      <span>{service.label}</span>
                      <ArrowUpRight
                        size={14}
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className={styles.contactColumn}>
            <h3>Contact</h3>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                EMAIL
              </span>

              <a href="mailto:info@aasthaglobal.co">
                info@aasthaglobal.co
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                WEBSITE
              </span>

              <a
                href="https://aasthaglobal.co"
                target="_blank"
                rel="noopener noreferrer"
              >
                aasthaglobal.co
              </a>
            </div>

            <div className={styles.contactItem}>
              <span className={styles.contactLabel}>
                LOCATION
              </span>

              <p>Vadodara, Gujarat, India</p>
            </div>

            <Link
              href="/contact"
              className={styles.contactButton}
            >
              Contact Our Team
              <ArrowUpRight
                size={17}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className={styles.footerBottom}>
          <p>
            © 2026 Aastha Global IT Solutions. All Rights
            Reserved.
          </p>

          <div className={styles.legalLinks}>
            <Link href="/privacy-policy">
              Privacy Policy
            </Link>

            <span aria-hidden="true">|</span>

            <Link href="/terms">
              Terms & Conditions
            </Link>
          </div>

          <button
            type="button"
            className={styles.backToTop}
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <ArrowUp
              size={18}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </footer>
  );
}