import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Modern Hello - Interactive Greeting App",
  description: "A beautiful, interactive hello world application with multi-language greetings, real-time clock, and modern animations. Built with Next.js and Tailwind CSS.",
  keywords: ["hello world", "next.js", "react", "tailwind css", "modern ui", "interactive", "multi-language"],
  authors: [{ name: "Modern Hello Team" }],
  creator: "Modern Hello Team",
  publisher: "Modern Hello Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Modern Hello - Interactive Greeting App",
    description: "A beautiful, interactive hello world application with multi-language greetings and modern animations.",
    url: "/",
    siteName: "Modern Hello",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Modern Hello App Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Hello - Interactive Greeting App",
    description: "A beautiful, interactive hello world application with multi-language greetings and modern animations.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_VERIFICATION_ID,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
