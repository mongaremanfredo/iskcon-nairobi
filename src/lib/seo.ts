import type { Metadata } from "next";

export const SITE_NAME = "ISKCON Nairobi";
export const previewImage = "/brand/og-image.jpg?v=20260825";

/**
 * Gives a page its own canonical address and link preview. Without this, pages
 * inherit the root layout's values, which tell search engines that every page is
 * a duplicate of the homepage and show the homepage title when links are shared.
 */
export function withSeo(metadata: Metadata, path: string): Metadata {
  const baseTitle = typeof metadata.title === "string" ? metadata.title : SITE_NAME;
  const title = `${baseTitle} | ${SITE_NAME}`;
  const description = metadata.description ?? undefined;
  const images = [{ url: previewImage, width: 1200, height: 630, alt: `${baseTitle} at ${SITE_NAME}` }];

  return {
    ...metadata,
    alternates: { canonical: path, ...metadata.alternates },
    openGraph: { type: "website", siteName: SITE_NAME, url: path, title, description, images, ...metadata.openGraph },
    twitter: { card: "summary_large_image", title, description, images: [previewImage], ...metadata.twitter },
  };
}
