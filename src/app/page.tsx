import type { Metadata } from "next";

import Hero from "./components/Hero/hero";
import Services from "./components/services/Services";

export const metadata: Metadata = {
  title: "Aastha Global IT Solutions | IT Solutions & Services",
  description:
    "Aastha Global IT Solutions provides reliable IT solutions and technology services to help businesses grow, innovate, and succeed.",
  keywords: [
    "Aastha Global IT Solutions",
    "IT solutions",
    "IT services",
    "software development",
    "web development",
    "technology solutions",
  ],
  alternates: {
    canonical: "https://agits.aasthaglobal.co/",
  },
  openGraph: {
    title: "Aastha Global IT Solutions | IT Solutions & Services",
    description:
      "Reliable IT solutions and technology services for modern businesses.",
    url: "https://agits.aasthaglobal.co/",
    siteName: "Aastha Global IT Solutions",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastha Global IT Solutions | IT Solutions & Services",
    description:
      "Reliable IT solutions and technology services for modern businesses.",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      {/* Other sections */}
    </main>
  );
}