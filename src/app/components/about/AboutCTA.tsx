import Link from "next/link";
import {
  ArrowRight,
  MessageCircle,
  Sparkles,
} from "lucide-react";

import styles from "./about.module.css";

export default function AboutCTA() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.container}>
        <div className={styles.cta}>
          <div className={styles.ctaGlow} />

          <div className={styles.ctaIcon}>
            <MessageCircle size={24} aria-hidden="true" />
          </div>

          <div className={styles.ctaContent}>
            <span className={styles.ctaLabel}>
              <Sparkles size={14} aria-hidden="true" />
              LET&apos;S BUILD THE FUTURE
            </span>

            <h2>
              Ready to transform your
              <span> business?</span>
            </h2>

            <p>
              Let&apos;s discuss your technology challenges and explore how
              Aastha Global IT Solutions can help you build, innovate, and
              scale.
            </p>
          </div>

          <Link href="/contact" className={styles.ctaButton}>
            Talk to Our Team
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}