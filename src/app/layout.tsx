import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://autonomous-dj-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Autonomous DJ | Premium AI Performance System",
    template: "%s | Autonomous DJ",
  },
  description:
    "Autonomous DJ is a production-ready AI performance system for festivals, livestreams, and branded activations with adaptive set flow and dead-air protection.",
  keywords: [
    "Autonomous DJ",
    "AI DJ platform",
    "Live AI music",
    "Festival tech",
    "Livestream music",
    "Branded activations",
    "Generative DJ system",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Autonomous DJ | Premium AI Performance System",
    description:
      "Launch crowd-reactive AI DJ performances with clear operator controls, reliable fallbacks, and replayable session manifests.",
    url: siteUrl,
    siteName: "Autonomous DJ",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Autonomous DJ | Premium AI Performance System",
    description:
      "Production-ready AI DJ sets for festivals, livestreams, and branded experiences.",
  },
  robots: {
    index: true,
    follow: true,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
