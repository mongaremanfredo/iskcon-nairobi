import type { Metadata } from "next";

export const SITE_URL = "https://iskconnairobi.com";
export const SITE_NAME = "ISKCON Nairobi";
export const DEFAULT_SOCIAL_IMAGE = "/brand/og-image.jpg?v=20260825";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: `/${string}` | "/";
  image?: string;
  imageAlt?: string;
  noIndex?: boolean;
};

function brandedTitle(title: string) {
  return title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
}

/**
 * Builds complete route metadata so pages never inherit the homepage URL or
 * social card by accident. Use the route's strongest real image whenever one
 * is available; the branded fallback is reserved for text-led pages.
 */
export function createPageMetadata({
  title,
  description,
  path,
  image = DEFAULT_SOCIAL_IMAGE,
  imageAlt,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const socialTitle = brandedTitle(title);

  return {
    title: { absolute: socialTitle },
    description,
    alternates: { canonical: path },
    robots: noIndex
      ? { index: false, follow: true, googleBot: { index: false, follow: true } }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_KE",
      url: path,
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      images: [{ url: image, alt: imageAlt ?? socialTitle }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
