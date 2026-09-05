import Link from "next/link";
import { business, services, towns } from "@/lib/data";

export default function Hero({ townName }: { townName?: string }) {
  const place = townName ?? "the Merrimack Valley";

  return (
    <section className="border-b border-primary/15 bg-primary text-primary-content">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Yard work that doesn&apos;t stop when the leaves do.
          </h1>
          <p className="mt-5 max-w-lg text-base text-primary-content/85 sm:text-lg">
            {business.owners[0]} and {business.owners[1]} run every job in {place} themselves —
            spring clean-up through summer mowing, fall clean-up, and snow removal all winter.
            Most crews quiet down in the cold. We don&apos;t.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact" className="btn btn-secondary font-display text-secondary-content">
              Get a free estimate
            </Link>
            <Link href="/services" className="btn btn-outline border-primary-content/40 font-display text-primary-content hover:bg-primary-content/10 hover:border-primary-content/40">
              See our services
            </Link>
          </div>
        </div>

        <div className="card border border-primary-content/20 bg-base-100 text-base-content shadow-[6px_6px_0_0_var(--color-lime)]">
          <div className="flex items-center justify-between border-b border-dashed border-neutral/30 px-5 py-3">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-primary">
              Work Order
            </span>
            <span className="font-mono text-xs text-neutral">Year-round crew</span>
          </div>
          <dl className="card-body gap-4 px-5 py-5 text-sm">
            <div>
              <dt className="font-display font-semibold text-primary">Crew</dt>
              <dd className="text-neutral">{business.owners.join(" & ")} — on every job</dd>
            </div>
            <div>
              <dt className="font-display font-semibold text-primary">Services ({services.length})</dt>
              <dd className="text-neutral">{services.map((s) => s.name).join(", ")}</dd>
            </div>
            <div>
              <dt className="font-display font-semibold text-primary">Covering ({towns.length} towns)</dt>
              <dd className="text-neutral">{towns.map((t) => t.name).join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
