import styles from "./hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      {/* Background effects */}
      <div className={styles.heroGrid} aria-hidden="true" />
      <div
        className={`${styles.heroGlow} ${styles.heroGlowBlue}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.heroGlow} ${styles.heroGlowPurple}`}
        aria-hidden="true"
      />
      <div
        className={`${styles.heroGlow} ${styles.heroGlowPink}`}
        aria-hidden="true"
      />

      <div className={styles.heroContainer}>
        {/* LEFT SIDE */}
        <div className={styles.heroContent}>
          <div className={styles.heroEyebrow}>
            <span className={styles.eyebrowDot} />
            <span>Aastha Global IT Solutions</span>
          </div>

          <h1 id="hero-title" className={styles.heroTitle}>
            Technology that{" "}
            <span className={styles.heroGradientText}>
              moves your business
            </span>{" "}
            forward.
          </h1>

          <p className={styles.heroDescription}>
            We build intelligent digital solutions that help businesses
            modernize, scale faster, and stay ahead in a rapidly evolving
            digital world.
          </p>

          {/* CTA BUTTONS */}
          <div className={styles.heroActions}>
            <a href="/contact" className={styles.heroPrimaryButton}>
              <span>Get Started</span>
              <span className={styles.buttonArrow} aria-hidden="true">
                →
              </span>
            </a>

            <a href="/contact" className={styles.heroSecondaryButton}>
              Contact Us
            </a>
          </div>

          {/* TRUST POINTS */}
          <div className={styles.heroTrust}>
            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Enterprise-ready solutions</span>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Cloud &amp; AI expertise</span>
            </div>

            <div className={styles.trustItem}>
              <span className={styles.trustIcon}>✓</span>
              <span>Business-focused technology</span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.heroVisual} aria-hidden="true">
          <div
            className={`${styles.visualOrbit} ${styles.visualOrbitOne}`}
          />
          <div
            className={`${styles.visualOrbit} ${styles.visualOrbitTwo}`}
          />

          {/* Main technology card */}
          <div
            className={`${styles.visualCard} ${styles.visualMainCard}`}
          >
            <div className={styles.cardTop}>
              <div>
                <span className={styles.cardLabel}>
                  DIGITAL TRANSFORMATION
                </span>

                <h2>Build. Transform. Scale.</h2>
              </div>

              <div className={styles.cardStatus}>
                <span className={styles.statusDot} />
                LIVE
              </div>
            </div>

            <div className={styles.cardChart}>
              <div
                className={`${styles.chartLine} ${styles.chartLineOne}`}
              />
              <div
                className={`${styles.chartLine} ${styles.chartLineTwo}`}
              />
              <div
                className={`${styles.chartLine} ${styles.chartLineThree}`}
              />

              <div className={styles.chartBars}>
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>

            <div className={styles.cardBottom}>
              <div>
                <strong>Cloud</strong>
                <span>Ready</span>
              </div>

              <div>
                <strong>AI</strong>
                <span>Enabled</span>
              </div>

              <div>
                <strong>24/7</strong>
                <span>Support</span>
              </div>
            </div>
          </div>

          {/* Floating AI card */}
          <div
            className={`${styles.visualCard} ${styles.floatingCard} ${styles.floatingCardAi}`}
          >
            <div className={styles.floatingIcon}>✦</div>

            <div>
              <strong>AI &amp; Automation</strong>
              <span>Smarter decisions</span>
            </div>
          </div>

          {/* Floating Cloud card */}
          <div
            className={`${styles.visualCard} ${styles.floatingCard} ${styles.floatingCardCloud}`}
          >
            <div className={styles.floatingIcon}>☁</div>

            <div>
              <strong>Cloud Solutions</strong>
              <span>Built to scale</span>
            </div>
          </div>

          <div className={styles.visualCircle}>
            <span>AGIT</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.heroScroll} aria-hidden="true">
        <span>SCROLL TO EXPLORE</span>

        <div className={styles.scrollLine}>
          <span />
        </div>
      </div>
    </section>
  );
}