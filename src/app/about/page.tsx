import Link from "next/link";
import styles from "./about.module.css";

type Highlight = {
  number: string;
  title: string;
  description: string;
  icon: string;
};

const highlights: Highlight[] = [
  {
    number: "01",
    icon: "☁",
    title: "Cloud & AI Consulting",
    description:
      "Helping businesses leverage cloud computing and artificial intelligence to improve scalability, automation, efficiency, and decision-making.",
  },
  {
    number: "02",
    icon: "</>",
    title: "Enterprise Application Development",
    description:
      "Building secure, scalable, and high-performance applications designed around complex business requirements.",
  },
  {
    number: "03",
    icon: "⚙",
    title: "DevOps & Automation",
    description:
      "Modernizing development and deployment with automation, CI/CD, monitoring, and DevOps best practices.",
  },
  {
    number: "04",
    icon: "◈",
    title: "Web & Mobile Solutions",
    description:
      "Creating modern, responsive, accessible, and engaging digital experiences across web and mobile platforms.",
  },
  {
    number: "05",
    icon: "✦",
    title: "Customer-first Approach",
    description:
      "Putting your business objectives first and building technology solutions around your goals, challenges, and long-term growth.",
  },
  {
    number: "06",
    icon: "◎",
    title: "Global Delivery Model",
    description:
      "Providing flexible and reliable technology delivery designed to support businesses across markets and industries.",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We continuously explore modern technologies to create smarter and more effective solutions.",
  },
  {
    title: "Trust",
    description:
      "We build long-term partnerships through transparency, reliability, and consistent delivery.",
  },
  {
    title: "Excellence",
    description:
      "We strive for engineering and service excellence in every project we undertake.",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className={styles.sectionHeading}>
      <span className={styles.eyebrow}>{eyebrow}</span>

      <h2 className={styles.sectionTitle}>{title}</h2>

      {description && (
        <p className={styles.sectionDescription}>{description}</p>
      )}
    </div>
  );
}

function HighlightCard({ item }: { item: Highlight }) {
  return (
    <article className={styles.highlightCard}>
      <div className={styles.highlightHeader}>
        <span className={styles.highlightNumber}>{item.number}</span>

        <div
          className={styles.highlightIcon}
          aria-hidden="true"
        >
          {item.icon}
        </div>
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <span className={styles.highlightLine} aria-hidden="true" />
    </article>
  );
}

function MissionVisionCard({
  type,
  title,
  description,
}: {
  type: "mission" | "vision";
  title: string;
  description: string;
}) {
  return (
    <article
      className={`${styles.missionCard} ${
        type === "vision" ? styles.visionCard : ""
      }`}
    >
      <div className={styles.missionIcon} aria-hidden="true">
        {type === "mission" ? "◎" : "◉"}
      </div>

      <span className={styles.cardEyebrow}>
        {type === "mission" ? "OUR MISSION" : "OUR VISION"}
      </span>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.eyebrow}>
                ABOUT AASTHA GLOBAL IT SOLUTIONS
              </span>

              <h1>
                Building technology that
                <span> moves businesses forward.</span>
              </h1>

              <p>
                Aastha Global IT Solutions is a technology consulting
                company helping businesses accelerate their digital
                transformation through cloud computing, AI,
                application development, DevOps, and modern IT
                solutions.
              </p>

              <div className={styles.heroActions}>
                <Link
                  href="/contact"
                  className={styles.primaryButton}
                >
                  Learn More
                  <span aria-hidden="true">→</span>
                </Link>

                <a
                  href="#expertise"
                  className={styles.secondaryButton}
                >
                  Explore Our Expertise
                </a>
              </div>
            </div>

            {/* Image / Illustration Placeholder */}
            <div className={styles.heroVisual}>
              <div className={styles.imagePlaceholder}>
                <div className={styles.placeholderContent}>
                  <div className={styles.placeholderIcon}>
                    AG
                  </div>

                  <span>Technology. Innovation. Growth.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPANY INTRODUCTION */}
      <section className={styles.introduction}>
        <div className={styles.container}>
          <div className={styles.introductionGrid}>
            <div>
              <SectionHeading
                eyebrow="WHO WE ARE"
                title="Turning technology into business advantage."
              />
            </div>

            <div className={styles.introductionContent}>
              <p>
                At Aastha Global IT Solutions, we believe technology
                should do more than simply keep businesses running.
                It should create opportunities, improve efficiency,
                and unlock new possibilities.
              </p>

              <p>
                We combine technical expertise, strategic thinking,
                and a customer-first mindset to deliver solutions
                that address real business challenges and create
                measurable value.
              </p>

              <p>
                From cloud and AI to enterprise applications, DevOps,
                web, and mobile solutions, we help organizations
                build, modernize, and scale their digital
                capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className={styles.missionVision}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="OUR PURPOSE"
            title="Driven by purpose. Focused on impact."
            description="Our mission and vision guide how we work, how we build, and how we create value for our clients."
          />

          <div className={styles.missionGrid}>
            <MissionVisionCard
              type="mission"
              title="Empowering businesses through innovative technology."
              description="To empower businesses with innovative, secure, and scalable technology solutions that drive measurable business value."
            />

            <MissionVisionCard
              type="vision"
              title="Becoming a globally trusted technology partner."
              description="To become a globally trusted technology partner known for delivering world-class digital transformation solutions."
            />
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className={styles.values}>
        <div className={styles.container}>
          <SectionHeading
            eyebrow="OUR VALUES"
            title="Principles that shape our work."
          />

          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <article
                key={value.title}
                className={styles.valueCard}
              >
                <span className={styles.valueNumber}>
                  0{index + 1}
                </span>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section
        id="expertise"
        className={styles.expertise}
      >
        <div className={styles.container}>
          <SectionHeading
            eyebrow="OUR EXPERTISE"
            title="Technology capabilities built for real-world impact."
            description="We combine modern technology with business understanding to help organizations innovate, improve efficiency, and grow."
          />

          <div className={styles.highlightsGrid}>
            {highlights.map((item) => (
              <HighlightCard
                key={item.title}
                item={item}
              />
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className={styles.approach}>
        <div className={styles.container}>
          <div className={styles.approachBox}>
            <div className={styles.approachContent}>
              <span className={styles.eyebrow}>
                OUR APPROACH
              </span>

              <h2>
                Understand.
                <span> Innovate.</span>
                <br />
                Deliver.
                <span> Scale.</span>
              </h2>

              <p>
                We start by understanding your business, then combine
                strategy, innovation, engineering excellence, and
                continuous improvement to create technology solutions
                that deliver lasting value.
              </p>
            </div>

            <div className={styles.approachSteps}>
              {[
                ["01", "Understand"],
                ["02", "Innovate"],
                ["03", "Deliver"],
                ["04", "Scale"],
              ].map(([number, label]) => (
                <div
                  key={number}
                  className={styles.approachStep}
                >
                  <strong>{number}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaBox}>
            <div>
              <span className={styles.eyebrow}>
                LET&apos;S BUILD THE FUTURE
              </span>

              <h2>
                Ready to transform your
                <span> business?</span>
              </h2>

              <p>
                Let&apos;s discuss your technology challenges and
                explore how Aastha Global IT Solutions can help you
                build, innovate, and scale.
              </p>
            </div>

            <Link
              href="/contact"
              className={styles.ctaButton}
            >
              Talk to Our Team
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}