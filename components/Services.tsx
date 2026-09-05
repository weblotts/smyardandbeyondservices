import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="border-b border-pine/15 bg-khaki">
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <h2 className="font-display text-3xl font-bold text-pine-deep sm:text-4xl">
          What we do
        </h2>
        <p className="mt-3 max-w-2xl text-slate">
          Eight services, one crew. Here&apos;s what we cover and when.
        </p>

        <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-pine/15 bg-pine/15 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service.slug} className="flex flex-col bg-paper p-5">
              <div className="flex items-start justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-pine-deep">
                  {service.name}
                </h3>
                <span className="shrink-0 rounded border border-mulch/30 bg-mulch/10 px-2 py-0.5 font-mono text-[11px] text-mulch">
                  {service.season}
                </span>
              </div>
              <p className="mt-2 text-sm text-slate">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
