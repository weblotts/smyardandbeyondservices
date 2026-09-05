import { business, services, towns } from "@/lib/data";

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: business.name,
    description:
      "Landscaping, lawn maintenance, mulch installation, hedge trimming, seasonal clean-ups, lawn repairs and snow removal in the Merrimack Valley.",
    areaServed: towns.map((t) => `${t.name}, ${t.state}`),
    telephone: business.phone,
    email: business.email,
    url: business.url,
    founders: business.owners.map((name) => ({ "@type": "Person", name })),
    makesOffer: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.name },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
