import "@/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";

import Providers from "~/app/_components/providers";

export const metadata: Metadata = {
  title: {
    default: "Thinkifi",
    template: "%s | Thinkifi",
  },
  description:
    "Thinkifi is a desktop-first web application for academic debates. Professors create structured discussions called 'Thinks' while students participate by voting, posting claims and responses, and viewing AI-assisted, moderated results.",
  keywords: [
    "debate platform",
    "academic debates",
    "online discussion",
    "educational technology",
    "structured debate",
    "voting system",
    "claims and responses",
    "AI moderation",
    "Thinkifi",
  ],
  authors: [{ name: "Thinkifi Team" }],
  creator: "Thinkifi",
  metadataBase: new URL("https://thinkifi.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thinkifi.com",
    title: "Thinkifi - Online Debate Platform",
    description:
      "A desktop-first web application for academic debates. Create structured discussions, participate through voting and responses, with AI-assisted moderation.",
    siteName: "Thinkifi",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thinkifi - Online Debate Platform",
    description:
      "A desktop-first web application for academic debates. Create structured discussions, participate through voting and responses, with AI-assisted moderation.",
  },
  icons: [{ rel: "icon", url: "/thinkifi-favicon.svg" }],
  manifest: "/manifest.json",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={geist.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}