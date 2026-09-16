import type { Metadata } from "next";
import { headers } from "next/headers";
import { IBM_Plex_Sans, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = await headers();
  const locale = headersList.get("x-locale") ?? "cs";

  return (
    <html
      lang={locale}
      className={`${plexSans.variable} ${jetbrainsMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
