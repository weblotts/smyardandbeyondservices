import type { Metadata } from "next";
import { business } from "@/lib/data";

const OG_IMAGE = { url: "/og-image.jpg", width: 1200, height: 630, alt: business.name };

/**
 * Builds page metadata with Open Graph/Twitter fields always included.
 *
 * Next.js merges metadata objects *shallowly* across the layout/page tree —
 * if a page sets its own `openGraph`, it fully replaces (not merges with)
 * the layout's, dropping fields like `images` and `siteName`. Routing every
 * page's metadata through this helper keeps those fields present everywhere.
 */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = opts;
  const fullTitle = path === "/" ? title : `${title} | ${business.name}`;

  return {
    title: fullTitle,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: business.name,
      title: fullTitle,
      description,
      url: path,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}
