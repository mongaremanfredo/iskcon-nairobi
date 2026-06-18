import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "ISKCON Nairobi — Faith. Community. Service.",
    template: "%s | ISKCON Nairobi",
  },
  description:
    "The digital headquarters for ISKCON East Africa. Discover Krishna Consciousness in Nairobi — temple worship, spiritual education, cow protection, food distribution, and community service.",
  keywords: ["ISKCON Nairobi", "Hare Krishna Kenya", "Krishna Consciousness", "HKTC", "Kirtan Safari", "Food For Life Kenya"],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://iskconnairobi.org",
    siteName: "ISKCON Nairobi",
    title: "ISKCON Nairobi — Faith. Community. Service.",
    description: "Discover Krishna Consciousness in the heart of East Africa.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "ISKCON Nairobi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ISKCON Nairobi",
    description: "Faith. Community. Service. — East Africa.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-temple-bg text-ink antialiased">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
