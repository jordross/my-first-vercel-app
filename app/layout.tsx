import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const description =
  "Commercial grounds maintenance for stratas, property managers and commercial buildings in Vancouver, BC. Written scopes, photo reports after every visit, irrigation checks and seasonal cleanups. Now quoting January 2027 starts.";

export const metadata: Metadata = {
  title: "Happy Bee Landscaping | Commercial & Strata Grounds Maintenance | Vancouver, BC",
  description,
  keywords: [
    "commercial landscaping Vancouver",
    "strata landscaping Vancouver",
    "strata grounds maintenance",
    "property management landscaping",
    "commercial landscape maintenance Metro Vancouver",
  ],
  openGraph: {
    title: "Happy Bee Landscaping | Commercial & Strata Grounds Maintenance",
    description,
    type: "website",
    locale: "en_CA",
    siteName: "Happy Bee Landscaping",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
