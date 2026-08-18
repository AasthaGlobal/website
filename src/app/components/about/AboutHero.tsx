import Link from "next/link";
import styles from "./about.module.css";

export default function AboutHero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="about-hero-title"
    >
      {/* Background decoration */}
      <div
        className={styles.heroBackground}
        aria-hidden="true"
      >
        <div className={styles.heroGlowOne} />
        <div className={styles.heroGlowTwo} />
        <div className={styles.gridPattern} />
      </div>

      <div className={styles.container}>
        <div className={styles.heroGrid}>
          {/* =========================
              LEFT CONTENT
          ========================== */}
          <div className={styles.heroContent}>
            <div className={styles.eyebrow}>
              <span aria-hidden="true">✦</span>
              <span>ABOUT AASTHA GLOBAL IT SOLUTIONS</span>
            </div>

            <h1
              id="about-hero-title"
              className={styles.heroTitle}
            >
              We Build
              <span> Technology </span>
              That Moves Business Forward.
            </h1>

            <p className={styles.heroDescription}>
              Aastha Global IT Solutions is a technology consulting
              company helping businesses accelerate their digital
              transformation through cloud computing, AI,
              application development, DevOps, and modern IT
              solutions.
            </p>

            {/* Buttons */}
            <div className={styles.heroActions}>
              <Link
                href="/contact"
                className={styles.primaryButton}
              >
                <span>Learn More</span>
                <span aria-hidden="true">→</span>
              </Link>

              <a
                href="#expertise"
                className={styles.secondaryButton}
              >
                Explore Our Expertise
              </a>
            </div>

            {/* Trust points */}
            <div className={styles.trustList}>
              <div className={styles.trustItem}>
                <span
                  className={styles.checkIcon}
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Innovative technology solutions
                </span>
              </div>

              <div className={styles.trustItem}>
                <span
                  className={styles.checkIcon}
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Secure and scalable architecture
                </span>
              </div>

              <div className={styles.trustItem}>
                <span
                  className={styles.checkIcon}
                  aria-hidden="true"
                >
                  ✓
                </span>

                <span>
                  Business-focused digital transformation
                </span>
              </div>
            </div>
          </div>

          {/* =========================
              RIGHT VISUAL
          ========================== */}
          <div
            className={styles.heroVisual}
            aria-label="Aastha Global technology illustration"
          >
            {/* Decorative circles */}
            <div
              className={`${styles.orbit} ${styles.orbitOne}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.orbit} ${styles.orbitTwo}`}
              aria-hidden="true"
            />

            <div
              className={`${styles.orbit} ${styles.orbitThree}`}
              aria-hidden="true"
            />

            {/* Main technology card */}
            <div className={styles.visualCard}>
              <div className={styles.visualHeader}>
                <div>
                  <span>AASTHA GLOBAL</span>

                  <h2>
                    Digital Innovation
                  </h2>
                </div>

                <div
                  className={styles.visualLogo}
                  aria-label="Aastha Global logo"
                >
                  AG
                </div>
              </div>

              {/* Technology graphic */}
              <div className={styles.digitalGraphic}>
                {/* Center */}
                <div className={styles.centerCircle}>
                  <span>AG</span>
                  <small>TECH</small>
                </div>

                {/* Cloud */}
                <div
                  className={`${styles.techNode} ${styles.nodeCloud}`}
                  aria-label="Cloud technology"
                >
                  <span aria-hidden="true">☁</span>
                </div>

                {/* AI */}
                <div
                  className={`${styles.techNode} ${styles.nodeAi}`}
                  aria-label="Artificial intelligence"
                >
                  <span aria-hidden="true">AI</span>
                </div>

                {/* Development */}
                <div
                  className={`${styles.techNode} ${styles.nodeCode}`}
                  aria-label="Application development"
                >
                  <span aria-hidden="true">&lt;/&gt;</span>
                </div>

                {/* Connecting lines */}
                <span
                  className={`${styles.connector} ${styles.connectorA}`}
                  aria-hidden="true"
                />

                <span
                  className={`${styles.connector} ${styles.connectorB}`}
                  aria-hidden="true"
                />

                <span
                  className={`${styles.connector} ${styles.connectorC}`}
                  aria-hidden="true"
                />
              </div>

              {/* Technology categories */}
              <div className={styles.visualFooter}>
                <div>
                  <strong>Cloud</strong>
                  <span>Scalable</span>
                </div>

                <div>
                  <strong>AI</strong>
                  <span>Intelligent</span>
                </div>

                <div>
                  <strong>DevOps</strong>
                  <span>Automated</span>
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className={styles.floatingBadge}>
              <div className={styles.floatingBadgeIcon}>
                <span aria-hidden="true">✦</span>
              </div>

              <div>
                <strong>
                  Innovation First
                </strong>

                <span>
                  Technology with purpose
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}