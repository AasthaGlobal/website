import type { Metadata } from "next";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aastha Global IT Solutions",
  description:
    "Technology solutions for modern businesses.",
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