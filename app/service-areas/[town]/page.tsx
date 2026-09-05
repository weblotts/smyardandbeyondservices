import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { business, getTown, nearbyTowns, services, towns } from "@/lib/data";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ town: string }> };

export function generateStaticParams() {
  return towns.map((town) => ({ town: town.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};

  return pageMetadata({
    title: `Landscaping & Lawn Care in ${town.name}, ${town.state}`,
    description: `${business.name} provides landscaping, lawn maintenance, mulch, hedge trimming, seasonal clean-ups and snow removal in ${town.name}, ${town.state}.`,
    path: `/service-areas/${town.slug}`,
  });
}

export default async function TownPage({ params }: Props) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return notFound();

  const nearby = nearbyTowns(slug, 3);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Landscaping and lawn care",
    provider: { "@id": `${business.url}/#business` },
    areaServed: {
      "@type": "City",
      name: town.name,
      containedInPlace: { "@type": "State", name: town.state === "MA" ? "Massachusetts" : "New Hampshire" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Services in ${town.name}, ${town.state}`,
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: s.name, description: s.description },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <BreadcrumbSchema
        items={[
          { name: "Home", path: "/" },
          { name: "Service Area", path: "/service-areas" },
          { name: `${town.name}, ${town.state}`, path: `/service-areas/${town.slug}` },
        ]}
      />
      <Header />
      <main className="flex-1">
        <section className="border-b border-primary/15 bg-primary text-primary-content">
          <div className="mx-auto max-w-6xl px-6 py-14">
            <Link href="/service-areas" className="text-sm font-display font-semibold text-primary-content/70 hover:text-primary-content">
              ← All service areas
            </Link>
            <h1 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              {town.name}, {town.state}
            </h1>
            <p className="mt-4 max-w-xl text-primary-content/85">
              {business.owners[0]} and {business.owners[1]} handle every yard in {town.name}{" "}
              personally — spring clean-up through summer mowing, fall clean-up, and snow removal
              all winter.
            </p>
          </div>
        </section>

        <section className="border-b border-primary/15 bg-base-100">
          <div className="mx-auto max-w-6xl px-6 py-16">
            <p className="text-base leading-relaxed text-neutral">
              Homeowners in {town.name} call us for everything from spring clean-up and regular
              mowing to hedge trimming and mulch, and when winter hits {town.name}, we&apos;re
              still showing up — plowing driveways and clearing walkways storm after storm.
              Whether you need a one-time clean-up or year-round upkeep, we&apos;d like to take a
              look at your property and give you a straight estimate.
            </p>

            <h2 className="mt-10 font-display text-sm font-bold uppercase tracking-wide text-neutral">
              Services in {town.name}
            </h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div key={service.slug} className="card border border-primary/15 bg-base-100">
                  <div className="card-body gap-1 p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-display text-base font-semibold text-primary">
                        {service.name}
                      </h3>
                      <span className="badge badge-outline badge-accent shrink-0 font-mono text-[10px]">
                        {service.season}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {nearby.length > 0 && (
              <div className="mt-10 rounded-box border border-primary/15 bg-base-200 p-5">
                <h2 className="font-display text-sm font-bold uppercase tracking-wide text-neutral">
                  Also nearby
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {nearby.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/service-areas/${t.slug}`}
                      className="btn btn-sm btn-outline border-primary/30 font-display font-semibold text-primary hover:border-primary hover:bg-primary hover:text-primary-content"
                    >
                      {t.name}, {t.state}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </>
  );
}
