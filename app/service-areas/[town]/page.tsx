import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Services from "@/components/Services";
import Seasons from "@/components/Seasons";
import ServiceArea from "@/components/ServiceArea";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { business, getTown, nearbyTowns, towns } from "@/lib/data";

type Props = { params: Promise<{ town: string }> };

export function generateStaticParams() {
  return towns.map((town) => ({ town: town.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};
  return {
    title: `Landscaping & Lawn Care in ${town.name}, ${town.state} | ${business.name}`,
    description: `${business.name} provides landscaping, lawn maintenance, mulch, hedge trimming, seasonal clean-ups and snow removal in ${town.name}, ${town.state}.`,
  };
}

export default async function TownPage({ params }: Props) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return notFound();

  const nearby = nearbyTowns(slug, 3);

  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero townName={`${town.name}, ${town.state}`} />

        <section className="border-b border-pine/15 bg-paper">
          <div className="mx-auto max-w-3xl px-6 py-16">
            <h2 className="font-display text-3xl font-bold text-pine-deep sm:text-4xl">
              Landscaping and lawn care in {town.name}, {town.state}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate">
              {business.owners[0]} and {business.owners[1]} handle every yard in {town.name}{" "}
              personally, from a first walkthrough to the last pass of the season. Homeowners in{" "}
              {town.name} call us for everything from spring clean-up and regular mowing to hedge
              trimming and mulch, and when winter hits {town.name}, we&apos;re still showing up —
              plowing driveways and clearing walkways storm after storm.
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate">
              Whether you need a one-time clean-up or year-round upkeep, we&apos;d like to take a
              look at your {town.name} property and give you a straight estimate.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              <Link href="/" className="font-display font-semibold text-pine-deep hover:underline">
                ← Back to the main page
              </Link>
              {nearby.map((t) => (
                <Link
                  key={t.slug}
                  href={`/service-areas/${t.slug}`}
                  className="font-display font-semibold text-pine-deep hover:underline"
                >
                  We also serve {t.name}, {t.state}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Services />
        <Seasons />
        <ServiceArea currentSlug={town.slug} />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
