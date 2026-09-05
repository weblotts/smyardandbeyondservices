import Link from "next/link";
import { towns } from "@/lib/data";

export default function ServiceArea({ currentSlug }: { currentSlug?: string }) {
  return (
    <section className="border-b border-primary/15 bg-base-200">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-primary sm:text-4xl">
          Where we work
        </h2>
        <p className="mt-3 max-w-2xl text-neutral">
          Based in the Merrimack Valley, covering towns across Massachusetts and southern New
          Hampshire.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {towns.map((town) => {
            const isCurrent = town.slug === currentSlug;
            return (
              <Link
                key={town.slug}
                href={`/service-areas/${town.slug}`}
                className={`btn btn-sm font-display font-semibold ${
                  isCurrent ? "btn-primary" : "btn-outline border-primary/30 text-primary hover:bg-primary hover:border-primary"
                }`}
              >
                {town.name}, {town.state}
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-neutral">
          Just outside these towns? Reach out anyway — if it&apos;s close by, we can usually make it
          work.
        </p>
      </div>
    </section>
  );
}
