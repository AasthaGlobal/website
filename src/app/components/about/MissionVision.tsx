import {
  Eye,
  ShieldCheck,
  Target,
  Users,
  Zap,
} from "lucide-react";

import styles from "./about.module.css";

const values = [
  {
    icon: ShieldCheck,
    title: "Security First",
    description:
      "Security and reliability are built into our solutions from the beginning.",
  },
  {
    icon: Users,
    title: "Customer First",
    description:
      "We put our clients' business goals and long-term success at the center of every engagement.",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    description:
      "We continuously explore modern technologies to create better and smarter solutions.",
  },
];

export default function MissionVision() {
  return (
    <section className={styles.missionSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeading}>
          <div>
            <span className={styles.sectionLabel}>WHO WE ARE</span>

            <h2>
              Technology expertise.
              <span> Business impact.</span>
            </h2>
          </div>

          <p>
            We believe technology should solve real problems, create
            measurable value, and give businesses the confidence to grow.
          </p>
        </div>

        <div className={styles.missionGrid}>
          {/* MISSION */}
          <article className={styles.missionCardDark}>
            <div className={styles.missionIcon}>
              <Target size={24} aria-hidden="true" />
            </div>

            <div>
              <span className={styles.cardLabel}>OUR MISSION</span>

              <h3>
                Empowering Businesses Through Innovative Technology
              </h3>

              <p>
                To empower businesses with innovative, secure, and scalable
                technology solutions that drive measurable business value.
              </p>
            </div>
          </article>

          {/* VISION */}
          <article className={styles.missionCardLight}>
            <div className={styles.missionIconLight}>
              <Eye size={24} aria-hidden="true" />
            </div>

            <div>
              <span className={styles.cardLabel}>OUR VISION</span>

              <h3>
                Becoming a Globally Trusted Technology Partner
              </h3>

              <p>
                To become a globally trusted technology partner known for
                delivering world-class digital transformation solutions.
              </p>
            </div>
          </article>
        </div>

        <div className={styles.valuesHeader}>
          <span className={styles.sectionLabel}>OUR VALUES</span>

          <h2>What drives everything we do.</h2>
        </div>

        <div className={styles.valuesGrid}>
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <article key={value.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>
                  <Icon size={21} aria-hidden="true" />
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}