import {
  Bot,
  Cloud,
  Code2,
  Globe2,
  Smartphone,
  Workflow,
} from "lucide-react";

import styles from "./about.module.css";

const highlights = [
  {
    number: "01",
    icon: Cloud,
    title: "Cloud & AI Consulting",
    description:
      "Helping businesses leverage cloud and AI to improve scalability, efficiency, automation, and decision-making.",
  },
  {
    number: "02",
    icon: Code2,
    title: "Enterprise Application Development",
    description:
      "Building secure, scalable, high-performance applications designed around complex business requirements.",
  },
  {
    number: "03",
    icon: Workflow,
    title: "DevOps & Automation",
    description:
      "Modernizing development and deployment with CI/CD, automation, monitoring, and DevOps best practices.",
  },
  {
    number: "04",
    icon: Smartphone,
    title: "Web & Mobile Solutions",
    description:
      "Creating modern, fast, accessible, and engaging digital experiences across web and mobile platforms.",
  },
  {
    number: "05",
    icon: Bot,
    title: "AI-Powered Solutions",
    description:
      "Using artificial intelligence to automate processes, improve experiences, and unlock new business opportunities.",
  },
  {
    number: "06",
    icon: Globe2,
    title: "Global Delivery Model",
    description:
      "Providing flexible and reliable technology delivery for businesses across markets and industries.",
  },
];

export default function AboutHighlights() {
  return (
    <section
      id="expertise"
      className={styles.expertiseSection}
      aria-labelledby="expertise-title"
    >
      <div className={styles.container}>
        <div className={styles.expertiseHeading}>
          <div>
            <span className={styles.sectionLabel}>OUR EXPERTISE</span>

            <h2 id="expertise-title">
              Technology capabilities built for
              <span> real-world impact.</span>
            </h2>
          </div>

          <p>
            From strategy to implementation, we help organizations turn
            technology into a competitive advantage.
          </p>
        </div>

        <div className={styles.expertiseGrid}>
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article key={item.title} className={styles.expertiseCard}>
                <div className={styles.expertiseTop}>
                  <span>{item.number}</span>

                  <div className={styles.expertiseIcon}>
                    <Icon size={22} aria-hidden="true" />
                  </div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className={styles.expertiseArrow} aria-hidden="true">
                  →
                </div>
              </article>
            );
          })}
        </div>

        <div className={styles.approach}>
          <div>
            <span className={styles.approachLabel}>OUR APPROACH</span>

            <h3>
              Understand.
              <span> Innovate.</span>
              <br />
              Deliver.
              <span> Scale.</span>
            </h3>

            <p>
              We combine technical expertise, strategic thinking, and
              customer collaboration to deliver solutions that create
              lasting business value.
            </p>
          </div>

          <div className={styles.approachSteps}>
            <div>
              <strong>01</strong>
              <span>Understand</span>
            </div>

            <div>
              <strong>02</strong>
              <span>Innovate</span>
            </div>

            <div>
              <strong>03</strong>
              <span>Deliver</span>
            </div>

            <div>
              <strong>04</strong>
              <span>Scale</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}