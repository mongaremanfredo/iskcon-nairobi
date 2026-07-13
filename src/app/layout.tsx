import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import SavannaDivider from "@/components/ui/SavannaDivider";

export const metadata: Metadata = {
  metadataBase: new URL("https://iskcon-nairobi.vercel.app"),
  title: {
    default: "ISKCON Nairobi - Faith. Community. Service.",
    template: "%s | ISKCON Nairobi",
  },
  description:
    "The digital headquarters for ISKCON East Africa. Discover Krishna Consciousness in Nairobi - temple worship, spiritual education, cow protection, food distribution, and community service.",
  keywords: ["ISKCON Nairobi", "Hare Krishna Kenya", "Krishna Consciousness", "HKTC", "Kirtan Safari", "Food For Life Kenya"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iskcon-nairobi.vercel.app",
    siteName: "ISKCON Nairobi",
    title: "ISKCON Nairobi - Faith. Community. Service.",
    description: "Discover Krishna Consciousness in the heart of East Africa.",
    images: [
      {
        url: "/images/iskcon-nairobi-aerial-og.jpg",
        width: 1200,
        height: 630,
        alt: "Aerial view of ISKCON Nairobi temple and Nairobi skyline",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISKCON Nairobi",
    description: "Faith. Community. Service. - East Africa.",
    images: ["/images/iskcon-nairobi-aerial-og.jpg"],
  },
  icons: {
    icon: [
      { url: "/icon.png", sizes: "32x32", type: "image/png" },
      { url: "/brand/iskcon-icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-sand text-dusk antialiased">
        <Navigation />
        <main>{children}</main>
        <SavannaDivider tone="sand" />
        <Footer />
      </body>
    </html>
  );
}
