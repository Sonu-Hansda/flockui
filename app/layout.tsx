import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/next"
import { PostHogProvider } from "./providers"
import JsonLd from "@/components/JsonLd";
import { websiteJsonLd, organizationJsonLd } from "@/lib/json-ld";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "FlockUI - Flutter UI Library Platform",
    template: "%s | FlockUI",
  },
  description: "Open source Flutter UI components. Preview, copy, and paste high-quality components into your Flutter apps.",
  metadataBase: new URL("https://flockui.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "FlockUI - Flutter UI Component Library",
    description: "An open-source collection of copy-paste Flutter UI components. Browse the preview, grab the code, and ship faster.",
    siteName: "FlockUI",
    type: "website",
    images: ["/hero_showcase.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlockUI - Flutter UI Component Library",
    description: "An open-source collection of copy-paste Flutter UI components. Browse the preview, grab the code, and ship faster.",
    images: ["/hero_showcase.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <JsonLd id="website-schema" json={websiteJsonLd()} />
        <JsonLd id="organization-schema" json={organizationJsonLd()} />
      </head>
      <body className="min-h-full flex flex-col bg-white transition-colors duration-200">
        <PostHogProvider>
          <ThemeProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </ThemeProvider>
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
