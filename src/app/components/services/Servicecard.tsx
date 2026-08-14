
import {
  ArrowUpRight,
} from "lucide-react";

import type { Service } from "./Service.type";
import styles from "./service.module.css";

interface ServiceCardProps {
  service: Service;
  onLearnMore: (service: Service) => void;
  featured?: boolean;
}

export default function ServiceCard({
  service,
  onLearnMore,
  featured = false,
}: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <article
      className={`${styles.card} ${
        featured ? styles.featuredCard : ""
      }`}
    >
      <div
        className={styles.cardGlow}
        aria-hidden="true"
      />

      <div className={styles.cardTop}>
        <div className={styles.iconBox}>
          <Icon
            size={25}
            strokeWidth={1.7}
            aria-hidden="true"
          />
        </div>

        <span className={styles.cardNumber}>
          {service.id}
        </span>
      </div>

      <div className={styles.cardBody}>
        <h3>{service.title}</h3>

        <p>{service.description}</p>
      </div>

      <div className={styles.cardFooter}>
        <button
          type="button"
          className={styles.learnMore}
          onClick={() => onLearnMore(service)}
          aria-label={`Learn more about ${service.title}`}
        >
          <span>Learn More</span>

          <span className={styles.arrowCircle}>
            <ArrowUpRight
              size={16}
              strokeWidth={2}
              aria-hidden="true"
            />
          </span>
        </button>
      </div>
    </article>
  );
}

