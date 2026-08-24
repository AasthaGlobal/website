// src/app/layout.tsx

import type { Metadata } from "next";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aastha Global IT Solutions",
  description:
    "Technology solutions for modern businesses.",
  keywords: [
    "Aastha Global IT Solutions",
    "IT solutions",
    "IT services",
    "software development",
    "web development",
    "technology solutions",
  ],
  metadataBase: new URL("https://agits.aasthaglobal.co"),
  openGraph: {
    title: "Aastha Global IT Solutions",
    description:
      "Technology solutions for modern businesses.",
    siteName: "Aastha Global IT Solutions",
    type: "website",
    locale: "en_US",
    url: "https://agits.aasthaglobal.co/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aastha Global IT Solutions",
    description:
      "Technology solutions for modern businesses.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}