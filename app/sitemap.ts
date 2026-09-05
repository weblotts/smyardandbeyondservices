import type { MetadataRoute } from "next";
import { business, towns } from "@/lib/data";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.url;
  return [
    { url: base, priority: 1 },
    ...towns.map((town) => ({
      url: `${base}/service-areas/${town.slug}`,
      priority: 0.8,
    })),
  ];
}
