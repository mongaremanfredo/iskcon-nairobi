import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SavannaDivider from "@/components/ui/SavannaDivider";
import PwaRegistrar from "@/components/system/PwaRegistrar";
import { templeInfo } from "@/data/site";

const siteUrl = "https://iskcon-nairobi.vercel.app";
const previewImage = "/brand/og-image.jpg";
const iconVersion = "v=iskcon-tab-icon-2026-07-30-2";
const siteTitle = "ISKCON Nairobi | Sri Sri Radha Bankebihari Temple";
const siteDescription =
  "Visit ISKCON Nairobi, Sri Sri Radha Bankebihari Temple: daily darshan, kirtan, prasadam, spiritual education, festivals, cow protection, and service in East Africa.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "ISKCON Nairobi",
  title: {
    default: siteTitle,
    template: "%s | ISKCON Nairobi",
  },
  description: siteDescription,
  keywords: ["ISKCON Nairobi", "Hare Krishna Kenya", "Krishna Consciousness", "HKTC", "Kirtan Safari", "Food For Life Kenya"],
  authors: [{ name: "ISKCON Nairobi" }],
  creator: "ISKCON Nairobi",
  publisher: "ISKCON Nairobi",
  category: "religion",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  appleWebApp: {
    capable: true,
    title: "ISKCON Nairobi",
    statusBarStyle: "black-translucent",
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "ISKCON Nairobi",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: previewImage,
        width: 1200,
        height: 630,
        alt: "ISKCON Nairobi link preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [previewImage],
  },
  icons: {
    icon: [
      { url: `/favicon.ico?${iconVersion}`, sizes: "any" },
      { url: `/icon.png?${iconVersion}`, sizes: "32x32", type: "image/png" },
      { url: `/brand/icon-192.png?${iconVersion}`, sizes: "192x192", type: "image/png" },
      { url: `/brand/icon-512.png?${iconVersion}`, sizes: "512x512", type: "image/png" },
      { url: `/brand/iskcon-icon.svg?${iconVersion}`, type: "image/svg+xml" },
    ],
    apple: [
      { url: `/apple-icon.png?${iconVersion}`, sizes: "180x180", type: "image/png" },
      { url: `/brand/apple-touch-icon.png?${iconVersion}`, sizes: "180x180", type: "image/png" },
    ],
    shortcut: [`/favicon.ico?${iconVersion}`],
  },
  other: {
    "theme-color": "#3a2a24",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HinduTemple",
  name: templeInfo.name,
  alternateName: templeInfo.legalName,
  url: siteUrl,
  telephone: templeInfo.phoneHref,
  email: templeInfo.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Hare Krishna Close, Parklands / West Ngara",
    addressLocality: "Nairobi",
    addressCountry: "KE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "04:30",
      closes: "12:45",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "16:30",
      closes: "20:45",
    },
  ],
  image: `${siteUrl}${previewImage}`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sand text-dusk antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <PwaRegistrar />
        <Navigation />
        <main>{children}</main>
        <SavannaDivider tone="sand" className="h-[7vw] min-h-6 sm:h-24" />
        <Footer />
      </body>
    </html>
  );
}
