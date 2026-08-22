"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import styles from "./ContactUs.module.css";

type FormData = {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const services = [
  {
    name: "Cloud Consulting",
    description:
      "Strategy, architecture, migration and optimization across Azure, AWS and GCP.",
  },
  {
    name: "AI & Digital Transformation",
    description:
      "AI-powered solutions, automation and intelligent business transformation.",
  },
  {
    name: "Web Application Development",
    description:
      "Modern, scalable and secure web applications using the latest technologies.",
  },
  {
    name: "Mobile App Development",
    description:
      "Native and cross-platform Android & iOS applications.",
  },
  {
    name: "UI/UX & Web Design",
    description:
      "Modern, responsive and user-centric website and application design.",
  },
  {
    name: "DevOps & Cloud Automation",
    description:
      "CI/CD, Infrastructure as Code, Kubernetes and cloud automation.",
  },
  {
    name: "Managed IT Services",
    description:
      "Infrastructure monitoring, cloud operations and ongoing technical support.",
  },
  {
    name: "Data & Analytics",
    description:
      "Business intelligence, dashboards, reporting and data engineering solutions.",
  },
  {
    name: "Cybersecurity & Compliance",
    description:
      "Security assessments, identity management and cloud security best practices.",
  },
  {
    name: "Custom Software Development",
    description:
      "Tailor-made enterprise applications and business software solutions.",
  },
];

const initialFormData: FormData = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!data.companyName.trim()) {
    errors.companyName = "Please enter your company name.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your business email.";
  } else if (
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email.trim())
  ) {
    errors.email = "Please enter a valid email address.";
  }

  if (data.phone.trim()) {
    const phoneDigits = data.phone.replace(/\D/g, "");

    if (phoneDigits.length < 10 || phoneDigits.length > 15) {
      errors.phone = "Please enter a valid phone number.";
    }
  }

  if (!data.service) {
    errors.service = "Please select a service.";
  }

  if (!data.message.trim()) {
    errors.message = "Please tell us about your requirements.";
  } else if (data.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters.";
  }

  return errors;
}

export default function ContactUs() {
  const [formData, setFormData] =
    useState<FormData>(initialFormData);

  const [errors, setErrors] =
    useState<FormErrors>({});

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => ({
      ...current,
      [name]: undefined,
    }));

    setStatus("idle");
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const validationErrors =
      validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("error");

      const firstError =
        Object.keys(validationErrors)[0];

      document
        .getElementById(firstError)
        ?.focus();

      return;
    }

    setIsSubmitting(true);
    setStatus("idle");

    try {
      /*
       * PLACEHOLDER SUBMISSION HANDLER
       *
       * Backend/email/CRM integration can be
       * added here later.
       *
       * Example:
       *
       * await fetch("/api/contact", {
       *   method: "POST",
       *   headers: {
       *     "Content-Type": "application/json",
       *   },
       *   body: JSON.stringify(formData),
       * });
       */

      await new Promise((resolve) =>
        setTimeout(resolve, 800)
      );

      setStatus("success");
      setFormData(initialFormData);
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={styles.contactPage}>
      {/* =========================
          HERO
      ========================== */}
      <section className={styles.contactHero}>
        <div
          className={styles.heroGlow}
          aria-hidden="true"
        />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              GET IN TOUCH
            </span>

            <h1>
              Let&apos;s build something
              <span> remarkable together.</span>
            </h1>

            <p>
              Have a technology challenge, a new idea,
              or a digital transformation goal? Talk to
              our team and discover how Aastha Global IT
              Solutions can help you build, innovate,
              and scale.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT SECTION
      ========================== */}
      <section className={styles.contactSection}>
        <div className={styles.container}>
          <div className={styles.contactGrid}>

            {/* =========================
                CONTACT INFORMATION
            ========================== */}
            <aside className={styles.contactInfo}>
              <span className={styles.sectionLabel}>
                CONTACT US
              </span>

              <h2>
                Let&apos;s start a
                <span> conversation.</span>
              </h2>

              <p className={styles.contactIntro}>
                Tell us about your business requirements,
                technology challenges, or project ideas.
                Our team will get back to you to discuss
                the best way forward.
              </p>

              <div className={styles.infoList}>

                {/* EMAIL */}
                <a
                  href="mailto:info@aasthaglobal.co"
                  className={styles.infoItem}
                >
                  <div
                    className={styles.infoIcon}
                    aria-hidden="true"
                  >
                    @
                  </div>

                  <div>
                    <span>Email</span>
                    <strong>
                      info@aasthaglobal.co
                    </strong>
                  </div>
                </a>

                {/* PHONE */}
                <a
                  href="tel:+918074854737"
                  className={styles.infoItem}
                >
                  <div
                    className={styles.infoIcon}
                    aria-hidden="true"
                  >
                    ☎
                  </div>

                  <div>
                    <span>Phone</span>
                    <strong>
                      +91 80748 54737
                    </strong>
                  </div>
                </a>

                {/* WEBSITE */}
                <a
                  href="https://aasthaglobal.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.infoItem}
                >
                  <div
                    className={styles.infoIcon}
                    aria-hidden="true"
                  >
                    ◈
                  </div>

                  <div>
                    <span>Website</span>
                    <strong>
                      aasthaglobal.co
                    </strong>
                  </div>
                </a>

                {/* LOCATION */}
                <div className={styles.infoItem}>
                  <div
                    className={styles.infoIcon}
                    aria-hidden="true"
                  >
                    ◎
                  </div>

                  <div>
                    <span>Location</span>
                    <strong>
                      Vadodara, Gujarat, India
                    </strong>
                  </div>
                </div>
              </div>

              {/* SOCIAL */}
              <div className={styles.socialSection}>
                <span>Connect with us</span>

                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinButton}
                  aria-label="Visit Aastha Global IT Solutions LinkedIn"
                >
                  <span
                    className={styles.linkedinIcon}
                    aria-hidden="true"
                  >
                    in
                  </span>

                  LinkedIn
                </a>
              </div>

              {/* MAP PLACEHOLDER */}
              <div
                className={styles.mapPlaceholder}
                aria-label="Google Maps location placeholder"
              >
                <div className={styles.mapOverlay}>
                  <span
                    className={styles.mapPin}
                    aria-hidden="true"
                  >
                    ◎
                  </span>

                  <strong>
                    Vadodara, Gujarat
                  </strong>

                  <span>
                    India
                  </span>
                </div>
              </div>
            </aside>

            {/* =========================
                CONTACT FORM
            ========================== */}
            <div className={styles.formWrapper}>
              <div className={styles.formHeader}>
                <span className={styles.formEyebrow}>
                  FREE CONSULTATION
                </span>

                <h2>
                  Tell us about your
                  <span> project.</span>
                </h2>

                <p>
                  Fill out the form below and our team
                  will contact you to discuss your
                  requirements.
                </p>
              </div>

              <form
                className={styles.contactForm}
                onSubmit={handleSubmit}
                noValidate
              >

                {/* NAME + COMPANY */}
                <div className={styles.formRow}>

                  <div className={styles.formGroup}>
                    <label htmlFor="fullName">
                      Full Name{" "}
                      <span aria-hidden="true">
                        *
                      </span>
                    </label>

                    <input
                      id="fullName"
                      name="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.fullName}
                      onChange={handleChange}
                      aria-invalid={
                        !!errors.fullName
                      }
                      aria-describedby={
                        errors.fullName
                          ? "fullName-error"
                          : undefined
                      }
                      autoComplete="name"
                    />

                    {errors.fullName && (
                      <span
                        id="fullName-error"
                        className={styles.errorMessage}
                      >
                        {errors.fullName}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="companyName">
                      Company Name{" "}
                      <span aria-hidden="true">
                        *
                      </span>
                    </label>

                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      placeholder="Enter your company name"
                      value={formData.companyName}
                      onChange={handleChange}
                      aria-invalid={
                        !!errors.companyName
                      }
                      aria-describedby={
                        errors.companyName
                          ? "companyName-error"
                          : undefined
                      }
                      autoComplete="organization"
                    />

                    {errors.companyName && (
                      <span
                        id="companyName-error"
                        className={styles.errorMessage}
                      >
                        {errors.companyName}
                      </span>
                    )}
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className={styles.formRow}>

                  <div className={styles.formGroup}>
                    <label htmlFor="email">
                      Business Email{" "}
                      <span aria-hidden="true">
                        *
                      </span>
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={
                        !!errors.email
                      }
                      aria-describedby={
                        errors.email
                          ? "email-error"
                          : undefined
                      }
                      autoComplete="email"
                    />

                    {errors.email && (
                      <span
                        id="email-error"
                        className={styles.errorMessage}
                      >
                        {errors.email}
                      </span>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">
                      Phone Number{" "}
                      <span className={styles.optional}>
                        (Optional)
                      </span>
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 80748 54737"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-invalid={
                        !!errors.phone
                      }
                      aria-describedby={
                        errors.phone
                          ? "phone-error"
                          : undefined
                      }
                      autoComplete="tel"
                    />

                    {errors.phone && (
                      <span
                        id="phone-error"
                        className={styles.errorMessage}
                      >
                        {errors.phone}
                      </span>
                    )}
                  </div>
                </div>

                {/* SERVICE */}
                <div className={styles.formGroup}>
                  <label htmlFor="service">
                    Service Required{" "}
                    <span aria-hidden="true">
                      *
                    </span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    aria-invalid={
                      !!errors.service
                    }
                    aria-describedby={
                      errors.service
                        ? "service-error"
                        : undefined
                    }
                    required
                  >
                    <option value="">
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service.name}
                        value={service.name}
                      >
                        {service.name}
                      </option>
                    ))}
                  </select>

                  {errors.service && (
                    <span
                      id="service-error"
                      className={styles.errorMessage}
                    >
                      {errors.service}
                    </span>
                  )}
                </div>

                {/* MESSAGE */}
                <div className={styles.formGroup}>
                  <label htmlFor="message">
                    Message{" "}
                    <span aria-hidden="true">
                      *
                    </span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us about your project, requirements or business challenge..."
                    value={formData.message}
                    onChange={handleChange}
                    aria-invalid={
                      !!errors.message
                    }
                    aria-describedby={
                      errors.message
                        ? "message-error"
                        : undefined
                    }
                  />

                  {errors.message && (
                    <span
                      id="message-error"
                      className={styles.errorMessage}
                    >
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* STATUS MESSAGE */}
                {status === "success" && (
                  <div
                    className={styles.successMessage}
                    role="status"
                  >
                    <span aria-hidden="true">
                      ✓
                    </span>

                    <div>
                      <strong>
                        Request received successfully!
                      </strong>

                      <p>
                        Thank you for contacting us.
                        Our team will get back to you
                        shortly.
                      </p>
                    </div>
                  </div>
                )}

                {status === "error" &&
                  Object.keys(errors).length === 0 && (
                    <div
                      className={styles.formError}
                      role="alert"
                    >
                      Something went wrong. Please try
                      again.
                    </div>
                  )}

                {/* SUBMIT */}
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSubmitting}
                >
                  <span>
                    {isSubmitting
                      ? "Submitting..."
                      : "Request a Free Consultation"}
                  </span>

                  {!isSubmitting && (
                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>
                  )}
                </button>

                <p className={styles.formNote}>
                  By submitting this form, you agree
                  to be contacted regarding your
                  enquiry.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}