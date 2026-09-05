import { business, services, towns } from "@/lib/data";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${business.url}/#business`,
    name: business.name,
    image: `${business.url}/og-image.jpg`,
    description:
      "Landscaping, lawn maintenance, mulch installation, hedge trimming, seasonal clean-ups, lawn repairs and snow removal in the Merrimack Valley.",
    areaServed: towns.map((t) => ({
      "@type": "City",
      name: t.name,
      containedInPlace: { "@type": "State", name: t.state === "MA" ? "Massachusetts" : "New Hampshire" },
    })),
    telephone: business.phone,
    email: business.email,
    url: business.url,
    founders: business.owners.map((name) => ({ "@type": "Person", name })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name, description: s.description },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
