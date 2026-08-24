"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import styles from "./service.module.css";

interface Service {
  number: string;
  icon: string;
  title: string;
  description: string;
  guidance: string;
  points: string[];
  technologies: string[];
}

const services: Service[] = [
  {
    number: "01",
    icon: "☁",
    title: "Cloud Consulting",
    description:
      "Strategy, architecture, migration and optimization across Azure, AWS and GCP.",
    guidance:
      "We help businesses move to the cloud, improve their existing infrastructure and create a secure, scalable cloud strategy. Whether you are starting your cloud journey or optimizing an existing environment, our team can guide you from planning to implementation.",
    points: [
      "Cloud strategy and architecture",
      "AWS, Azure and Google Cloud migration",
      "Cloud infrastructure optimization",
      "Security and scalability planning",
      "Cloud cost optimization",
    ],
    technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
  },
  {
    number: "02",
    icon: "✦",
    title: "AI & Digital Transformation",
    description:
      "AI-powered solutions, automation and intelligent business transformation.",
    guidance:
      "We help businesses identify where AI and automation can create real value. From intelligent workflows to AI-powered applications, we design practical solutions that improve productivity and help your organization operate smarter.",
    points: [
      "AI strategy and consulting",
      "Business process automation",
      "AI-powered applications",
      "Intelligent workflows",
      "Digital transformation planning",
    ],
    technologies: ["AI", "Machine Learning", "LLMs", "Automation", "APIs"],
  },
  {
    number: "03",
    icon: "◎",
    title: "Web Application Development",
    description:
      "Modern, scalable and secure web applications using the latest technologies.",
    guidance:
      "We build modern web applications that are fast, secure and designed around your business requirements. From customer-facing platforms to internal enterprise systems, we create applications that can grow with your business.",
    points: [
      "Custom web applications",
      "Enterprise platforms",
      "Business dashboards",
      "API development",
      "Performance and security optimization",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL"],
  },
  {
    number: "04",
    icon: "▣",
    title: "Mobile App Development",
    description:
      "Native and cross-platform Android & iOS applications.",
    guidance:
      "We design and develop mobile applications that provide smooth experiences across Android and iOS. Our development process covers UI/UX, development, API integration, testing and deployment.",
    points: [
      "Android application development",
      "iOS application development",
      "Cross-platform applications",
      "Mobile UI/UX development",
      "API and backend integration",
    ],
    technologies: ["React Native", "Flutter", "Android", "iOS", "REST APIs"],
  },
  {
    number: "05",
    icon: "◉",
    title: "UI/UX & Web Design",
    description:
      "Modern, responsive and user-centric website and application design.",
    guidance:
      "We create clean and engaging digital experiences that balance visual design with usability. Our design process focuses on understanding your users, creating intuitive interfaces and building a consistent visual identity.",
    points: [
      "UI/UX research",
      "Website design",
      "Application interface design",
      "Wireframes and prototypes",
      "Responsive design systems",
    ],
    technologies: ["Figma", "UX Research", "Prototyping", "Design Systems"],
  },
  {
    number: "06",
    icon: "⌘",
    title: "DevOps & Cloud Automation",
    description:
      "CI/CD, Infrastructure as Code, Kubernetes and cloud automation.",
    guidance:
      "We help development teams release software faster and more reliably through automation. Our DevOps solutions reduce manual work, improve deployment processes and provide better visibility into your infrastructure.",
    points: [
      "CI/CD pipeline implementation",
      "Infrastructure as Code",
      "Containerization",
      "Kubernetes implementation",
      "Cloud monitoring and automation",
    ],
    technologies: [
      "Docker",
      "Kubernetes",
      "Terraform",
      "GitHub Actions",
      "Jenkins",
    ],
  },
  {
    number: "07",
    icon: "◌",
    title: "Managed IT Services",
    description:
      "Infrastructure monitoring, cloud operations and ongoing technical support.",
    guidance:
      "Our managed IT services help businesses keep their technology reliable and available. We provide ongoing monitoring, maintenance and technical support so your team can focus on their core business.",
    points: [
      "Infrastructure monitoring",
      "Cloud operations",
      "Server management",
      "Technical support",
      "System maintenance",
    ],
    technologies: [
      "Cloud Infrastructure",
      "Linux",
      "Windows Server",
      "Networking",
      "Monitoring",
    ],
  },
  {
    number: "08",
    icon: "◈",
    title: "Data & Analytics",
    description:
      "Business intelligence, dashboards, reporting and data engineering solutions.",
    guidance:
      "We turn your business data into useful insights. Our data and analytics solutions help you understand performance, identify trends and make better decisions using reliable reporting and visualization.",
    points: [
      "Business intelligence",
      "Interactive dashboards",
      "Data engineering",
      "Automated reporting",
      "Data visualization",
    ],
    technologies: ["Power BI", "SQL", "Python", "ETL", "Data Warehousing"],
  },
  {
    number: "09",
    icon: "◇",
    title: "Cybersecurity & Compliance",
    description:
      "Security assessments, identity management and cloud security best practices.",
    guidance:
      "We help organizations identify vulnerabilities and improve their security posture. Our approach focuses on protecting applications, infrastructure, identities and cloud environments.",
    points: [
      "Security assessments",
      "Identity and access management",
      "Cloud security",
      "Security best practices",
      "Compliance guidance",
    ],
    technologies: [
      "IAM",
      "Cloud Security",
      "Zero Trust",
      "Encryption",
      "Security Monitoring",
    ],
  },
  {
    number: "10",
    icon: "⬡",
    title: "Custom Software Development",
    description:
      "Tailor-made enterprise applications and business software solutions.",
    guidance:
      "When existing software cannot meet your requirements, we build a solution specifically for your business. We work with you to understand your processes and create scalable software around your actual needs.",
    points: [
      "Custom enterprise applications",
      "Business automation software",
      "Custom APIs",
      "Legacy system modernization",
      "Scalable software architecture",
    ],
    technologies: ["Next.js", "React", "Node.js", "Python", "Databases"],
  },
];

export default function Services() {
  const router = useRouter();
  const [activeService, setActiveService] = useState<Service | null>(null);

  const handleLearnMore = (service: Service) => {
    setActiveService(service);
  };

  const handleClose = () => {
    setActiveService(null);
  };

  const handleConversation = () => {
    handleClose();
    router.push("/contact");
  };

  return (
    <section
      className={styles.servicesPage}
      aria-labelledby="services-title"
    >
      <div className={styles.servicesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div className={styles.headingArea}>
              <div className={styles.eyebrow}>
                <span className={styles.eyebrowDot} aria-hidden="true" />
                OUR EXPERTISE
                <span className={styles.eyebrowDot} aria-hidden="true" />
              </div>

              <h2 id="services-title" className={styles.heading}>
                Solutions built for
                <br />
                <span>what&apos;s next.</span>
              </h2>
            </div>

            <p className={styles.exploreText}>
              Explore our technology capabilities and discover how we can
              help you build, scale and transform your business.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {services.map((service) => (
              <article
                className={styles.serviceCard}
                key={service.number}
              >
                <div className={styles.cardNumber}>
                  {service.number}
                </div>

                <div className={styles.iconBox} aria-hidden="true">
                  <span className={styles.serviceIcon}>
                    {service.icon}
                  </span>
                </div>

                <div className={styles.cardContent}>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>

                <button
                  type="button"
                  className={styles.learnMore}
                  onClick={() => handleLearnMore(service)}
                >
                  <span>Learn More</span>

                  <span
                    className={styles.learnArrow}
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </button>
              </article>
            ))}
          </div>

          <div className={styles.bottomCta}>
            <div className={styles.ctaContent}>
              <span className={styles.ctaLabel}>
                LET&apos;S BUILD SOMETHING GREAT
              </span>

              <h2>Have a project in mind?</h2>

              <p>
                Tell us what you want to build, improve or transform.
                Our team can help you choose the right technology
                approach.
              </p>
            </div>

            <button
              type="button"
              className={styles.startConversation}
              onClick={handleConversation}
            >
              Start a Conversation
              <span aria-hidden="true">↗</span>
            </button>
          </div>
        </div>
      </div>

      {activeService && (
        <div
          className={styles.modalBackdrop}
          onClick={handleClose}
        >
          <div
            className={styles.modal}
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="service-modal-title"
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={handleClose}
              aria-label="Close service details"
            >
              ×
            </button>

            <div className={styles.modalTop}>
              <div className={styles.modalIcon} aria-hidden="true">
                {activeService.icon}
              </div>

              <div>
                <span className={styles.modalServiceNumber}>
                  SERVICE {activeService.number}
                </span>

                <h2 id="service-modal-title">
                  {activeService.title}
                </h2>
              </div>
            </div>

            <div className={styles.guidanceBox}>
              <div className={styles.guidanceTitle}>
                How we can help
              </div>

              <p>{activeService.guidance}</p>
            </div>

            <div className={styles.modalBlock}>
              <h3>What we provide</h3>

              <div className={styles.pointsGrid}>
                {activeService.points.map((point) => (
                  <div className={styles.point} key={point}>
                    <span
                      className={styles.checkIcon}
                      aria-hidden="true"
                    >
                      ✓
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.modalBlock}>
              <h3>Technologies &amp; capabilities</h3>

              <div className={styles.technologyList}>
                {activeService.technologies.map((technology) => (
                  <span
                    className={styles.technology}
                    key={technology}
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className={styles.modalConversation}
                onClick={handleConversation}
              >
                Start a Conversation
                <span aria-hidden="true">↗</span>
              </button>

              <button
                type="button"
                className={styles.modalClose}
                onClick={handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}