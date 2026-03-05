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

const siteUrl = "https://autonomous-dj-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Autonomous DJ Engine",
    template: "%s | Autonomous DJ Engine",
  },
  description:
    "Autonomous AI DJ system for festivals, livestreams, and interactive brand activations. Crowd-reactive sets, smooth handoffs, and no-silence reliability.",
  keywords: [
    "Autonomous DJ",
    "AI music",
    "AI DJ",
    "Festival tech",
    "Livestream music",
    "Generative audio",
    "ACE Step",
    "MindBot",
  ],
  openGraph: {
    title: "Autonomous DJ Engine",
    description:
      "AI DJs that improvise in real time, react to crowd energy, and never stop the music.",
    url: siteUrl,
    siteName: "Autonomous DJ Engine",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous DJ Engine",
    description:
      "Crowd-reactive AI DJ sets for festivals, livestreams, and branded experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
