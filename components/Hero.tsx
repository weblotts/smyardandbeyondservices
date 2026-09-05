import { business, services, towns } from "@/lib/data";

export default function Hero({ townName }: { townName?: string }) {
  const place = townName ?? "the Merrimack Valley";

  return (
    <section className="border-b border-pine/15 bg-pine text-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
            Yard work that doesn&apos;t stop when the leaves do.
          </h1>
          <p className="mt-5 max-w-lg text-base text-paper/85 sm:text-lg">
            {business.owners[0]} and {business.owners[1]} run every job in {place} themselves —
            spring clean-up through summer mowing, fall clean-up, and snow removal all winter.
            Most crews quiet down in the cold. We don&apos;t.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-md bg-lime px-6 py-3 font-display text-sm font-semibold text-pine-deep transition-colors hover:bg-lime-deep"
            >
              Get a free estimate
            </a>
            <a
              href="#services"
              className="rounded-md border border-paper/40 px-6 py-3 font-display text-sm font-semibold text-paper transition-colors hover:bg-paper/10"
            >
              See our services
            </a>
          </div>
        </div>

        <div className="rounded-lg border border-paper/20 bg-paper text-ink shadow-[6px_6px_0_0_var(--color-lime)]">
          <div className="flex items-center justify-between border-b border-dashed border-slate/30 px-5 py-3">
            <span className="font-display text-sm font-bold uppercase tracking-wide text-pine-deep">
              Work Order
            </span>
            <span className="font-mono text-xs text-slate">Year-round crew</span>
          </div>
          <dl className="space-y-4 px-5 py-5 text-sm">
            <div>
              <dt className="font-display font-semibold text-pine-deep">Crew</dt>
              <dd className="text-slate">{business.owners.join(" & ")} — on every job</dd>
            </div>
            <div>
              <dt className="font-display font-semibold text-pine-deep">Services ({services.length})</dt>
              <dd className="text-slate">{services.map((s) => s.name).join(", ")}</dd>
            </div>
            <div>
              <dt className="font-display font-semibold text-pine-deep">Covering ({towns.length} towns)</dt>
              <dd className="text-slate">{towns.map((t) => t.name).join(", ")}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
