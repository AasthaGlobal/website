import styles from "./whyChooseUs.module.css";

type WhyChooseItem = {
  number: string;
  icon: string;
  title: string;
  description: string;
};

const reasons: WhyChooseItem[] = [
  {
    number: "",
    icon: "✦",
    title: "Experienced Technology Professionals",
    description:
      "Our experienced professionals bring strong technical expertise and practical business understanding to every project.",
  },
  {
    number: "",
    icon: "☁",
    title: "Cloud & AI Expertise",
    description:
      "We leverage cloud computing and artificial intelligence to build intelligent, efficient, and future-ready solutions.",
  },
  {
    number: "",
    icon: "◈",
    title: "End-to-End Digital Solutions",
    description:
      "From strategy and development to deployment and optimization, we provide complete digital solutions under one roof.",
  },
  {
    number: "",
    icon: "◎",
    title: "Customer-Centric Approach",
    description:
      "We understand your goals and challenges first, then create solutions tailored to your business and customers.",
  },
  {
    number: "",
    icon: "⚡",
    title: "Agile Delivery",
    description:
      "Our agile approach enables faster delivery, continuous collaboration, and flexibility as your requirements evolve.",
  },
  {
    number: "",
    icon: "✓",
    title: "Scalable & Secure Solutions",
    description:
      "We build secure and scalable technology solutions designed to support your business today and as it grows.",
  },
];

function WhyChooseCard({
  item,
}: {
  item: WhyChooseItem;
}) {
  return (
    <article className={styles.card}>
      <div className={styles.cardTop}>
        <span className={styles.number}>{item.number}</span>

        <div
          className={styles.icon}
          aria-hidden="true"
        >
          {item.icon}
        </div>
      </div>

      <h3>{item.title}</h3>

      <p>{item.description}</p>

      <span
        className={styles.arrow}
        aria-hidden="true"
      >
        →
      </span>
    </article>
  );
}

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className={styles.section}
      aria-labelledby="why-choose-title"
    >
      <div
        className={styles.gridBackground}
        aria-hidden="true"
      />

      <div
        className={styles.glow}
        aria-hidden="true"
      />

      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>
              WHY CHOOSE US
            </span>

            <h2
              id="why-choose-title"
              className={styles.title}
            >
              Why businesses choose
              <span> Aastha Global.</span>
            </h2>
          </div>

          <p className={styles.introduction}>
            We combine technology expertise, innovative thinking,
            and a customer-first approach to deliver secure,
            scalable, and reliable solutions that create
            meaningful business impact.
          </p>
        </div>

        <div className={styles.grid}>
          {reasons.map((item) => (
            <WhyChooseCard
              key={item.title}
              item={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}