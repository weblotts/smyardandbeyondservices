import type { MetadataRoute } from "next";
import { business, towns } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  return [
    { url: base, priority: 1 },
    { url: `${base}/services`, priority: 0.9 },
    { url: `${base}/service-areas`, priority: 0.9 },
    { url: `${base}/about`, priority: 0.6 },
    { url: `${base}/contact`, priority: 0.7 },
    { url: `${base}/cookie-policy`, priority: 0.3 },
    ...towns.map((town) => ({
      url: `${base}/service-areas/${town.slug}`,
      priority: 0.8,
    })),
  ];
}
