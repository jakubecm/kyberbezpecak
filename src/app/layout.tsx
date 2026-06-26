import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
  metadataBase: new URL("https://kyberbezpecak.cz"),
  title: {
    default: "Kyberbezpečák | Blog o kybernetické bezpečnosti",
    template: "%s | Kyberbezpečák",
  },
  description:
    "Osobní blog Milana Jakubce o kybernetické bezpečnosti. Články o AppSec, Red & Blue Teamu, legislativě, CTF a case studies.",
  keywords: [
    "kybernetická bezpečnost",
    "cybersecurity",
    "AppSec",
    "pentesting",
    "blue team",
    "red team",
    "CTF",
    "bezpečnost",
    "blog",
  ],
  authors: [{ name: "Milan Jakubec" }],
  creator: "Milan Jakubec",
  openGraph: {
    type: "website",
    locale: "cs_CZ",
    url: "https://kyberbezpecak.cz",
    siteName: "Kyberbezpečák",
    title: "Kyberbezpečák | Blog o kybernetické bezpečnosti",
    description:
      "Osobní blog Milana Jakubce o kybernetické bezpečnosti – AppSec, Red & Blue Team, legislativa, CTF a case studies.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kyberbezpečák | Blog o kybernetické bezpečnosti",
    description:
      "Osobní blog Milana Jakubce o kybernetické bezpečnosti.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
