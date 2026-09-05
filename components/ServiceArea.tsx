import Link from "next/link";
import { towns } from "@/lib/data";

export default function ServiceArea({ currentSlug }: { currentSlug?: string }) {
  return (
    <section id="area" className="border-b border-pine/15 bg-khaki">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-pine-deep sm:text-4xl">
          Where we work
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
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
                className={`rounded-md border px-4 py-2 font-display text-sm font-semibold transition-colors ${
                  isCurrent
                    ? "border-pine bg-pine text-paper"
                    : "border-pine/30 bg-paper text-pine-deep hover:border-pine hover:bg-pine hover:text-paper"
                }`}
              >
                {town.name}, {town.state}
              </Link>
            );
          })}
        </div>

        <p className="mt-6 text-sm text-slate">
          Just outside these towns? Reach out anyway — if it&apos;s close by, we can usually make it
          work.
        </p>
      </div>
    </section>
  );
}
